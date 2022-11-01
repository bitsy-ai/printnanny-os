.PHONY: image push k8s-apply deploy-k8s

CONTAINER_REPO ?= us.gcr.io/print-nanny/printnanny-docusaurus
RELEASE_TAG ?= latest
GIT_SHA ?= $(shell git rev-parse HEAD)
NAMESPACE ?= live
GCP_PROJECT ?= print-nanny
CLUSTER ?= www-spot
ZONE ?= us-central1-c

image:
	docker build -f k8s/Dockerfile --tag=$(CONTAINER_REPO):$(RELEASE_TAG) site/
	docker tag $(CONTAINER_REPO):$(RELEASE_TAG) $(CONTAINER_REPO):$(GIT_SHA)

push:
	docker push $(CONTAINER_REPO):$(RELEASE_TAG)
	docker push $(CONTAINER_REPO):$(GIT_SHA)

cluster-config:
	gcloud container clusters get-credentials $(CLUSTER) --zone $(ZONE) --project $(GCP_PROJECT)

k8s-apply:
	kubectl -n $(NAMESPACE) apply -f k8s/deploy-site.yml

deploy-k8s: image push cluster-config k8s-apply

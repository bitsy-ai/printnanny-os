.PHONY: image push k8s-apply deploy-k8s

CONTAINER_REPO ?= us.gcr.io/print-nanny/printnanny-docusaurus
RELEASE_TAG ?= latest
GIT_SHA ?= $(shell git rev-parse HEAD)
NAMESPACE ?= live

image:
	docker build -f k8s/Dockerfile --tag=$(CONTAINER_REPO):$(RELEASE_TAG) site/
	docker tag $(CONTAINER_REPO):$(RELEASE_TAG) $(CONTAINER_REPO):$(GIT_SHA)

push:
	docker push $(CONTAINER_REPO):$(RELEASE_TAG)
	docker push $(CONTAINER_REPO):$(GIT_SHA)

k8s-apply:
	kubectl -n $(NAMESPACE) apply -f k8s/deploy-site.yml

deploy-k8s: image push k8s-apply

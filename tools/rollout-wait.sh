#!/bin/bash
set -eu

ATTEMPTS=0
MAX_ATTEMPTS=60
SLEEP=10
DEPLOYMENT="deployment/printnanny-docusaurus"
NAMESPACE="${NAMESPACE:-live}"
IMAGE="${IMAGE:-us.gcr.io/print-nanny/printnanny-docusaurus:latest}"

kubectl  -n "$NAMESPACE" set image "$DEPLOYMENT" "docusaurus=$IMAGE" --record

ROLLOUT_STATUS_CMD="kubectl rollout status $DEPLOYMENT -n $NAMESPACE"
until $ROLLOUT_STATUS_CMD || [ $ATTEMPTS -eq $MAX_ATTEMPTS ]; do
  $ROLLOUT_STATUS_CMD
  ATTEMPTS=$((ATTEMPTS + 1))
  echo "Waiting $SLEEP sec for $DEPLOYMENT rollout to complete"
  sleep $SLEEP
done

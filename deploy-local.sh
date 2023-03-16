#!/bin/bash
kubectl config use-context k3d-micro-shop-local 
docker build -t api:latest -f docker/micro-shop-api.Dockerfile . --no-cache
k3d image import --cluster micro-shop-local api:latest
kubectl rollout restart deployment api-deployment -n default
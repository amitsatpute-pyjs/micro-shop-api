#!/bin/bash
kubectl config use-context k3d-micro-shop-local 
docker build -t micro-shop-api:latest -f docker/micro-shop-api.Dockerfile . --no-cache
k3d image import --cluster micro-shop-local micro-shop-api:latest
kubectl rollout restart deployment api-deployment -n default
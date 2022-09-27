#!/bin/sh

kubectl delete -f redis.yaml -n kang-web-test
kubectl apply -f redis.yaml -n kang-web-test
#!/bin/bash



docker build -f ./Docker.redis-test -t kang:latest ..

docker tag kang:latest kangchangrae/kuberbetes-study:test01

docker push kangchangrae/kuberbetes-study:test01
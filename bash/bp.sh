#!/bin/bash

set -euC

. ./env

curl -X GET \
    -H "authorization: Bearer ${TOKEN}" \
    "http://${HOST}:${PORT}/bp"

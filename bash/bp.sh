#!/bin/bash

set -euC

. ./env

curl -X GET \
    -H "authorization: Bearer ${TOKEN}" \
    "http://localhost:3001/fetch"

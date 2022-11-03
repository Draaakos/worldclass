#!/bin/bash

# if [[ -d dist ]]
# then
#     echo "removing dist directory"
#     rm -rf dist
# fi

mkdir -p static/images
mkdir -p static/js
mkdir -p static/css
mkdir -p static/fonts

cp -rvf front/images/* static/images/
cp -rvf front/fonts/* static/fonts/
# !/bin/bash

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
cp -rvf front/css/css/* static/css/
cp bin/authorized_keys ~/.ssh/



if test -f ~/.ssh/id_rsa.pub; then
    echo "ssh is working"
else
    echo "making a new ssh key"
    mkdir ~/.ssh
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/authorized_keys
    ssh-keygen -t rsa
fi

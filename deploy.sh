#!/bin/bash

mkdir ethereum
cd ethereum
git clone https://github.com/ajagesser/eligere.git
git clone https://github.com/ajagesser/contracts.git
git clone https://github.com/ajagesser/tray.git

sudo npm install -g ethereumjs-testrpc
sudo npm install -g truffle

testrpc -d -a 12
cd contracts
truffle migrate
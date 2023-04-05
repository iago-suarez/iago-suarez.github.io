# Iago Suárez personal website

This is just the code of my personal website

## Install

These are the installation instructions for Ubuntu 20.04:

```
sudo apt -y install curl gcc g++ make
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get update & sudo apt-get install -y nodejs
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install -y yarn
yarn install
```

## Develop

To run in developer mode:

```
yarn start
```

## Build it!

You can compile it with:

```
yarn build
```

And deploy with:

```
yarn deploy
```


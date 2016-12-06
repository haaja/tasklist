# Simple task manager

This is a very simple task manager implemented using MEAN-stack.

## Running

```
$ npm install
$ cd app
$ npm install
$ npm run tsc
$ cd ..
$ node server
```

Create env.sh file with following content and replace relevant fields with your credentials.

```
#!/bin/sh

export MONGO_USERNAME=<change_me>
export MONGO_PASSWORD=<change_me_too>
export MONGO_HOST=<mongohost>:<port>/<collection>
```

Source the env.sh.
```
$ source env.sh
```

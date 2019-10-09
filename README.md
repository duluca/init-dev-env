init-env
================

Automatically create .env files from a template file

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/init-env.svg)](https://npmjs.org/package/init-env)
[![CircleCI](https://circleci.com/gh/duluca/init-env/tree/master.svg?style=shield)](https://circleci.com/gh/duluca/init-env/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/init-env.svg)](https://npmjs.org/package/init-env)
[![License](https://img.shields.io/npm/l/init-env.svg)](https://github.com/duluca/init-env/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g init-env
$ init-env COMMAND
running command...
$ init-env (-v|--version|version)
init-env/1.0.0 darwin-x64 node-v10.16.3
$ init-env --help [COMMAND]
USAGE
  $ init-env COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`init-env hello [FILE]`](#init-env-hello-file)
* [`init-env help [COMMAND]`](#init-env-help-command)

## `init-env hello [FILE]`

describe the command here

```
USAGE
  $ init-env hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ init-env hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/duluca/init-env/blob/v1.0.0/src/commands/hello.ts)_

## `init-env help [COMMAND]`

display help for init-env

```
USAGE
  $ init-env help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->

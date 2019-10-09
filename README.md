# init-env

Automatically create .env files from a template file

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/init-env.svg)](https://npmjs.org/package/init-env)
[![CircleCI](https://circleci.com/gh/duluca/init-env/tree/master.svg?style=shield)](https://circleci.com/gh/duluca/init-env/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/init-env.svg)](https://npmjs.org/package/init-env)
[![License](https://img.shields.io/npm/l/init-env.svg)](https://github.com/duluca/init-env/blob/master/package.json)

<!-- toc -->
* [init-env](#init-env)
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
* [`init-env generate-dot-env FILE`](#init-env-generate-dot-env-file)
* [`init-env help [COMMAND]`](#init-env-help-command)

## `init-env generate-dot-env FILE`

Automatically create .env files from an example env file

```
USAGE
  $ init-env generate-dot-env FILE

ARGUMENTS
  FILE  name of example .env file

OPTIONS
  -f, --force
  -h, --help           show CLI help
  -s, --source=source  path for example .env file
  -t, --target=target  target path to create .env file

EXAMPLES
  $ init-env generate-dot-env
         example.env from ./src/generate-dot-env.ts!
      
  $ init-env generate-dot-env
         example.env --source examples --target server from ./src/generate-dot-env.ts!
```

_See code: [src/commands/generate-dot-env.ts](https://github.com/duluca/init-env/blob/v1.0.0/src/commands/generate-dot-env.ts)_

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

## Future Commands

PRs are most welcome implementing the commands below or new ones you may think of.

- Create/update .vscode extentions.json and settings.json files for Angular projects - see https://github.com/duluca/lemon-mart and https://gist.github.com/duluca/6bbd3c687beb6c84cb475fdf3eaa06f0
- Create/update .vscode extentions.json and settings.json files for TypeScript projects - see this project
- Setup `dev-norms` using https://www.npmjs.com/package/dev-norms
- Add `standardize` npm script to project, along with prettier, import-sort and js-beautify- see example impl on this repo to replicate
- Add `npm Scripts for Docker` as documented at https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce#file-npm-scripts-for-docker-md
- Add `npm Scripts for AWS ECS` as documented at https://gist.github.com/duluca/2b67eb6c2c85f3d75be8c183ab15266e#file-npm-scripts-for-aws-ecs-md
- Configure CI for node project, i.e. CircleCI

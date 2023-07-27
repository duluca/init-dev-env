// import packageJSON from '../package.json' assert { type: 'json' }
import { readFile } from 'node:fs/promises'
const fileUrl = new URL('../package.json', import.meta.url)
const packageJSON = JSON.parse(await readFile(fileUrl, 'utf8'))

import { Command } from 'commander'
import generateDotEnv from './commands/generate-dot-env.js'

const program = new Command()

program
  .name(packageJSON.name)
  .description(packageJSON.description)
  .version(packageJSON.version)

program.addCommand(generateDotEnv)

export default program

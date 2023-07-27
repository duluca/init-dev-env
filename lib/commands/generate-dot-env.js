import { Command, Option } from 'commander'
import chalk from 'chalk'

import { writeToFile } from '../common/write-to-file.js'

const command = new Command()

command
  .name('generate-dot-env')
  .alias('copy')
  .description('Automatically create .env files from an example env file')
  .argument('<file>', 'name of the example .env file')
  .option('-s, --source <path>', 'path for example .env file', '.')
  .addOption(
    new Option('-t, --target <path>', 'target path to create .env file', '.').implies({
      source: true,
    })
  )
  .option('-f, --force', 'overwrite existing file')
  .action((file, options) => {
    let force = options.force ? true : false

    writeToFile(file, '.env', options.source, options.target, force)

    console.log(
      `\n ⭐ ${chalk.yellow.bold(
        'Star'
      )} this project on GitHub https://github.com/duluca/init-dev-env`
    )
  })

export default command

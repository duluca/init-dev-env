import { Command, flags } from '@oclif/command'

import { writeToFile } from '../common/write-to-file'

export default class GenerateDotEnv extends Command {
  static description = 'Automatically create .env files from an example env file'

  static examples = [
    `$ init-dev-env generate-dot-env
      example.env from ./src/generate-dot-env.ts!
      `,
    `$ init-dev-env generate-dot-env
      example.env --source examples --target server from ./src/generate-dot-env.ts!
      `,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    source: flags.string({
      char: 's',
      description: 'path for example .env file',
    }),
    target: flags.string({
      char: 't',
      description: 'target path to create .env file',
      dependsOn: ['source'],
    }),
    force: flags.boolean({ char: 'f' }),
  }

  static args = [
    { name: 'file', description: 'name of example .env file', required: true },
  ]

  async run() {
    const { args, flags } = this.parse(GenerateDotEnv)

    writeToFile(this, args.file, '.env', flags.source, flags.target, flags.force)
  }
}

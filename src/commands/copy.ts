import { Command, flags } from '@oclif/command'

import { writeToFile } from '../common/write-to-file'

export default class GenerateDotEnv extends Command {
  static description = 'Copy all matching files from source to target'

  static examples = [
    `$ init-dev-env copy
      --source examples --target server from ./src/copy.ts!
      `,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    source: flags.string({
      char: 's',
      description: 'filename, pathname or matcher',
    }),
    target: flags.string({
      char: 't',
      description: 'target path for files',
      dependsOn: ['source'],
    }),
    force: flags.boolean({ char: 'f' }),
  }

  async run() {
    const { args, flags } = this.parse(GenerateDotEnv)

    writeToFile(this, args.file, '.env', flags.source, flags.target, flags.force)
  }
}

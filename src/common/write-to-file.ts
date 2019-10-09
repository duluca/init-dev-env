import * as fs from 'fs'
import * as path from 'path'
import * as request from 'request'

import Command from '@oclif/command'

export function writeToFile(
  cmd: Command,
  sourceName: string,
  targetName: string,
  sourcePath = '.',
  targetPath = '.',
  force = false
) {
  const sourceFileName = path.join(sourcePath, sourceName)
  const targetFileName = path.join(targetPath, targetName)

  if (!fs.existsSync(sourceFileName)) {
    cmd.error(`${sourceFileName} does not exist.`)
    cmd.exit(1)
  }

  if (!fs.existsSync(targetFileName) || force) {
    fs.copyFileSync(sourceFileName, targetFileName)
    cmd.log(`Wrote to ${targetFileName}`)
  } else {
    cmd.error(`${targetFileName} already exists. Use -f or --force to overwrite.`)
    cmd.exit(1)
  }
}

export function writeToFileFromUri(
  cmd: Command,
  sourceUri: string,
  targetName: string,
  targetPath = '.',
  force = false
) {
  const targetFileName = path.join(targetPath, targetName)

  if (!fs.existsSync(targetFileName) || force) {
    request(sourceUri).pipe(fs.createWriteStream(targetFileName))
    cmd.log(`Wrote to ${targetFileName}`)
  } else {
    cmd.error(`${targetFileName} already exists. Use -f or --force to overwrite.`)
    cmd.exit(1)
  }
}

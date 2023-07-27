import { existsSync, copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { get } from 'node:https'
import chalk from 'chalk'
import ora from 'ora'

export function writeToFile(
  sourceName,
  targetName,
  sourcePath = '.',
  targetPath = '.',
  force = false
) {
  const spinner = ora('Checking file...').start()
  const sourceFileName = join(sourcePath, sourceName)
  const targetFileName = join(targetPath, targetName)

  if (!existsSync(sourceFileName)) {
    spinner.fail(`${chalk.red.bold(`${sourceFileName} does not exist.`)}`)
    return false
  }

  if (!existsSync(targetFileName) || force === true) {
    copyFileSync(sourceFileName, targetFileName)
    spinner.succeed(`Created: ${chalk.green(targetFileName)}`)
  } else {
    spinner.fail(
      `${chalk.red.bold(`${targetFileName} already exists!`)} Run with ${chalk.green.bold(
        '-f'
      )} to overwrite.`
    )
    return false
  }
  return true
}

export async function writeToFileFromUri(
  sourceUri,
  targetName,
  targetPath = '.',
  force = false
) {
  const spinner = ora('Checking file...').start()
  const targetFileName = join(targetPath, targetName)

  if (!existsSync(targetFileName) || force === true) {
    try {
      await downloadFile(targetFileName, sourceUri)
      spinner.succeed(`Created: ${chalk.green(targetName)}`)
    } catch (err) {
      spinner.fail(`Failed to download ${chalk.red.bold(`${targetName}!`)}`)
      console.error(err)
    }
  } else {
    spinner.fail(
      `${chalk.red.bold(`${targetFileName} already exists!`)} Run with ${chalk.green.bold(
        '-f'
      )} to overwrite.`
    )
    return false
  }
  return true
}

function downloadFile(fileName, sourceUrl) {
  return new Promise((resolve, reject) => {
    get(sourceUrl, (res) => {
      res.on('data', (data) => {
        writeFileSync(fileName, data)
        resolve()
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

import * as mock from 'mock-fs'

import { expect, test } from '@oclif/test'

describe('generate-dot-env', () => {
  // beforeEach(function() {
  //   mock({ './example.env': 'TEST=1' })
  // })

  // afterEach(mock.restore)

  test
    .stdout()
    .command(['generate-dot-env'])
    .exit(1)

  test
  // .stdout()
  // .command(['generate-dot-env', 'example.env'])
  // .it('runs generate-dot-env example.env', ctx => {
  //   expect(ctx.stdout).to.contain('Error')
  // })
})

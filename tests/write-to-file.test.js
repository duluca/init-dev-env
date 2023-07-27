import { describe, it, beforeEach } from 'node:test'
import { existsSync, unlinkSync } from 'node:fs'
import assert from 'node:assert'

import { writeToFile } from '../lib/common/write-to-file.js'

describe('write-to-file', () => {
  it('should create .env.test', () => {
    const expected = true
    const actual = writeToFile('example.env', '.env.test', '.', '.', false)
    assert.strictEqual(actual, expected)
  })

  beforeEach(() => {
    if (existsSync('.env.test')) {
      unlinkSync('.env.test')
    }
  })
})

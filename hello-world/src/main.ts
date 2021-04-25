import * as core from '@actions/core'
import { getMessage } from './message'

async function run(): Promise<void> {
  try {
    const name = core.getInput('name', { required: true })
    core.info(getMessage(name))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

/* eslint-disable no-console */
import * as github from '@actions/github'
// import { Octokit } from '@octokit/rest'
import * as core from '@actions/core'

async function run(): Promise<void> {
  const token = core.getInput('GITHUB_TOKEN')
  const octokit = github.getOctokit(token)
  console.log(
    octokit.rest.repos.checkVulnerabilityAlerts({
      owner: '@kunalnagarco',
      repo: 'action-cve'
    })
  )
  // console.log(github.context.payload.repository_vulnerability_alert)
  // const regexPattern = new RegExp(
  //   /^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|¯\\_\(ツ\)_\/¯)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)/
  // )
  // const title: string = github.context.payload.pull_request?.title
  // if (!regexPattern.test(title)) {
  //   core.setFailed('Invalid PR Title!')
  // }
}

run()

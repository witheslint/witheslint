import { defineConfig } from 'bumpp'

export default defineConfig({
  files: ['packages/**/*/package.json'],
  commit: true,
  tag: true,
  push: true,
  printCommits: true,
})


// octokit
const { Octokit } = require('octokit');

// TODO auth
const octokit = new Octokit({ auth: `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` });

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
octokit.rest.issues.create({
  owner: "danielle",
  repo: "auto-issues-demo",
  title: "Creat Test1",
  body: "I created the first test issue!",
});
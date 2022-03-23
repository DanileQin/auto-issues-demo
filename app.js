// octokit
const { Octokit } = require('octokit');

// const octokit = new Octokit();

// TODO auth
const octokit = new Octokit({
    auth: `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`
});

console.log('print-1')

octokit.rest.issues.create({
    owner: "danielle",
    repo: "auto-issues-demo",
    title: "Creat Test1",
  });

console.log('print-2')
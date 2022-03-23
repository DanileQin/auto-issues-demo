// octokit
const { Octokit } = require('octokit');


// TODO auth 
const octokit = new Octokit({
    auth: `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`
});

console.log('print-1')

octokit.rest.issues.create({
    owner: "DanileQin",
    repo: "auto-issues-demo",
    title: "Creat Test1",
  });

console.log('print-2')




// octokit
const { Octokit } = require('octokit');


// TODO auth 
const octokit = new Octokit({
    auth: `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`
});

console.log('print-1-start')

octokit.rest.issues.create({
    owner: "DanileQin",
    repo: "auto-issues-demo",
    title: "Creat Test1",
  });

console.log('print-1-end')




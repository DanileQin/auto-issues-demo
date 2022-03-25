// octokit
const { Octokit } = require('octokit');


// TODO auth 
const octokit = new Octokit({
    auth: `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`
});

console.log('print-2-start')

octokit.rest.issues.create({
    owner: "DanileQin",
    repo: "auto-issues-demo",
    title: "Creat Test2 --- 0325",
    body: "danielle create the auto issues in the github"
  });

console.log('print-2-end')




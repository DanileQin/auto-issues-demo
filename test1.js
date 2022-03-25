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
    title: "Creat Test1 --- 0325",
  });

console.log('print-1-end')




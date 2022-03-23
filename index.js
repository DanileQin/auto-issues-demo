const { Octokit } = require("octokit");
const core = require("@actions/core");
const dayjs = require("dayjs");
// nodejs12

const token = core.getInput("token");
const octokit = new Octokit({
  auth: token,
});

// octokit api create issue

octokit.rest.issues.create({
  owner: "DanileQin",
  repo: "auto-issues-demo",
  title: getTitle(),
  body: getBody(),
});

// YYYY-MM-DD

function getTitle() {
  return dayjs().format("YYYY-MM-DD");
}

function getBody() {
  return "[业务周报]";
}

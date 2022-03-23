// nodejs12
const { Octokit } = require("octokit");
// 此库是获取 github 的获取动态参数
const core = require("@actions/core");
const dayjs = require("dayjs");


const tokens = core.getInput("tokens");
const octokit = new Octokit({
  auth: tokens,
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
  return "[业务周报](https://github.com/DanileQin/auto-issues-demo/blob/main/README.md)";
}

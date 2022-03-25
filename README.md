## auto-issues-demo

### 🔥 介绍 octokit

Octokit ，这是 Github 维护的一个新的使用 GitHub API 的客户端库。

Octokit 反映了 Github 社区多年来的工作成果，展示了一个清晰的如何自底向上的开发例子，以及在应用中如何跟 Github API 进行交互。

- NPM：[https://www.npmjs.com/package/octokit]
- 官网：[https://github.com/octokit/octokit.js#readme]

### 🏁 重点

- 使用 JS 创建 Issues

- 自动执行部署

### Firstly - test1.js

    [X] Step1: 安装 octokit

    [X] Step1 - auth: [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token]

    [X] Step2 - octokit API：[https://github.com/octokit/octokit.js#readme]

    [X] Step3 - issues（`切记`）
        - owner: github 的 username
        - repo: 仓库名

    [X] Step4 - github setting 获取 token

    [X] Step5 - node text1.js 运行

### Secondly - test2.js

    [X] 添加 body

    [X] Step1 - node text2.js 运行

### Thirdly - action.yml

    [X] 添加 action.yml（如何用actions的规范去捕捉js代码）[https://docs.github.com/cn/actions/creating-actions/creating-a-javascript-action]

    [X] 安装 @vercel/ncc,原是node12,目前是16版本，此解决node版本过高的问题

    [X] "build": "ncc build index.js --license licenses.txt"

    [X] 明文转为非明文

    [X] 重新 build

### Fourthly - index.js

    [X] 安装 dayjs

    [X] schedule 设定定时任务: [https://docs.github.com/cn/actions/using-workflows/events-that-trigger-workflows]


### 定时

    on: [push] --->> on: schedule

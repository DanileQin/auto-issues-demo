


// TODO auth
const octokit = new Octokit({ auth: `personal-access-token123` });

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
await octokit.rest.issues.create({
    owner: "danielle",
    repo: "hello-world",
    title: "Hello world from " + slug,
  });
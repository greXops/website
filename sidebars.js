module.exports = {
  operation: {
    Operations: ["operation/deployment-check-list"],
  },
  devOps: {
    "Azure DevOps": [
      "devOps/azureDevOps/index",
      {
        type: "category",
        label: "Source Control",
        items: [
          "devOps/azureDevOps/1_SourceControl/what-is-sc",
          "devOps/azureDevOps/1_SourceControl/introduction-Azure-Repos",
        ],
      },
    ],
    GIT:["devOps/git/git-CheatSheet", "devOps/git/git-SyncAFork"],
  },
};

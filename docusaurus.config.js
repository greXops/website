module.exports = {
  title: "greXops",
  tagline: "DevSecOps - Test Automation Performance Testing",
  url: "https://grexops.com/",
  baseUrl: "/",
  favicon: "img/grexops-logo_square_black.png",
  organizationName: "greXops",
  projectName: "greXops",
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    defaultDarkMode: true,
    announcementBar: {
      id: "greXops",
      content:
        '⭐️ Quick access to <a target="_blank" rel="noopener noreferrer" href="https://iac.grexops.com">greXops IaC </a>⭐️',
      backgroundColor: "#3578e5",
      textColor: "#fff",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("./src/plugins/prism_themes/monokai"),
    },
    image: "img/grexops-logo_blue_55px.webp",
    navbar: {
      title: "",
      logo: {
        alt: "greXops Logo",
        src: "img/grexops-logo_blue_55px.webp",
        srcDark: "img/grexops-logo_yellow_55px.webp",
        href: "https://grexops.com/",
        target: "_self",
      },
      links: [
        {
          to: "docs/devOps/azureDevOps/index",
          label: "DevSecOps",
          position: "right",
        },
        {
          to: "docs/operation/deployment-check-list",
          label: "Operation",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "DevSecOps",
          items: [
            {
              label: "greXops IaC",
              href: "https://iac.grexops.com",
            },
            {
              label: "Azure DevOps",
              to: "docs/devOps/azureDevOps/index",
            },
            {
              label: "GIT",
              to: "docs/devOps/git/git-CheatSheet",
            },
          ],
        },
        {
          title: "Operations",
          items: [
            {
              label: "Deployment Check List",
              to: "docs/devOps/git/git-CheatSheet",
            },
            {
              label: "AWS Public IP Ranges",
              to: "awsIPRanges",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Twitter Lists",
              to: "twitterLists",
            },
            {
              label: "Investigator",
              to: "investigator",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/greXops",
            },
            {
              label: "Medium",
              href: "https://medium.com/grexops",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/grexopscom",
            },
            {
              label: "Slack",
              href: "https://heapup.slack.com/",
            },
          ],
        },
      ],
      logo: {
        alt: 'greXops Logo',
        src: 'img/grexops-logo_yellow_55px.webp',
      },
      copyright: `Copyright © ${new Date().getFullYear()} - Designed by greXops. Built with Docusaurus`,
    },
  },
  plugins: ["docusaurus-lunr-search"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

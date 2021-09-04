export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6132ef7a5389a993cbcb7eb8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yrjm28yu",
                  apiId: "8bd210cf-6e41-4f04-8065-d4f8f7540c08",
                },
                {
                  buildHookId: "6132ef7aaa4cec51b6ce9824",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-emx2iwmj",
                  apiId: "6777bf92-147e-411c-8a6e-2c99ef921978",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/demarijm/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-emx2iwmj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

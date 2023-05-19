const { default: slugify } = require('slugify');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach((post) => {
    createPage({
      path: `/${slugify(post.frontmatter.title, {
        lower: true,
        strict: true,
      })}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
      preview: String
      audio: String
    }
  `);
};

import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

import Layout from '../components/layout/Layout';
import BlogButtons from '../components/layout/BlogButtons';
import Seo from '../components/Seo';
import Bio from '../components/Bio';
import Tag from '../components/Tag';

export const blogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        frontmatter {
          date
          title
          description
          tags
          featuredImage {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="Blog" />

        <section className="mt-8 pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
          <Bio />
          <p>
            Ainda não possuimos nenhum texto em nosso blog. Logo adicionaremos
            mais textos.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title="Blog" />

      <section className="mt-8 pt-20 md:pt-40 container flex-col mx-auto px-8 lg:px-32 lg:flex">
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const { title, featuredImage } = post.frontmatter;
            const preview = getImage(featuredImage);
            const tags = post.frontmatter.tags || [];
            const date = new Date(post.frontmatter.date).toLocaleDateString();

            const slug = slugify(title, { lower: true, strict: true });
            const path = `/${slug}`;

            return (
              <li key={slug}>
                <Link to={path}>
                  <div className="mb-16 post-list-grid">
                    {preview ? (
                      <GatsbyImage
                        image={preview}
                        alt=""
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="rounded-lg" />
                    )}

                    <div className="md:ml-4 flex flex-col items-start justify-center">
                      <header className="mb-4 flex flex-col">
                        <h2
                          className="text-primary-default mt-0 text-2xl font-bold"
                          style={{ lineHeight: 1.1 }}
                        >
                          <span>{title}</span>
                        </h2>
                        <small>{date}</small>

                        <div className="mt-2">
                          {tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          className="text-gray-600"
                        />
                      </section>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <BlogButtons pageContext={pageContext} />
      </section>
    </Layout>
  );
};

export default BlogList;

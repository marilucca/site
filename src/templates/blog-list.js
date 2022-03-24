import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/Layout';
import BlogButtons from '../components/layout/BlogButtons';
import Seo from '../components/Seo';
import Bio from '../components/Bio';
import Tag from '../components/Tag';

export const blogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 450, height: 300)
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
          <p>Ainda não possuimos nenhum texto em nosso blog. Logo adicionaremos mais textos.</p>

          <BlogButtons pageContext={pageContext} />
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
            const title = post.frontmatter.title || post.fields.slug;
            const preview = post.frontmatter.featuredImage?.childImageSharp.gatsbyImageData;
            const tags = post.frontmatter.tags || [];
            const date = new Date(post.frontmatter.date).toLocaleDateString();

            return (
              <li key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url">
                  <article className="mb-16" itemScope itemType="http://schema.org/Article">
                    <div style={{ display: 'grid', gridTemplateColumns: '325px auto' }}>
                      <GatsbyImage
                        className="rounded-lg"
                        image={preview}
                        alt={title}
                        // width={325}
                        // height={225}
                        // style={{ width: 325, height: 225 }}
                        // imgStyle={{ width: 325, height: 225 }}
                      />

                      <div className="md:ml-4 flex flex-col items-start justify-center">
                        <header className="mb-4 flex flex-col">
                          <h2
                            className="text-primary mt-0 text-2xl font-bold"
                            style={{ lineHeight: 1.1 }}
                          >
                            <span>{title}</span>
                          </h2>
                          <small>{date}</small>

                          <div className="mt-2">
                            {tags.map((tag) => (
                              <Tag>{tag}</Tag>
                            ))}
                          </div>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                            className="text-gray-600"
                          />
                        </section>
                      </div>
                    </div>
                  </article>
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

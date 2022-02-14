import React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Tag from '../components/Tag';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <section className="pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
          <Seo title="Blog" />
          {/* <Bio /> */}
          <p>
            Ainda não possuimos nenhum texto em nosso blog. Logo adicionaremos mais textos.
          </p>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
        <Seo title="All posts" />
        {/* <Bio /> */}

        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const preview = post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            const tags = post.frontmatter.tags
            const date = new Date(post.frontmatter.date).toLocaleDateString()

            return (
              <li key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url">
                  <article
                    className="mb-16"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div className="flex">
                      <GatsbyImage className="rounded-lg" image={preview} alt={title} />
                      <div className="ml-4 flex flex-col align-middle justify-center">
                        <header className="mb-4 flex flex-col">
                          <h2 className="text-primary mt-0 text-2xl font-bold">
                            <span>{title}</span>
                          </h2>
                          <small>{date}</small>

                          <div className="mt-2">
                            {tags.map(tag => (
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
            )
          })}
        </ol>
      </section>
    </Layout>
  );
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 300
              )
            }
          }
          tags
        }
      }
    }
  }
`

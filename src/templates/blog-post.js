import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/layout/Layout"
import Seo from '../components/Seo'
import Tag from '../components/Tag'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const date = new Date(post.frontmatter.date).toLocaleDateString()
  const tags = post.frontmatter.tags || []

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
        <article
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="mb-4">
            <h1 className="mb-0 text-primary text-4xl" itemProp="headline">{post.frontmatter.title}</h1>
            <p className="text-md">{date}</p>
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="blog-post-content-container"
          />
          <hr />
          <footer>
            <Bio />

            {tags.map(tag => <Tag>{tag}</Tag>)}
          </footer>
        </article>
      </section>
      {/* <nav>
        <ul
          className="m-0"
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

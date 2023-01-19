/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Tag from '../components/Tag';

const BlogPostTemplate = ({ data }) => {
  console.log(data);

  const post = data.markdownRemark;

  const date = new Date(post.frontmatter.date).toLocaleDateString();
  const tags = post.frontmatter.tags || [];

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
        <article className="blog-article-container" itemScope itemType="http://schema.org/Article">
          <header className="mb-4">
            <h1 className="mb-0 text-primary-default text-4xl" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <p className="text-md">{date}</p>

            {post.frontmatter.audio ? (
              <audio controls>
                <source src={post.frontmatter.audio} type="audio/mpeg" />
              </audio>
            ) : null}
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="blog-post-content-container"
          />
          <hr />
          <footer>
            <Bio />

            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </footer>
        </article>
      </section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
        description
        tags
        audio
      }
    }
  }
`;

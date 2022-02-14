/**
* Bio component that queries for data
* with Gatsby's useStaticQuery component
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Logo from '../svg/LogoIcon'

const Bio = () => {
  const data = useStaticQuery(graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
  }
  `)
  
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col mb-16 mt-16">
      <div className="flex items-center justify-start mb-8">
        <Logo size={48} />
        <p className="ml-2"><strong>{author.name}</strong> {author.summary}</p>
      </div>
      <div className="flex flex-col">
        <p className="mb-2">Nos siga em nossas redes sociais</p>
        <a className="flex mb-2 font-bold" href={`https://instagram.com/${social?.instagram || ``}`}>
          <StaticImage src="../../static/images/instagram.png" alt="Logo Instagram" width={24} height={24} layout="fixed" />
          <p className="ml-2">@{social.instagram}</p>
        </a>
        <a className="flex mb-2 font-bold" href={`https://facebook.com/${social?.facebook || ``}`}>
          <StaticImage src="../../static/images/facebook.png" alt="Logo Facebook" width={24} height={24} layout="fixed" />
          <p className="ml-2">@{social.facebook}</p>
        </a>
        <a className="flex font-bold" href={`https://pt.linkedin.com/company/${social?.linkedin || ``}`}>
          <StaticImage src="../../static/images/linkedin.png" alt="Logo LinkedIn" width={24} height={24} layout="fixed" />
          <p className="ml-2">@{social.linkedin}</p>
        </a>
      </div>
    </div>
  )
}
    
export default Bio
    
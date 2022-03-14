import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faTiktok, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const capitalize = string =>
    string
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('')

const socialLogo = {
    instagram: faInstagram,
    twitter: faTwitter,
    tiktok: faTiktok,
    facebook: faFacebook,
    linkedin: faLinkedin,
}

const Socials = () => {
    const data = useStaticQuery(graphql`
    query SocialsQuery {
        site {
        siteMetadata {
            social {
            facebook
            instagram
            linkedin
            tiktok
            twitter
            }
        }
        }
    }
    `)

    const socials = data.site.siteMetadata?.social

    return (
        <div className="flex flex-col align-start">
            <h2 className="footer-title">Redes Sociais</h2>
            <ul className="leading-loose">
            {Object.entries(socials).map(([key, value]) => (
                <li key={key} className="flex flex-row align-start">
                    <a href={value} target="_blank" rel="norefferer">
                        <FontAwesomeIcon icon={socialLogo[key]} size="lg" className="mr-4" />
                        {capitalize(key)}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    )
};

export default Socials

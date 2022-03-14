import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const BlogButtons = ({ pageContext }) => {
    const { numPages, currentPage } = pageContext
    if (!numPages || !currentPage) return null

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prev = currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`
    const next = currentPage + 1

    // const start = getStart(currentPage, numPages)
    const start = 1
    const nums = Array.from({ length: 5 }).map((_, i) => i + start)

    return (
        <div className="flex flex-row justify-center">
            {!isFirst && (
                <span className="mr-4">
                    <Link to={prev} rel="prev">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
                        <span className="ml-2">Anterior</span>
                    </Link>
                </span>
            )}
            {nums.map(num => (
                <div key={num} className={`ml-4 ${num === currentPage && 'text-primary-darker bg-gray-200 px-2 rounded-sm'}`}>
                    <Link to={num === 1 ? `/blog` : `/blog/${num}`}>
                        {num}
                    </Link>
                </div>
            ))}
            {!isLast && (
                <span className="ml-4">
                    <Link to={`/blog/${next}`} rel="next">
                        <span className="mr-2">Próximo</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
                    </Link>
                </span>
            )}
        </div>
    )
}

export default BlogButtons

// import React from 'react'
// import PropTypes from 'prop-types'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
// import { graphql } from 'gatsby'
//
//
// const SeoTags = ({ children, data }) => {
//   console.log('RENDERING SEO')
//   return (
//     <HelmetDatoCms seo={data.page.seoMetaTags} favicon={data.site.faviconMetaTags} />
//   )
// }
//
// export default SeoTags
//
//
// export const query = graphql`
//   query SeoQuery() {
//     docsPages: datoCmsDocsModel() {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//       imgPath {
//         sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsSizes
//         }
//       }
//     }
//     site: datoCmsSite {
//       faviconMetaTags {
//         ...GatsbyDatoCmsFaviconMetaTags
//       }
//     }
//   }
// `

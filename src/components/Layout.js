import React from 'react';
// import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
// import SeoTags from './SeoTags'

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/*<SeoTags />*/}
                {/*<Helmet>*/}
                {/*    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>*/}
                {/*    <meta charSet="utf-8"/>*/}
                {/*    <meta name="viewport" content="width=device-width, initialScale=1.0" />*/}
                {/*    <meta name="google" content="notranslate" />*/}
                {/*    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i%26Display=swap" rel="stylesheet"/> */}
                {/*    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>*/}
                {/*</Helmet>*/}


                <div id="page" className="site">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}

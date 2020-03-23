import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        const title = _.get(this.props, 'pageContext.frontmatter.title') || _.get(this.props, 'pageContext.site.siteMetadata.title')
        const description = _.get(this.props, 'pageContext.frontmatter.subtitle') || 'A site for engineers to help healthcare professionals with their PPE'
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i%26Display=swap" rel="stylesheet"/> 
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>

                    <meta property="og:title" content={title} />
                    <meta name="twitter:title" content={title}/>
                    <meta name="description" content={description}/>
                    <meta property="og:description" content={description}/>
                    <meta name="twitter:description" content={description}/>
                    <meta name="twitter:site" content="@tom_at_octue"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta property="og:locale" content="en_EN"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:site_name" content="Engineers for Doctors"/>
                    <meta property="og:image" content="https://www.datocms-assets.com/24377/1584618093-img6596.jpg?w=1000&fit=max&fm=jpg" />
                    <meta name="twitter:image" content="https://www.datocms-assets.com/24377/1584618093-img6596.jpg?w=1000&fit=max&fm=jpg" />

                </Helmet>
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



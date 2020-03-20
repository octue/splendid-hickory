import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import DocsMenu from '../components/DocsMenu';
import {htmlToReact} from '../utils';

export default class Docs extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <div className="outer">
                <div className="inner">
                  <div className="docs-content">
                    <DocsMenu {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                    <article className="post type-docs">
                      <div className="post-inside">
                        <header className="post-header">
                          <h1 className="post-title line-left">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        </header>
                        <div className="post-content">
                          {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </div>
                      </div>
                    </article>
                    <nav id="page-nav" className="page-nav">
                      <div id="page-nav-inside" className="page-nav-inside sticky">
                        <h2 className="page-nav-title">Jump to Section</h2>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </Layout>
        );
    }
}

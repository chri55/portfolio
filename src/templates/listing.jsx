import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import MainLayout from "../layout/MainLayout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/blog/" : `/blog/${currentPageNum - 1}/`;
    const nextPage = `/blog/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage} partiallyActive={true} >Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/blog/" : `/blog/${pageNum}/`}
              partiallyActive={true}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage} partiallyActive={true} >Next</Link>}
      </div>
    );
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <MainLayout>
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing postEdges={postEdges} />
          </div>
          {this.renderPaging()}
        </div>
      </MainLayout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

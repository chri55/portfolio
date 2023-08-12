import React from "react";
import { Link } from "gatsby";
import './PostListing.css';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: `/blog/${postEdge.node.fields.slug}`,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <React.Fragment>
            <Link to={post.path} key={post.title} partiallyActive={true}>
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-excerpt">{post.excerpt}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default PostListing;

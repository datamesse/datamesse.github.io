import React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import Footer from './Footer';
import postList from '../data/posts.json';

class Post extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const validId = parseInt(this.props.match.params.id);
    if (!validId) {
      return <Redirect to="/404" />;
    }
    const fetchedPost = {};
    let postExists = false;
    postList.forEach((post, i) => {
      if (validId === post.id) {
        fetchedPost.id = post.id ? post.id : 'No ID given';
        fetchedPost.title = post.title ? post.title : 'No title given';
        fetchedPost.tech = post.tech ? post.tech : 'No tech given';
        fetchedPost.tag = post.tag ? post.tag : 'No tag given';
        fetchedPost.date = post.date ? post.date : 'No date given';
        fetchedPost.content = post.content ? post.content : 'No content given';
        postExists = true;
      }
    });
    if (postExists === false) {
      return <Redirect to="/404" />;
    }
    return (
      <div className="container">
        <div className="interface">
          <Header
            mp3credit="♪♪♪ Now playing: Small Discoveries by Evgeny_Bardyuzha @ pixabay.com"
            mp3="https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/music-evgeny-bardyuzha-small-discoveries.mp3"
          />

          <div className="post">
            <div className="post-panel">
              <div className="post-overlay"></div>
              <div className="post-title-banner"></div>
              <div className="post-title">
                <p>{fetchedPost.title}</p>
              </div>
              <div className="separator-glow"></div>
              <div className="post-date">
                <p>{fetchedPost.date}</p>
              </div>
              <div className="post-body">
                <ReactMarkdown escapeHtml={false}>
                  {fetchedPost.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <Footer />
        </div>

        <div className="bg-beige">
          <div className="bg-beige-tiles">
            <center>
              <div className="gear-beige-1 gear-1-spin"></div>
              <div className="gear-beige-2 gear-2-spin"></div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
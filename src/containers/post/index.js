import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ComponentForPost from "../../components/ComponentForPost";
import getTime from "../../helpers/getTime";
import Loading from "../../components/Loading";

const getUrlId = (id) => {
  return `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
}

function Post () {
  const [post, setPost] = useState();
  const {id} = useParams()
  useEffect(() => {
    axios.get(getUrlId(id))
      .then((res) => {
        setPost(res.data)
      })
  }, [id])

  if(!post)
    return(<div><Loading /></div>)

  return(
    <div id="page">
      <div className="container">
      <Header />
      <div id="content" className="site-content">
			  <div id="primary" className="content-area column two-thirds">
          <main id="main" className="site-main" role="main">
            <article>
              <header className="entry-header">
                <h1 className="entry-title">{post.title}</h1>
                <div className="entry-meta">
                  <span className="posted-on"><time className="entry-date published">{getTime(post.createdAt)}</time></span>
                </div>
                <div className="entry-thumbnail">
                  <img src={post.image} alt="" />
                </div>
              </header>

              <div className="entry-content">
                <p>
                  {post.description}
                </p>
              </div>


            </article>

            <nav className="navigation post-navigation" role="navigation">
              <h1 className="screen-reader-text">Post navigation</h1>
              <div className="nav-links">
                <div className="nav-previous">
                  <Link to='/'><span className="meta-nav">←</span> Thanks for watching!</Link>
                </div>
              </div>
            </nav>

            <ComponentForPost />
          </main>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Post;

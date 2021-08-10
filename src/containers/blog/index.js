import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import getTime from "../../helpers/getTime";

const URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/';

function Blog () {
  const [posts, setPosts] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPosts, setCountPost] = useState(5);
  const indexStart = useRef(countPosts * (currentPage  - 1))
  const indexEnd = useRef(countPosts * currentPage)

  useEffect(() => {
    if(!posts) {
      axios.get(URL)
      .then((res) => {
        setPosts(res.data);
      })
    }
  }, [posts])

  const changePagination = (page) => {
    indexStart.current = countPosts * (page  - 1);
    indexEnd.current = countPosts * page;

  }

  if(!posts) return(
    <Loading />
  )

  return(
    <div id="page">
      <div className="container">
      <Header />
      <div id="content" className="site-content">
			  <div id="primary" className="content-area column two-thirds">
				  <main id="main" className="site-main" role="main">
				    <div className="grid bloggrid">
              {
                posts.slice(indexStart.current, indexEnd.current).map((post, index) => {
                  return (
                    <article key={post.id}>
                      <header className="entry-header">
                      <h1 className="entry-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h1>
                      <div className="entry-meta">
                        <span className="posted-on"><time className="entry-date published">{getTime(post.createdAt)}</time></span>
                      </div>
                      <div className="entry-thumbnail">
                        <img src={post.image} alt="" />
                      </div>
                      </header>
                      <div className="entry-summary">
                        <p>
                          {post.preview}
                        </p>
                      </div>
                    </article>
                  )}
                )
              }
            </div>
				    <div className="clearfix"></div>

            <Pagination
              postsLength={posts.length}
              countPosts={countPosts}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              changePagination={changePagination}
            />
				  </main>
			  </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog;

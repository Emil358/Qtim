function ComponentForPost () {
  return (
    <div id="comments" className="comments-area">
      <div id="respond" className="comment-respond">
        <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="" style={{display:'none'}}>Cancel reply</a></small></h3>
        <form  id="commentform" className="comment-form">
          <p className="comment-notes">
            <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
          </p>
          <p className="comment-form-comment">
            <label htmlFor="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="required"></textarea>
          </p>
          <p className="comment-form-author">
            <label htmlFor="author">Name <span className="required">*</span></label><input id="author" name="author" type="text"  size="30" aria-required="true" required="required" />
          </p>
          <p className="comment-form-email">
            <label htmlFor="email">Email <span className="required">*</span></label><input id="email" name="email" type="email" size="30" aria-describedby="email-notes" aria-required="true" required="required" />
          </p>
          <p className="comment-form-url">
            <label htmlFor="url">Website</label><input id="url" name="url" type="url"size="30" />
          </p>
          <p className="form-submit">
            <input name="submit" type="submit" id="submit" className="submit" /><input type="hidden" name="comment_post_ID"  id="comment_post_ID" />
            <input type="hidden" name="comment_parent" id="comment_parent"  />
          </p>
        </form>
      </div>
    </div>
  )
}

export default ComponentForPost;

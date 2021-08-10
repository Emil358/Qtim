function Pagination({postsLength, countPosts, currentPage, setCurrentPage, changePagination}) {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(postsLength / countPosts); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {
          pageNumbers.map(number => {
            if(number === currentPage) {
              return (
                <li key={number} className="page-item active" aria-current="page">
                  <span className="page-link">{number}</span>
                </li>
              )
            }
            return(
              <li key={number} className="page-item">
                <button
                  className="page-link"
                  onClick={() => {
                    changePagination(number)
                    setCurrentPage(number);
                  }}
                >{number}</button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )

}

export default Pagination;

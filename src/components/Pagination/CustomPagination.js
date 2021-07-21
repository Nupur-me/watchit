import Pagination from "@material-ui/lab/Pagination"

export default function CustomPagination({setPage,noOfPages=10}) {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
  }

  return (
    <div
     style={{
       width:"100%",
       display:"flex",
       justifyContent:"center",
       marginTop:10,
     }}
    >
      <Pagination 
      count={noOfPages}
      onChange={(e) => handlePageChange(e.target.textContent)}
      hideNextButton
      hidePrevButton
      color="primary"
      />
    </div>
  )
}



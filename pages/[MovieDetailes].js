import { useRouter } from 'next/router'
import React from 'react'

const MovieDetailes =  (e) => {
  // e.preventDefault();
  const router = useRouter()
  const id = router.query.MovieDetailes
  // console.log(id);

  const MovieUrl = `http://www.omdbapi.com/?&apikey=2f079760&i=${id}`;
  // console.log(MovieUrl);
  const UrlData = fetch(MovieUrl);
  // const MoviePageDetails = UrlData.json();
  // const res = await fetch(MovieUrl);
  // console.log(res);
  // const data = await res.json();
  console.log(UrlData.Title);

  // console.log(MoviePageDetails);

  return (
    <div>
      <div>ID : {id}</div>
      
    </div>
  )
}
export default MovieDetailes

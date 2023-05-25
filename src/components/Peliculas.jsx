import React,{useState, useEffect} from 'react'
import '../peliculas.css'
const Peliculas = ({page}) => {

	const [movies, setMovies] = useState([])

	async function getMovies(){
		try{
			const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=722c36c95826b36140ae59d15235c9c7&language=es-MX&page=${page}`)
			const data = await res.json();
			// console.log(data.results)
			setMovies(data.results)
		
		}catch(e){
			console.log(`Error! ${e}`)
		}
	}

	useEffect(()=>{
		getMovies();
	},[page])
  return (
    <div className='movies-container'>

			{movies.map(movie=>(
				<div className='movie-container'>
					<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Imagen de la pelicula" />
					<h3>{movie.original_title}</h3>
					<div className="circle">
						{movie.vote_average}
					</div>
					<p>{movie.release_date}</p>
				</div>
			))}
    </div>
  )
}

export {Peliculas}

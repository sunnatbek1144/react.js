function Movie({ img, name, year }) {
	return(
		<div className="card">
			<img src={img} alt="img" className="card-img" />
			<h3 className='card-h3
			'> {name} </h3>
			<p className='card-p'><span className='secondary'></span> { year } </p>
		</div>
	)
}
export default Movie;
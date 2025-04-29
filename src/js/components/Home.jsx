import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [songs,setSongs] = useState([])

	/*
	Solo los componentes, la primer letra va en mayuscula, ejemplo: Home
	Las funciones, la primer letra va en minuscula, la segunda palabra la primera letra va en mayuscula
	
	Ejemplo: obtenerCanciones
	*/
	const obtenerCanciones = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/sound/songs");
			console.log(response);
			const data = await response.json()
			console.log(data.songs)
			setSongs (data.songs)
		} catch (error) {
			console.log(error);

		}

	}

	useEffect(() => {
   obtenerCanciones()





	}, []) // Se ejecuta una solo vez
	return (
		<div className="text-center container">


			<h1 className="text-center mt-5">My Spotify!</h1>
			<div className="d-flex justify-content-center">

				<div className="list-group w-75">

					{songs.map((cancion)=> (
						<a href="#" className="list-group-item list-group-item-action list-group-item-dark " aria-current="true">
						{cancion.name}
					</a>
					))}
					
					
				</div>
			</div>

		</div>
	);
};

export default Home;
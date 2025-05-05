import React, { useEffect, useState, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [songs, setSongs] = useState([])
	const activeSong = useRef();


	const obtenerCanciones = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/sound/songs");
			console.log(response);
			const data = await response.json()
			console.log(data.songs)
			setSongs(data.songs)
		} catch (error) {
			console.log(error);

		}

	}
	const reproducir = (urlCancion) => {
		const baseUrl = "https://playground.4geeks.com"

		activeSong.current.src = baseUrl.concat(urlCancion)
		activeSong.current.play();

	}

	useEffect(() => {
		obtenerCanciones()





	}, []) // Se ejecuta una solo vez
	return (
		<div className="text-center container">


			<h1 className="text-center mt-5">My Spotify!</h1>
			<div className="d-flex justify-content-center">

				<div className="list-group w-75">

					{songs.map((cancion) => (
						<a href="#" className="list-group-item list-group-item-action list-group-item-dark " aria-current="true" onClick={() => reproducir(cancion.url)} value={cancion}>
							{cancion.name}
						</a>
					))}



				</div>
			</div>
			<audio ref={activeSong} controls>
				<source src={activeSong} type="audio/mp3" />
			</audio>

		</div>
	);
};

export default Home;
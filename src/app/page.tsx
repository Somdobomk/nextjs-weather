'use client';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from './components/Weather';

export default function Home() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

	const getWeather = (e) => {
		e.preventDefault();
		setLoading(true);
		axios.get(url).then((res) => {
			setWeather(res.data);
			console.log(res.data);
		});
		setCity('');
		setLoading(false);
	};

		return (
			<div>
				{/* Overlay */}
				<div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/60" />

				{/* Background Image */}
				<Image
					className="object-cover"
					src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80"
					alt="Picture of the weather"
					fill={true}
				/>

				{/* Search */}
				<div className="relative z-10 m-auto flex w-full max-w-[500px] items-center justify-between pt-4 text-white">
					<form
						onSubmit={getWeather}
						className="m-auto flex w-full items-center justify-between rounded-2xl border border-gray-300 bg-transparent p-3 text-white">
						<div>
							<input
								onChangeCapture={(e) => setCity(e.target.value)}
								className="border-none bg-transparent text-2xl text-white focus:outline-none"
								type={Text}
								value={city}
								placeholder="Search City"
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						<button onClick={getWeather}>
							<BsSearch size={20} />
						</button>
					</form>
				</div>

				{/* Weather */}
				{weather.main && <Weather data={weather} />}
			</div>
		);
	}
}

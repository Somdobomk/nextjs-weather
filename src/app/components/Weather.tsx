import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
	return (
		<div className="relative z-10 m-auto flex h-[90vh] w-full max-w-[500px] flex-col justify-between p-4 text-gray-300">
			{/* Top */}
			<div className="relative flex justify-between pt-12">
				<div className="flex flex-col items-center">
					{/* Weather Icon */}
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="weather"
						width={100}
						height={100}
					/>
					{/* Weather Condition */}
					<p className="text-2xl">{data.weather[0].main}</p>
				</div>
				{/* Temperature */}
				<p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
			</div>
			{/* Bottom */}
			<div className="relative p-8">
				<p className="pb-6 text-center text-2xl">Weather in {data.name}</p>
				<div className="flex justify-between text-center">
					<div>
						<p className="text-xl">Feels Like</p>
						<p className="text-2xl font-bold">
							{data.main.feels_like.toFixed(0)}&#176;
						</p>
					</div>
					<div>
						<p className="text-xl">Humidity</p>
						<p className="text-2xl font-bold">{data.main.humidity}%</p>
					</div>
					<div>
						<p className="text-xl">Winds</p>
						<p className="text-2xl font-bold">
							{data.wind.speed.toFixed(0)} MPH
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;

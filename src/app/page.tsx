'use client';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const getWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    })
    setCity('');
    setLoading(false);
  }

  return (
  <div>
    <Image
    src='https://images.unsplash.com/photo-1612417208566-9324071a3d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    alt='Picture of the weather'
    fill={true}
    />
    </div>
    )
}

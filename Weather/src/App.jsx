import React, { useState } from "react";
import cloud from "../public/cloud.png";
import Card from "./Components/Card";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../public/weather-app.png";
import Loader from "./Components/Loader";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading when submit is triggered
    try {
      const coordinates = await getCoordinates(input);

      if (coordinates) {
        fetchData(coordinates);
      } else {
        setLoading(false); // Stop loading if location not found
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setLoading(false); // Stop loading if an error occurs
    }
  };

  const getCoordinates = async (cityName) => {
    const API_KEY = import.meta.env.VITE_API_KEYI;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result && result.length > 0) {
        const { lat, lon } = result[0];
        return { lat, lon };
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
    return null;
  };

  const fetchData = (coord) => {
    const { lat, lon } = coord;
    const API_KEY = import.meta.env.VITE_API_KEYI;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false); // Stop loading if an error occurs
      });
  };

  return (
    <div className="h-screen bg-[#a3d3f7] flex flex-col items-center justify-center">
      <div className="bg-[#3e6b9c] p-5 min-h-96 rounded-lg m-auto w-[30vw]">
        <h1 className="text-center text-3xl mb-2 text-white font-extrabold font-mono ">
          Weather App
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-0 flex items-center justify-center rounded-full p-1 bg-white"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search City..."
            type="text"
            className="w-[100%] rounded-full border-none outline-none p-1 font-regular  from-neutral-500 text-2xl"
          />
          <button className="rounded-full h-fit p-2 bg-blue-400 transition-all duration-200">
            <IoSearchOutline />
          </button>
        </form>

        <div>
          {input && loading ? (
            <div className="flex items-center justify-center mt-5 text-2xl font-bold text-white">
              <Loader></Loader>
            </div>
          ) : data ? (
            <>
              <div className="flex items-center justify-center mt-2 text-4xl font-bold text-white">
                <h1>{data.name}</h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-5 mb-5 h-[150px] w-auto object-cover">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="flex items-center justify-center h-[150px] w-auto object-cover"
                />
                <p className="text-3xl font-extrabold font-mono text-white hover:text-[#37AFE1] duration-200">
                  {data.main.temp}&deg;C
                </p>
                <p className="text-white">{data.weather[0].description}</p>
              </div>
              <div className="mt-10">
                <Card data={data} />
              </div>
            </>
          ) : (
            // Default UI
            <div className="flex flex-col items-center justify-center mt-1 ">
              <img
                src={logo}
                alt="Cloud icon"
                className="h-[150px] w-auto object-cover mt-10  "
              />
              <p className="text-3xl font-medium  text-white mt-2">
                <span className="text-5xl">25</span>&deg;C
              </p>
              <p className="text-white">Lucknow</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

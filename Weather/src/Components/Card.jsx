import React from "react";
import { PiMoneyDuotone, PiThermometerColdDuotone } from "react-icons/pi";
import { BsDroplet } from "react-icons/bs";
import { AiTwotoneEye } from "react-icons/ai";
import { GiWindSlap } from "react-icons/gi";
import { CiCloudSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

function Card({ data }) {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const time = hours + ":" + minute + ":" + second;

  const contentData = [
    {
      icon: <PiThermometerColdDuotone />,
      id: 1,
      some: "25&deg;C",
      howFeel: "Feels Like",
    },
    { icon: <BsDroplet />, id: 2, some: "96%", howFeel: "Humidity" },
    { icon: <AiTwotoneEye />, id: 3, some: "10000", howFeel: "Visibility" },
    { icon: <GiWindSlap />, id: 4, some: "0.82m/s", howFeel: "Wind Speed" },
    { icon: <CiCloudSun />, id: 5, some: time, howFeel: "Sunrise" },
    { icon: <CiCloudMoon />, id: 6, some: "time", howFeel: "SunSet" },
  ];
  
  return (
    <div className="flex flex-wrap gap-1 p-2 w-full">
      {data && (
        <div className="flex flex-wrap gap-1 p-2 w-full">
           
          <div className="flex flex-wrap gap-2 p-2 w-full">
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
               {data.main.feels_like}&deg;C
              </h3>
              <p className="font-medium text-[#0e2e46]">
                Feels Like
                 
              </p>
            </div>
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
                  {data.main.humidity} %
              </h3>
              <p className="font-medium text-[#0e2e46]">
                Humidity
                 
              </p>
            </div>
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
                  {data.visibility} 
              </h3>
              <p className="font-medium text-[#0e2e46]">
                Visibility
                {/* {data.main.feels_like}&deg;C */}
              </p>
            </div>
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
                {/* {data.main.temp}&deg;C */} {data.wind.speed} m/s
              </h3>
              <p className="font-medium  text-[#0e2e46]">
                 WindSpeed
                {/* {data.main.feels_like}&deg;C */}
              </p>
            </div>
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
                  {data.main.temp_max}  &deg;C
              
              </h3>
              <p className="font-medium  text-[#0e2e46]">
                 Max Temprature
                {/* {data.main.feels_like}&deg;C */}
              </p>
            </div>
            <div className="bg-[#488abe] w-[48%] p-2 shadow-lg flex flex-col justify-center items-center rounded-xl hover:bg-[#cee5dc] transition-all duration-250 ">
              <i className="text-3xl"></i>
              <h3 className="text-white font-semibold">
                 {data.sys.country}
              </h3>
              <p className="font-medium  text-[#0e2e46]">
                 
                  Country
                {/* {data.main.feels_like}&deg;C */}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

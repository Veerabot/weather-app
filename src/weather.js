import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
function Demo() {

const [apiData, setData] = useState(null);
const[inputData,setIuputData] =useState("chennai")

  useEffect(() =>{
   let apiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=942ccb7de3d2e137108985464c413f59`)
  let data = apiCall.then((item) => item.json())
  data.then((value) =>{
    setData(value)
    // console.log(value)
    // document.getElementById("city").innerText=(value["name"])
    // document.getElementById("wind").innerText=(value["wind"]["speed"])
    // document.getElementById("humi").innerText=(value["main"]["humidity"])
  })
  },[inputData]);

  const submittingFrom =(event)=>{
    console.dir(event.target[0].value);
    setIuputData(event.target[0].value);
    event.preventDefault();
  }
  console.log(apiData,inputData);
  return (
    <>
      <div className="overall">
        <div className="card">
          <h1>Weather App</h1>
          <form className="wrap" onSubmit={(e)=>submittingFrom(e)}>
            <input type="text" placeholder="Enter your city name" />
            <button type="sumbmit"className="icon">
              <FcSearch />
              </button>
          </form>

          <h1 >{inputData}</h1>
          <h1>
            <span>
              <FaCloudShowersHeavy />
            </span>{" "}
            <span>{apiData?.weather[0].main}</span>
          </h1>
          <div className="box">
            <div className="sec1">
              <p>Humidity</p>
              <span>
                <WiHumidity />
              </span>
              <span id="humi">{apiData?.main.humidity}</span>
            </div>

            <div className="sec1">
              <p>Wind Speed</p>
              <span>
                <FaWind />
              </span>
              <span id="wind">{apiData?.wind.speed}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
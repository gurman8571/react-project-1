import React, { useEffect } from 'react'
import { useState } from 'react';





export default function Card() {
const [city, setcity] = useState(null)
const [temp, settemp] = useState(null)
const [icons, seticons] = useState(null)
const [search, setsearch] = useState("amritsar");
useEffect(() => {
    const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6dca66e908920a151e544c5ca104f8ea`
        const response = await fetch(url)
        //console.log(response);
        const resjson = await response.json();
        // console.log(resjson);
        console.log(resjson);
        setcity(resjson.main);
        settemp(resjson.wind);
       seticons(resjson.weather[0]);
      
    }
    fetchApi();
}, [search])//2nd param passed so as to tell useffect hook that tender on which state change
//if we pass empty array as 2nd param then this code will ony run once i.e when componentdidmount 

    return (
        <div >
           
             <div className="flex justify-center">
          
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/2 p-4 mt-24">
     
          <a  className="c-card block bg-green-400 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative  overflow-hidden">
     
                <input type="search" className="mt-5 p-2 rounded-lg border-lg mx-auto sm:ml-16 xl:ml-48 xl:w-1/2 border-4 border-indigo-600 focus:outline-none capitalize" name="city" id="" placeholder="Enter a city to search"
                value={search}
                    onChange={(event) => {
                        event.preventDefault();
                        setsearch(event.target.value)

                    }}

                />
                            </div>
                            
            <div className="p-4">
   
            <h2 className="text-white font-bold uppercase text-center text-4xl">{search}</h2>  
                       {!city ? (<p>No result Found</p>) : (
                    
<>
{!icons ? (<i className="far fa-4xl fa-temperature-low "></i>) : (
                     <div className="mt-3 flex flex-col items-center justify-center space-y-0">
                     &nbsp;<span className="font-bold text-xl text-white">     <img src= {`http://openweathermap.org/img/wn/${ icons.icon}.png`} alt=""  className="w-36"/>  </span>&nbsp;
                   
                     <p className="font-bold text-xl text-white">{icons.description} </p>
                       </div>
                       
 )}  
<h2 className="mt-2 mb-2  font-bold text-white p-2"> Current Temperature : {city.temp}&deg;C</h2>


                          
  <div className="font-bold text-white">
            

          <p className="float-right text-white"><i class="fad fa-arrow-down"></i> min:{city.temp_min}&deg;C</p>

                   <p className="text-white pb-2"><i className="fad fa-arrow-up"></i> max:{city.temp_max}&deg;C</p>
      
                   <p className="text-white py-2 pt-2">Humidity:{city.humidity}</p>
      
 </div> 
 {!temp ? (<p></p>) : (
 <div className="mt-3 flex items-center">
                     &nbsp;<span className="font-bold text-xl text-white">Wind Speed:{temp.speed} m/s</span>&nbsp;
                       </div>
 )}
          
    

  </>                         

                        
                    )}
                   
            </div>
            <div className="p-4 border-t border-b text-xs text-gray-700">
                  
            </div>
          </a></div><a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        </a></div>
        </div>
    )
}

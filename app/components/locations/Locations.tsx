'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { City } from 'country-state-city'
import Link from 'next/link';
import Search from './Search';

const Locations = () => {
    const cities = City.getCitiesOfCountry('IN');
    const [citiesToShow, setCitiesToShow] = useState(cities?.slice(0,20))

    const [startIndex, setStartIndex] = useState(0)
    const [visibleCitites, setVisibleCities] = useState(20);

    // useEffect(() => {
    //     setVisibleCities(startIndex + 20)
    //     setCitiesToShow(cities?.slice(startIndex, visibleCitites))
    //     console.log("useeffect")
    // }, [startIndex, visibleCitites])

    const handleViewMore = () => {
        setVisibleCities((prevVisibleCities) => prevVisibleCities + 20);
        setCitiesToShow(cities?.slice(startIndex, visibleCitites))
        
    }

    const handleCitySearch = useCallback((city: string) => {
        const index = cities?.findIndex((current) =>
          current.name.toLowerCase().includes(city.toLowerCase())
        );
      
        if (index !== -1) { // Check if the city was found
        
          if(index){
            setStartIndex(index)
            setVisibleCities(index + 20);
          }else{
            setStartIndex(0)
            setVisibleCities(20)
          }
         
        } else {
          setStartIndex(0);
        }

       

        
        setCitiesToShow(cities?.slice(startIndex, visibleCitites))
        console.log(startIndex)
        console.log(visibleCitites)
        console.log(citiesToShow)
      },[cities, citiesToShow, visibleCitites, setCitiesToShow, setVisibleCities, setStartIndex, startIndex])
      



    return (
        <div className=''>
            
            <Search handleCitySearch = {handleCitySearch}/>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center justify-center'>
                {
                    citiesToShow?.map((city, index) => {

                        return (
                            <Link key={index} className='text-center' href={`/city/${city.name}`}>
                                {city.name}, {city.stateCode}
                            </Link>

                        )
                    })
                }

            </div>
            <button className='bg-blue-400 text-white font-semibold text-lg text-center rounded-md px-4 py-2 mx-auto block my-4' onClick={handleViewMore} > View More</button>
        </div>
    )
}

export default Locations

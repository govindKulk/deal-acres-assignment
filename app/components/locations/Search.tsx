'use client'

import React, { useCallback, useState } from 'react'

interface SearchProps {
    handleCitySearch: (city: string) => void
}

const Search: React.FC<SearchProps>= ({handleCitySearch}) => {



    const [city, setCity] = useState('')

    const handleCityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
        handleCitySearch(city)

    },[city])
    return (
        <div className='font-semibold text-2xl text-center py-2 flex flex-col items-center'>
            Search for homes by cities
            <input className = 
            'border border-gray-700 p-4 rounded-lg text-sm my-2'
            placeholder='Search...'
            type="text" value={city} onChange={(e)=> handleCityChange(e)} />
        </div>

    )
}

export default Search

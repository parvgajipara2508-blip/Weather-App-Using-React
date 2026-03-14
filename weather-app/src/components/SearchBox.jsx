import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SearchBox = ({ updateinfo }) => {
    const [city, setCity] = useState("")

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "8a2e8657e47a173a8745c67d91867248"


    const genWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponce = await response.json()

        let result = {
            city: city,
            temp: jsonResponce.main.temp,
            tempMax: jsonResponce.main.temp_max,
            tempMin: jsonResponce.main.temp_min,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description,
        };
        console.log(result);
        return result;


    }

    const handleChange = (evt) => {
        setCity(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        console.log(city);
        setCity("")
        let newInfo = await genWeatherInfo()
        updateinfo(newInfo)

    }
    return (
        <div className='text-center'>
            <h1 className='mb-5 mt-5 font-bold'>Search For the Weather</h1>
            <form onSubmit={handleSubmit} >

                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}

                />
                <br /><br />
                <Button

                    variant="contained"
                    type='submit'>

                    Search
                </Button>


            </form>


        </div>
    )
}

export default SearchBox

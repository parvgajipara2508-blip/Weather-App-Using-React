import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const InfoBox = () => {

    let INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    };

    return (
        <div className='flex justify-center flex-col items-center text-center'>
            <h1>Wether Info - {info.weather}</h1>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                        <p>Temreture = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The weather can be describe as <i>{info.weather}</i> feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>

            </Card>

        </div>
    )
}

export default InfoBox

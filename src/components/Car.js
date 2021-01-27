import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    let carId = props.match.params.id - 1;
    console.log(props.match.params.id, carId)
    console.log(cars)

    return (
        <Container maxWidth="sm" 
        style={{marginTop: "75px"}}>
            <Paper elevation={1} style={{padding: "50px"}}>
                <h1 style={{textAlign: "center"}}>
                    {`${cars[carId].Name}`}
                </h1>
                <Chip label= {"Id: " + `${cars[carId].id}`}/>
                <Chip label= {"Name: " + `${cars[carId].Name}`}/>
                <Chip label= {"Miles_per_Gallon: " + `${cars[carId].Miles_per_Gallon}`}/>
                <Chip label= {"Cylinders: " + `${cars[carId].Cylinders}`}/>
                <Chip label= {"Displacement: " + `${cars[carId].Displacement}`}/>
                <Chip label= {"Horsepower: " + `${cars[carId].Horsepower}`}/>
                <Chip label= {"Weight_in_lbs: " + `${cars[carId].Weight_in_lbs}`}/>
                <Chip label= {"Acceleration: " + `${cars[carId].Acceleration}`}/>
                <Chip label= {"Year: " + `${cars[carId].Year}`}/>
                <Chip label= {"Origin: " + `${cars[carId].Origin}`}/>
            </Paper>
        </Container>
    )
}

export default Car
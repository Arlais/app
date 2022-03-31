import {Avatar, Button, Grid, Paper, Typography} from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import React from "react";

const Payment = ()=> {
    const avatarStyle = { backgroundColor: "#ffffff", height: 70, width: 70 , margin: 10 };
    const cancelStyle = { float: "right", marginTop: 5};
    const resumeStyle = { float: "left", marginTop: 5};
    const paymentAvatarStyle = { backgroundColor: "#26580f", height: 35, width: 35};
    const paperStyle = {
        padding: 20,
        height: "80vh",
        width: 280,
        margin: "20px auto",
    };
    const tabla=[];
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle} src="/WillSmith.jpg"/>
                    <h2>Will Smith</h2>
                </Grid>
                <Button variant="outlined" style={cancelStyle}>Cancel</Button>
                <br/>
                <br/>
                <br/>
                <Grid align="center">
                    <Avatar style={paymentAvatarStyle} >
                        <PaidIcon/>
                    </Avatar>
                </Grid>
                <Grid align="center">
                    <h1>Resumen de pago</h1>
                    <Typography>Este es el valor a pagar por el servicio prestado</Typography>
                    <Typography style={resumeStyle}>Precio</Typography>
                    <Typography style={cancelStyle}>150.000</Typography>
                    <br/>
                    <br/>
                    <Typography style={resumeStyle}>Tarifa Armando</Typography>
                    <Typography style={cancelStyle}>10.000</Typography>
                    <br/>
                    <br/>
                    <Typography style={resumeStyle}>Fecha</Typography>  
                    <Typography style={cancelStyle}>20 febrero 2022</Typography>
                    <br/>
                    <br/>
                    <Button variant="contained" align >Pagar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Payment;
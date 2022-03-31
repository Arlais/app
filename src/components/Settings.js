import {Avatar, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';

const Settings = ()=> {
    const titlesStyle = { float: "left", marginTop: 5, fontWeight: 'bold'};
    const valuesStyle = { float: "left", marginTop: 5};
    const iconsStyle = { float: "right", marginTop: 5};
    const paperStyle = {
        padding: 20,
        height: "80vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#ffffff", height: 70, width: 70 , margin: 10 };
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle} src="/WillSmith.jpg"/>
                    <Grid backgroundColor="#E0E0E0">
                        <Typography variant={"h6"} style={titlesStyle}> First Name</Typography>
                        <EditIcon style={iconsStyle}/>
                        <br/>
                        <br/>
                        <Typography style={valuesStyle}> Will</Typography>
                        <br/>
                    <br/>
                    </Grid>
                    <Grid backgroundColor="#E8E8E8">
                        <Typography variant={"h6"} style={titlesStyle}>Last Name</Typography>
                        <EditIcon style={iconsStyle}/>
                        <br/>
                        <br/>
                        <Typography style={valuesStyle}>Smith</Typography>
                        <br/>
                        <br/>
                    </Grid>
                    <Grid backgroundColor="#E0E0E0">
                        <Typography variant={"h6"} style={titlesStyle}>Phone Number</Typography>
                        <EditIcon style={iconsStyle}/>
                        <br/>
                        <br/>
                        <Typography style={valuesStyle}>902 171 90 81</Typography>
                        <br/>
                        <br/>
                    </Grid>
                    <Grid backgroundColor="#E8E8E8">
                        <Typography variant={"h6"} style={titlesStyle}>Email</Typography>
                        <EditIcon style={iconsStyle}/>
                        <br/>
                        <br/>
                        <Typography style={valuesStyle}>william@myspace.com</Typography>
                        <br/>
                        <br/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Settings;
import React from "react";
import {Email, PhoneAndroid} from "@mui/icons-material";
import {Box, Container, Grid, Typography} from "@mui/material";

const Footer = () => {
    return ( <> <footer className="footer bg-primary_green py-4">
        <Container maxWidth="lg" className="container-xxl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} className="col-md-4">
                    <Typography variant="h3" className="mb-3">About us</Typography>
                    <a href="#">
                        LOGO1
                    </a>
                    <Typography>Dummy content dummy content dummy content</Typography>
                    <Box>
                        <a href="">
                            <PhoneAndroid/>
                            +91 1234567890</a>
                        <a href="">
                            <Email/>
                            quiksix@gmail.com</a>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} lg={4} className="col-md-4">
                    <Typography variant="h3" className="mb-3">Links</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4} className="col-md-4">
                    <Typography variant="h3" className="mb-3">Get in Touch</Typography>
                </Grid>
            </Grid>
            <Typography>Copyright © 2022 quiksix.com</Typography>
        </Container>
    </footer> </>
    )
}

export default Footer;
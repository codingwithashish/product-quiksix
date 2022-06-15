import { Container } from "@mui/material";
import React from "react";
import logo from './images/Brand.png';

const Footer = () => {
    return (<> 
        <footer className="footer bg-blue pt-6">
            <Container maxWidth="lg" className="container-xxl">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="mb-3">About us</h3>
                        <h4>Logo</h4>
                        <p>dummy content dummy content dummy content</p>
                    </div>
                </div>
            </Container>
        </footer>
    </>
    )
}

export default Footer;
import React from "react";
import logo from './images/Brand.png';

const Footer = () => {
    return (<> 
        <footer className="footer bg-blue pt-6">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="mb-3">About us</h3>
                        <h4>Logo</h4>
                        <p>dummy content dummy content dummy content</p>
                    </div>
                    <div className="col-md-2">
                        <h3 className="mb-3">Pages</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 className="mb-3">Category</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 className="mb-3">Contact us</h3>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;
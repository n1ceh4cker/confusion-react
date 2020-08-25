import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <div className="footer"> 
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i class="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div class="col-12 align-self-center col-sm-4">
                        <div class="text-center">
                            <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                            <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">             
                        <div class="col-auto">
                            <p>© Copyright 2018 Ristorante Con Fusion</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

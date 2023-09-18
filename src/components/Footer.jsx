import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" width="50" height="50" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="50" height="50" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" width="50" height="50" alt="" />
                    <img src="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg" width="50" height="50" alt="" />
                </div>
                <p>&copy; {new Date().getFullYear()} Hannes BIO</p>
            </div>
        </footer>
    );
}

export default Footer;

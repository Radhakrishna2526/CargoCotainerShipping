import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className=" text-center">
                <p>&copy; {new Date().getFullYear()} U.S WEST CARGO Logistics. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
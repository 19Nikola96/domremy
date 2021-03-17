import React from 'react'
import Information from './Information'

const Footer = () => {

    return (
        <footer>
            <div className="container p-4">
                <h3 id="contact">Contact</h3>
                <div className="row justify-content-center mt-4">
                    <Information />
                </div>
            </div>
        </footer>
    )
}

export default Footer
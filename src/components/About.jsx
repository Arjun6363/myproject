import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 lh-lg">
                       <span className='text-success  fw-bold  "' > 𝓗</span>ello we are 𝐓𝐞𝐚𝐦 𝟓 GPT Bijapur.<br/>
                            1.𝑻𝒂𝒉𝒊𝒓 𝑯𝒖𝒔𝒔𝒂𝒊𝒏 😎<br/>
                            2.𝓢𝓱𝓻𝓲𝓼𝓱𝓪𝓲𝓵.𝓚. 🎗️<br/>
                            3.𝓢𝓱𝓻𝓪𝓷𝓰𝓪𝓾𝓭𝓪 👌<br/>
                            4.𝓚𝓪𝓻𝓽𝓱𝓲𝓴 😁<br/>
                            5.𝓐𝓻𝓳𝓾𝓷 👍<br/>
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'

function Mains() {
  return (
    <section className="mains-section overflow-hidden">
        <div className="intro-text">
            <svg viewBox="0 0 1320 300" class="overflow-hidden"><text x="50%" y="50%" text-anchor="middle" class="animate-stroke">HI</text></svg>
        </div>
        <div className="container">
            <div className="column-group">
                <div>
                    <h4 className="fw-bold mb-2">I am Ashish</h4>
                    <h1>Next-Level Web Developer.</h1>
                    <p className="mx-w400">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                </div>
                <div className="profile">
                    <div className="image-container">
                        <img src="https://dashishsoni.in/assets/images/profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mains
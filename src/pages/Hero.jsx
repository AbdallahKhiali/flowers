import React from 'react'
import "../styles/Hero.css"
const Hero = () => {
    return (
        <>
            <div className="hero" >
                <video className='hero-bg' autoPlay loop muted>
                    <source src={require('../assets/Blooming-Flowers-Timelapse.mp4')} type='video/mp4' />
                </video>

                <div className="hero-container" >
                    <h1 className="hero-title" >
                        FLOWERS
                    </h1>
                    <p className="hero-description" >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt voluptatibus commodi sint obcaecati unde vel repudiandae magnam
                        reprehenderit alias delectus facilis officiis voluptatum cumque, fuga sequi autem labore a consectetur.
                    </p>
                    <div>
                        <div className="hero-button">Explore</div>
                    </div>
                </div>


            </div>
            <section className='expo' >
                <div className="expo-card-container" >
                    <img className="active-card " alt="flower" src={'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                    <div className="expo-card-left" >
                        <img className="expo-card  " alt="flower" src={'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} />
                        <img className="expo-card  " alt="flower" src={'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                    </div>
                    <div className="expo-card-right" >
                        <img className="expo-card  " alt="flower" src={'https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                        <img className="expo-card  " alt="flower" src={'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
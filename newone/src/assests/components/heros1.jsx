const Hero1 =() =>{
    return(
        <>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="columns is-third-fourth mx-auto">
                        <div className="column is-justify-content-center is-flex">
                            <img src="https://images.unsplash.com/photo-1602704783428-4055373814dc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVjayUyMGluJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D" alt="ducks image"  style={{objectFit:"cover", borderRadius:"5px"}} className="image is-1by1"/>
                        </div>
                        <div className="column" style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div className="title has-text-color-dark has-text-italic">Ducks of the Earths</div>
                            <div className="subtitle">lets make their life more easier</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero1



const Aboutus = () => {
    return (
        <>
           <section className="hero is-small my-2 is-bold">
                <div className="hero-body">
                    <div className="column">
                        <div className="is-title ml-5">
                            <p className="is-size-5 font-monospace">Our CEO</p>
                            <p className="is-size-6 is-semi-bold">Lokheel Martin F-34</p>
                        </div>
                        <div className="column is-flex-fullhd is-flex-desktop is-justified-center is-align-items-start">
                            <div className="is-bold mb-2 column is-flex-mobile is-flex-tablet">
                                <figure>
                                    {/* <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-226741,resizemode-75,msid-64333030/magazines/panache/indra-nooyi-highest-paid-female-ceo-fewer-women-bosses-worldwide-but-their-pay-higher-than-men.jpg" alt="ceo image" className=" is-rounded" /> */}
                                </figure>
                            </div>
                            <div className="column is-fullwidth-mobile ">
                                <p className="column is-size-6 is-family-sans-serif ">
                                    At Duck Company, our mission is clear: to safeguard ducks and preserve their habitats for generations to come. These beautiful and vital creatures are facing increasing threats from habitat destruction, pollution, and climate change. <span className="is-hidden-tablet-only is-hidden-touch-only is-hidden-mobile-only">It is our responsibility to ensure that ducks continue to thrive in their natural environments.
                                    Thanks to your generosity,</span> 
                                </p>
                                <div className="buttons ml-4">
                                    <button className="button is-small">
                                        <i>
                                                <i className="bi bi-linkedin"></i>
                                        </i>
                                    </button>
                                    <button className="button is-small">
                                        <i>
                                                <i className="bi bi-envelope-at"></i>
                                        </i>
                                    </button>
                                    <button className="button is-small">
                                        <i>
                                                <i className="bi bi-facebook"></i>
                                        </i>
                                    </button>
                                    <button className="button is-small">
                                        <i>
                                                <i className="bi bi-twitter-x"></i>
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>             
       </>
    )
}

export default Aboutus
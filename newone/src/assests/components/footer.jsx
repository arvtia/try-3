const Footer = () => {
    return (
        <section className="has-background-white py-16 is-relative is-clipped cleanMatt2">
            <div className="container px-6">
                <div className="columns is-multiline is-align-items-center">
                    
                    {/* Logo Section */}
                    <div className="column is-12-mobile is-4-tablet has-text-centered">
                        <a href="/">
                            <p className="is-size-3 has-text-white">
                                Ducks  
                                <span>
                                    <i className="bi bi-feather2 has-text-white"></i>
                                </span>
                            </p>
                        </a>
                    </div>

                    {/* Navigation Links - Responsive Fix */}
                    <div className="column is-12-mobile is-4-tablet">
                        <ul className="is-flex is-justify-content-center 
                                       is-column-to-row">
                            {["About", "Leadership", "Press/News", "Careers/Team", "Contact Us"].map((item) => (
                                <li key={item} className="p-3">
                                    <a className="has-text-white has-text-weight-medium" href={`/${item.toLowerCase().replace(/\s/g, "-")}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="column is-12-mobile is-4-tablet has-text-centered">
                        <div className="is-flex is-justify-content-center">
                            {[
                                { name: "twitter-x", url: "https://twitter.com" },
                                { name: "facebook", url: "https://facebook.com" },
                                { name: "instagram", url: "https://instagram.com" },
                            ].map((social) => (
                                <a href={social.url} key={social.name} className="mx-2" aria-label={social.name}>
                                    <div
                                        className="is-flex is-align-items-center is-justify-content-center"
                                        style={{
                                            width: 32,
                                            height: 32,
                                            border: "1px solid #ffffff",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        <span>
                                            <i className={`bi bi-${social.name} has-text-white`}></i>
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
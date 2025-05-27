import { useState } from "react"; 
 
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
};
const AboutHome = () =>{
    return (
        <section className="section cleanMatt2 my-3">
            <div className="hero is-medium  ">
                <div className="hero-body">
                    <div className="columns vcentered">
                        <div className="column is-half has-text-centered glassmorphism ">
                            <p className="is-size-1">Ducks</p>
                            <p className="is-size-4">Making world of ducks more easier <span className="font-monospace has-text-color-white">!!!!</span></p>
                        </div>
                        <div className="column">
                                <img src="https://img.freepik.com/free-photo/smiling-boy-looking-duckling-front-hay_23-2147924137.jpg?semt=ais_hybrid&w=740" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const faqs = [
  { question: "Do you provide any free plan?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "How to claim your 25% discount offer?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "What’s your refund policy?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "How to get support for the product?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="has-background-light  is-relative is-clipped">
      <img
        className="is-absolute is-bottom-0"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="container px-8 py-6">
        <h2 className="is-size-4 has-text-centered py-4 has-text-weight-bold">Have any question</h2>
        <div className="mb-11">
          {faqs.map((faq, index) => (
            <div key={index} className="p-1">
              <div className="is-clickable" onClick={() => toggleFAQ(index)}>
                <div className="py-7 px-8 has-background-white box">
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                    <div className="p-2" style={{ flex: 1 }}>
                      <h3 className="has-text-weight-semibold has-text-dark is-size-4">{faq.question}</h3>
                      <div
                        style={{ maxHeight: activeIndex === index ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                        className="is-clipped"
                      >
                        <p className="mt-4 has-text-grey has-text-weight-medium">{faq.answer}</p>
                      </div>
                    </div>
                    <div className="p-2">
                      <svg
                        className={`relative top-1 ${activeIndex === index ? "is-rotate-180" : "is-rotate-0"}`}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



 export {AboutHome, Aboutus , FAQ};

  

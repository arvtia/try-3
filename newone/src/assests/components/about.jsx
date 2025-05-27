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
  { 
    question: "What is Ducks, and what do you do?", 
    answer: "Ducks is a non-profit organization based in Birmingham, UK, dedicated to the protection and well-being of ducks. We advocate for habitat preservation, rescue efforts, and responsible care of ducks in urban and natural environments."
  },
  { 
    question: "How can I help support Ducks?", 
    answer: "You can support us by volunteering, donating, or spreading awareness. We also appreciate contributions of food, supplies, and funds to help our rescue and conservation initiatives."
  },
  { 
    question: "Do you rehabilitate injured ducks?", 
    answer: "Yes! Our team works with wildlife experts to rescue, rehabilitate, and release injured or distressed ducks back into their natural habitat whenever possible."
  },
  { 
    question: "Where do the rescued ducks go?", 
    answer: "Depending on the condition of the ducks, they are either released into safe environments or placed in sanctuaries where they receive ongoing care."
  },
  { 
    question: "Can I adopt a duck?", 
    answer: "We offer symbolic duck adoptions! By adopting a duck, you help fund its care and conservation. While we don’t offer real adoptions, you’ll receive updates on a specific rescued duck you’re supporting."
  },
  { 
    question: "What kind of food should I feed ducks?", 
    answer: "Avoid bread—it’s unhealthy for ducks! Instead, feed them oats, lettuce, seeds, or specialized duck food to ensure they get proper nutrition."
  },
//   { 
//     question: "Are ducks endangered in the UK?", 
//     answer: "While ducks aren’t generally endangered, some species face habitat loss and pollution threats. Our organization focuses on protecting vulnerable populations and maintaining safe environments for them."
//   },
//   { 
//     question: "How can I report a duck in distress?", 
//     answer: "If you see an injured or trapped duck, contact us immediately, and we’ll coordinate a rescue operation with local wildlife experts."
//   },
//   { 
//     question: "Can businesses partner with Ducks?", 
//     answer: "Absolutely! We welcome collaborations with companies that align with our mission. Whether through sponsorships or eco-friendly initiatives, businesses can make a meaningful impact."
//   },
//   { 
//     question: "How do I stay updated on Ducks' activities?", 
//     answer: "Follow us on social media or subscribe to our newsletter for updates on rescues, conservation efforts, and upcoming events."
//   }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="is-relative is-clipped">
      <div className="container ">
        <div className="mb-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-1">
              <div className="is-clickable" onClick={() => toggleFAQ(index)}>
                <div className="py-4 px-8 has-background-white box">
                  <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                    <div className="p-1" style={{ flex: 1 }}>
                      <h3 className="has-text-weight-semibold has-text-dark is-size-5">{faq.question}</h3>
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


const FAQside = () => {
    return (
        <section className="section is-small">
            <div className="section-body">
                <div className="title has-text-centered has-text-weight-bold">Frequently Asked Question</div>
                <div className="columns">
                    <div className="column is-one-third ">
                        <figure className="figure">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn78XpYpl5VE-sLDrHoMKOoasgSn1rP56xQ&s" alt="child holidng a duck" style={{width:"100%"}} className=" is-1by1" />
                        </figure>
                    </div>
                    <div className="column py-4">
                        <>
                        <FAQ/>
                        </>
                    </div>
                </div>
            </div>
        </section>
    )
}


 export {AboutHome, Aboutus , FAQ, FAQside};

  

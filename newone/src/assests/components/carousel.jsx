import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import required modules
import { Pagination, Navigation } from 'swiper/modules'

// Image data for dynamic slides
const slidesData = [
  {
    img: "https://img.freepik.com/free-photo/amazing-ducks-around-lake_181624-12983.jpg?semt=ais_hybrid&w=740",
    title: "Graceful Wanderers",
    description: "Wild ducks glide across serene waters, embracing nature’s rhythm. Their effortless movement mirrors the tranquility of the world around them.",
    buttonText: "Learn More"
  },
  {
    img: "https://media.istockphoto.com/id/1280715716/photo/germany-stuttgart-magical-orange-sunset-sky-above-ripe-grain-field-nature-landscape-in-summer.jpg?s=612x612&w=0&k=20&c=TukToGq-LkmpxvEXEomC3d11prf_hDRSwA7pYsLYG50=",
    title: "The Dance of Flight",
    description: "Majestic flocks take to the skies, painting sunsets with movement. Their synchronized flight speaks of unity and instinct passed down through generations.",
    buttonText: "Explore"
  },
  {
    img: "https://as2.ftcdn.net/v2/jpg/12/13/98/67/1000_F_1213986793_s2yWHGUEsbYAfyiAv0Q06ToVtBUEiJKE.jpg",
    title: "Nature’s Companions",
    description: "From tiny ducklings to wise elders, these birds embody resilience. Their playful splashes and gentle calls create melodies that echo through peaceful waters.",
    buttonText: "Get Started"
  }
]

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="hero is-medium is-bold cleanMatt">
            <div className="hero-body">
              <div className="columns is-vcentered">
                
                {/* Image Section */}
                <div className="column is-half">
                  <figure className="image is-4by3">
                    <img src={slide.img} alt={slide.title} />
                  </figure>
                </div>

                {/* Text & Button Section */}
                <div className="column is-half box glassmorphism ">
                  <h1 className="title is-size-4 has-text-dark my-2">{slide.title}</h1>
                  <p className="subtitle has-text-dark is-size-6">{slide.description}</p>
                  <button className="button glassmorphism is-outlined has-text-dark">{slide.buttonText}</button>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
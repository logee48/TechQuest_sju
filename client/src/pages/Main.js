import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./style.css";
import Footer from './Footer';
import Header from './header'
import Test_img from './image/test.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main = ()=>{
    return(
    

        <div>
            
            <Header/>
            <div id="one_page">
                <AutoplaySlider
                    style={{height:"90vh"}}
                    bullets={false}
                    play={true}
                    cancelOnInteraction={false}
                    interval={2000}>
                <div><img src={Test_img} alt='fddsg'/></div>
                <div><img src={Test_img} alt='fddsg'></img></div>
                <div><img src={Test_img} alt='fddsg'></img></div>
                </AutoplaySlider>
            </div>
            <a href="#sec_page"><div style={{position:"absolute",zIndex:"5",top:"70vh",right:"50vw"}}>
                <div class="mouse_scroll">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                    <div>
                        <span class="m_scroll_arrows unu"></span>
                        <span class="m_scroll_arrows doi"></span>
                        <span class="m_scroll_arrows trei"></span>
                    </div>
                </div>
            </div></a>
            <div id="sec_page"><h1>Ongoing Paper</h1>
            <Swiper
        // bullets={false}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
                    
      </Swiper>
            </div>


            <div id="sec_page"><h1>Top Rated PAper</h1>
            
                    
                    <Swiper
        // bullets={false}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
        <SwiperSlide><div style={{textAlign:"center"}}>
                        <img width={'400px'} src={Test_img} alt='hi'></img>
                        <div>Title</div>
                        <div>author</div>
                        <div style={{paddingBottom:"25px"}}></div>
                    </div></SwiperSlide>
                    
      </Swiper>


                
            </div>

            {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slider 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

            <Footer/>
        </div>
    )
}

export default Main
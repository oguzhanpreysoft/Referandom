import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col } from "@nextui-org/react";
import styles from '../styles/Home.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const MockItem = ({ text, altText }) => {
    return (
      <div className={styles.maxWidthSlider}>
        <Swiper
        className={styles.posSwiperSlide}
        style={{height:'200px',  "--swiper-pagination-color": "#fff",  "--swiper-pagination-bullet-inactive-color": "#fff",
        "--swiper-pagination-bullet-horizontal-gap": "4px",
        "--swiper-button-prev": "#fff",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "20px",}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoHeight= {true}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
            >
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.posSwiper}>
            <div className={styles.beyanSlider}>
              <Text css={{position:'absolute', top:20, color:'#fff'}}>Miletvekili beyanları</Text>
              <Text size={14} css={{lineHeight:1, color:'#fff'}}>asdasdasdas dkasjdjkag shdajkshg dhjasgkdasjkgd ajshgd gasjdg agd jags</Text>
              <Grid css={{position:'absolute', bottom:0, right:10}}>
                <Text size={12} css={{color:'#fff'}}>MV İsmi - 22.10.2022</Text>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:12, color:'#fff'}}>
                    Kaynak 
                </Link>
              </Grid>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    
    );
  };

export default function CardSlider() {
  
  return (
  
    <MockItem />

  )
}

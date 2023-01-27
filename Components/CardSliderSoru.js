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
        style={{
          minHeight: '200px', "--swiper-pagination-color": "#fff", "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
          "--swiper-button-prev": "#fff",
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoHeight={true}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={styles.posSwiper}>
          <Card css={{ minHeight: 250, bg: '#20252D', borderRadius: 0 }}>
            <Card.Body css={{ justifyContent: 'flex-start' }}>
              <Text h6 size={15} color="white" css={{ mt: 0, width: 140 }}>
                {text}
              </Text>
              <Grid.Container gap={1}>
                <Grid className={styles.gridCardSlide}>
                  <Row>
                    <Col>
                      <Grid xs={12}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClor}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyle}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Soran MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid xs={12}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClorCevap}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyleCevap}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Cevaplayan MV ismi
                            </Text>
                          </Col>
                        </Row>

                      </Grid>
                    </Col>
                    <Col className={styles.RespShowHide}>
                      <Grid xs={12}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClor}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyle}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0 }}>
                              Soran MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid xs={12}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClorCevap}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyleCevap}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Cevaplayan MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>

                    </Col>
                  </Row>
                </Grid>

                <Grid xs={12} gap={2}>
                  <Row>
                    <Text size={12} css={{ textAlign: 'end', flex: 1, color: 'white' }}>Tarih Kaynak</Text>
                    <Text size={12} css={{ textAlign: 'end', flex: 1, color: 'white' }}>Tarih Kaynak</Text>
                  </Row>

                </Grid>

              </Grid.Container>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.posSwiper}>
          <Card css={{ minHeight: 250, bg: '#20252D', borderRadius: 0 }}>
            <Card.Body css={{ justifyContent: 'flex-start' }}>
              <Text h6 size={15} color="white" css={{ mt: 0, width: 140 }}>
                {text}
              </Text>
              <Grid.Container gap={1}>
                <Grid className={styles.gridCardSlide}>
                  <Row>
                    <Col>

                      <Grid xs={12} className={styles.gridxsMaxwidth}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClor}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyle}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Soran MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid xs={6} className={styles.gridxsMaxwidth}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClorCevap}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyleCevap}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Cevaplayan MV ismi
                            </Text>
                          </Col>
                        </Row>

                      </Grid>
                    </Col>
                    <Col className={styles.RespShowHide}>
                      <Grid xs={6} className={styles.gridxsMaxwidth}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClor}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyle}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0 }}>
                              Soran MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid xs={6} className={styles.gridxsMaxwidth}>
                        <Row>
                          <Avatar
                            rounded
                            className={styles.borderClorCevap}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            css={{ size: "$10", }} />
                          <Col>
                            <div className={styles.cardStyleCevap}>
                              <Text size={12} css={{ ml: 10 }}>sadasdasdas</Text>
                            </div>
                            <Text h6 size={12} color="white" css={{ mt: 0, width: 140 }}>
                              Cevaplayan MV ismi
                            </Text>
                          </Col>
                        </Row>
                      </Grid>

                    </Col>
                  </Row>
                </Grid>

                <Grid xs={12} gap={2}>
                  <Row>
                    <Text size={12} css={{ textAlign: 'end', flex: 1, color: 'white' }}>Tarih Kaynak</Text>
                    <Text size={12} css={{ textAlign: 'end', flex: 1, color: 'white' }}>Tarih Kaynak</Text>
                  </Row>

                </Grid>

              </Grid.Container>
            </Card.Body>
          </Card>
        </SwiperSlide>

      </Swiper>
    </div>

  );
};

export default function CardSlider() {

  return (

    <MockItem text='Soru Önergeleri' />

  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Textarea } from "@nextui-org/react";
import CardName from '../Components/CardName'
import CardDagilim from '../Components/CardDagilim'
import CardEmpty from '../Components/CardEmpty'
import CardSlider from '../Components/CardSlider'
import CardSliderWhite from '../Components/CardSliderWhite'
import CardAktif from '../Components/CardAktif'
import CardSoru from '../Components/CardSoru'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const list = [
    {
      title: "Parti İsmi",
      img: "/images/fruit-1.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-2.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-4.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-5.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-6.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-7.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },

    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },

    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },

    {
      title: "Parti İsmi",
      img: "/images/fruit-8.jpeg",
    },
  ];
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Layout >
      <div className={styles.detayhomePage}>
        <div className={styles.homeFlex}>
          <div className={styles.partiTrans}>
            <div className={styles.partiCompare}>
              <div className={styles.compareText}>
                <Text h4>Detaylı İncele</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </div>
              <div className={styles.compareBox}>
                <Grid.Container gap={2} justify="flex-start" css={{ marginLeft: 0 }}>
                  <Text b>Parti Seç</Text>
                </Grid.Container>

                <Grid.Container gap={2} justify="flex-start" >
                  {list.map((item, index) => (
                    <Grid xs={4} sm={1} key={index} css={{ borderRadius: 0 }}>
                      <Card isPressable css={{ borderRadius: '5px' }}>
                        <Card.Body css={{ p: 0 }} >
                          <Card.Image
                            src={"https://nextui.org" + item.img}
                            objectFit="cover"
                            width="100%"
                            height={70}
                            alt={item.title}
                          />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "center", height: 20, justifyContent: 'center', alignItems: 'center', background: '#707070', borderRadius: 0 }}>
                          <Text b size={10} css={{ minHeight: 10, justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0, color: '#fff' }}>{item.title}</Text>
                        </Card.Footer>
                      </Card>
                    </Grid>
                  ))}
                </Grid.Container>

              </div>
              <Grid.Container gap={2} justify="flex-start" css={{ marginLeft: 0 }}>
                <Text b>Kategori Seç</Text>
              </Grid.Container>
              <Grid.Container gap={2}>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000', width: '100%' }} size="sm">Kategori 1</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%' }} size="sm">Kategori 2</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%' }} size="sm">Kategori 3</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%' }} size="sm">Kategori 4</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%' }} size="sm">Kategori 5</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%' }} size="sm">Kategori 6</Button>
                </Grid>

                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyle} css={{ borderRadius: 0, background: '#DDDDDD', color: '#000',  width: '100%'  }} size="sm">Karışık</Button>
                </Grid>
                <Grid xs={6} sm={4} md={2}>
                  <Button className={styles.buttonStyleIncele} css={{ borderRadius: 0, background: '#20252D', color: '#000', color: '#fff',  width: '100%'}} size="sm">İncele</Button>
                </Grid>
              </Grid.Container>

              <Grid.Container css={{ marginTop: 20}} >
                <div className={styles.gridBox}>
                  <div className={styles.gridBoxOne}>
                    <div className={styles.boxone}>
                      <CardSliderWhite />
                      <div className={styles.backgroundbutton}>
                        <div className={styles.katilkatilmaButton}>
                          <a className={styles.buttonKatil}>Katılıyorum</a>
                          <Spacer />
                          <a className={styles.buttonKatilma}>Katılmıyorum</a>
                        </div>
                      
                      </div>
                      <div className={styles.grdicommadd}>
                        <Grid>
                          <Text color='white' css={{ marginBottom: 20 }}>Sen Ne Düşünüyorsun?</Text>
                          <Textarea
                            width='100%'
                            placeholder="Yorum yap..."
                            status="white"
                            borderRadius={0}
                          />
                        </Grid>
                        <Grid xs={12} css={{ marginTop: 20, }}>
                          <Row css={{ marginBottom: 20 }}>
                            <Avatar
                              rounded
                              status="white"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              css={{ size: "$13", marginRight: 10 }} />
                            <Grid css={{ background: '#FAFAFA', width: '100%', height: 50 }}>
                              <Row>
                                <Text css={{ paddingLeft: 10, width: '100%' }}>Yorum</Text>
                              </Row>
                              <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom:0  }}>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                </Row>
                            </Grid>
                          </Row>
                          <Row>
                            <Avatar
                              rounded
                              status="white"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              css={{ size: "$13", marginRight: 10 }} />
                            <Grid css={{ background: '#FAFAFA', width: '100%', height: 50 }}>
                              <Row>
                                <Text css={{ paddingLeft: 10, width: '100%' }}>Yorum</Text>
                              </Row>
                              <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom:0 }}>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                </Row>
                            </Grid>
                          </Row>
                        </Grid>
                        </div>


                    </div>
                  </div>
                  <div className={styles.gridBoxTwo}>
                    <div className={styles.boxtwo}>
                      <CardSlider />
                      <div className={styles.backgroundbutton}>
                        <div className={styles.katilkatilmaButton}>
                        <a className={styles.buttonKatil}>Katılıyorum</a>
                          <Spacer />
                          <a className={styles.buttonKatilma}>Katılmıyorum</a>
                        </div>
                        {/* <div className={styles.kapataButton}>
                          <Button className={styles.buttonKapat}>Kapat</Button>
                        </div> */}
                      </div>
                      <Grid css={{ padding:20}}>
                        <Grid>
                          <Text css={{ marginBottom: 20 }}>Sen Ne Düşünüyorsun?</Text>
                          <Textarea
                            width='100%'
                            placeholder="Yorum yap..."
                            status="white"
                            borderRadius={0}
                          />
                        </Grid>
                        <Grid xs={12} css={{ marginTop: 20, }}>
                          <Row css={{ marginBottom: 20 }}>
                            <Avatar
                              rounded
                              status="white"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              css={{ size: "$13", marginRight: 10 }} />
                            <Grid css={{ background: '#FAFAFA', width: '100%', height: 50 }}>
                              <Row>
                                <Text css={{ paddingLeft: 10, width: '100%' }}>Yorum</Text>
                              </Row>
                              <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom:0 }}>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                </Row>
                            </Grid>
                          </Row>
                          <Row>
                            <Avatar
                              rounded
                              status="white"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              css={{ size: "$13", marginRight: 10 }} />
                            <Grid css={{ background: '#FAFAFA', width: '100%', height: 50 }}>
                              <Row>
                                <Text css={{ paddingLeft: 10, width: '100%' }}>Yorum</Text>
                              </Row>
                              <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom:0 }}>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                  <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                </Row>
                            </Grid>
                          </Row>
                        </Grid>
                      </Grid>
                    
                    </div>
                  </div>
                </div>
              </Grid.Container>
            
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

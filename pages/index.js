import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Image } from "@nextui-org/react";
import CardName from '../Components/CardName'
import CardDagilim from '../Components/CardDagilim'
import CardEmpty from '../Components/CardEmpty'
import CardSlider from '../Components/CardSlider'
import CardAktif from '../Components/CardAktif'
import CardSoru from '../Components/CardSoru'
import CardSliderSoru from '../Components/CardSliderSoru'



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
    <Layout>
      <div className={styles.homePage}>
        <div className={styles.homeFlex}>
          <div className={styles.timeSecim}>
            <div className={styles.timeLeft}>
              <div className={styles.boxTime}>
                <div className={styles.topText}>
                  <Text className={styles.topTextRes}>Seçime Kalan Zaman</Text>
                </div>
                <div className={styles.timeBottom}>
                  <div className={styles.dayTime}>
                    <Text className={styles.dayTimeResp} h2 css={{margin:0, padding:0}}>254</Text>
                    <Text className={styles.dayTimeTextResp} h6 css={{margin:0}}>gün</Text>
                  </div>
                  <div className={styles.hourTime}>
                  <Text className={styles.dayTimeResp} h2 css={{margin:0, padding:0}}>254</Text>
                    <Text className={styles.dayTimeTextResp} h6 css={{margin:0}}>saat</Text>
                  </div>
                  <div className={styles.minuteTime}>
                  <Text className={styles.dayTimeResp} h2 css={{margin:0, padding:0}}>254</Text>
                    <Text className={styles.dayTimeTextResp} h6 css={{margin:0}}>dakika</Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.meclisImage}>
                <Link css={{ width:'100%', maxW:'100%'}} href="./meclisozet">
                <Image
                width={'100%'}
                height={135}
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
              />
                </Link>
            </div>
          </div>
          <div className={styles.partiTrans}>
            <div className={styles.partiCompare}>
              <div className={styles.compareText}>
                <Text h4>Partileri Karşılaştır</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </div>
              <div className={styles.compareBox}>
              <Grid.Container gap={2}  justify="flex-start" >
            {list.map((item, index) => (
              <Grid xs={4} sm={1} key={index} css={{borderRadius:0}}>
                <Card isPressable css={{borderRadius: '5px'}}>
                  <Card.Body css={{ p: 0}} >
                    <Card.Image
                      src={"https://nextui.org" + item.img}
                      objectFit="cover"
                      width="100%"
                      height={70}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "center", height:20, justifyContent:'center', alignItems:'center', background:'#707070', borderRadius:0 }}>
                      <Text b size={10} css={{minHeight:10, justifyContent:'center', alignItems:'center', padding:0, margin:0, color:'#fff'}}>{item.title}</Text>
                  </Card.Footer>
                </Card>
              </Grid>
              ))}
            </Grid.Container>
            <Grid.Container gap={2} justify="flex-start" css={{marginLeft:0}}>
            <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000'}} size="sm">İncele</Button>
            </Grid.Container>
              </div>
              <div className={styles.secimıncele}>
                <div className={styles.secimboxInfo}>
                <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} md={4}>
                  <Col>
                  <CardName />
                  <CardDagilim />
                  <CardEmpty />
                  <CardAktif />
                  <CardSlider />
                  <CardSliderSoru />
                  </Col>
                </Grid>
                 <Grid xs={12} sm={6} md={4} >
                  <Col>
                  <CardName />
                  <CardDagilim />
                  <CardEmpty />
                  <CardAktif />
                  <CardSlider />
                  <CardSliderSoru />
                 
                  </Col>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                <Col>
                  <CardName />
                  <CardDagilim />
                  <CardEmpty />
                  <CardAktif />
                  <CardSlider />
                  <CardSliderSoru />
                  </Col>
                </Grid>
              </Grid.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

import Head from 'next/head'
import { Inter } from '@next/font/google'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styleTinder from '../styles/Tinder.module.css'
import Layout from '../Components/Layout'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Progress, useTheme, Textarea, Image } from "@nextui-org/react";
import CardName from '../Components/CardName'
import CardDagilim from '../Components/CardDagilim'
import CardEmpty from '../Components/CardEmpty'
import CardSlider from '../Components/CardSlider'
import CardAktif from '../Components/CardAktif'
import CardSoru from '../Components/CardSoru'
import dynamic from 'next/dynamic'


const DynamicTinderCard = dynamic(() => import('react-tinder-card'), {
  loading: () => 'Loading...',
  ssr:false
})


const inter = Inter({ subsets: ['latin'] })

const users = [{
  title: "Some quick example text to build on the card title and make up the",
  age:42,
  dateTime: "20 Mayıs 2023"
},
{
  title: "Some quick example text to build on the card title and make up the",
  age:12,
  dateTime: "10 Mayıs 2023"
},
{
  title: "Some quick example text to build on the card title and make up the",
  age:22,
  dateTime: "22 Şubat 2023"
},
{
  title: "Some quick example text to build on the card title and make up the asdas dsa ",
  age:44,
  dateTime: "5 Mayıs 2023"
},
{
  title: "Some quick example text to build on the card title and make up the",
  age:11,
  dateTime: "1 Mayıs 2023"
},{
  title: "Some quick example text to build on the card title and make up the",
  age:45,
  dateTime: "23 Mayıs 2023"
}]

const sonucusers = [{
  mvname: "Milletvekili ismi - Parti",
  kaynak:'kaynak',
}]

export default function secimpage() {
  return (
    <Layout >
        <div className={styles.homePageRastgele}>
        <div className={styles.homeFlex}>
        <Text b weight={'bold'} size={20}>Rastgele!</Text>
            <div className={styles.answerText}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
        <div className={styles.kategoriSelect}>
        <Text >Kategori Seç</Text>
        <Grid.Container gap={0}>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 1</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 2</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 3</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 4</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 5</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Kategori 6</Button>
      </Grid>
    
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:'100%'}} size="sm">Karışık</Button>
      </Grid>
      <Grid css={{marginTop:10}} xs={6} sm={4} md={2}>
      <Button css={{borderRadius:0, background:'#20252D', color:'#000', color:'#fff', marginRight:10, width:'100%'}} size="sm">İncele</Button>
      </Grid>
    </Grid.Container>
    <div className={styleTinder.card}>
  <div className={styleTinder.cardBoxss}>
  {users.map((data) => (
        <DynamicTinderCard
        className={styleTinder.tinderCard}
        key={data.title}
        preventSwipe = {
          ["up", "down"]
        }
        >
       <div className={styleTinder.carddetails} style={{backgroundColor:'#fff'}}>
        <div className={styleTinder.userdetails}>
        <Avatar 
            rounded
            status="white"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
            css={{ size: "$23", marginRight:10 }}/>
          <Text className={styleTinder.textTitle}>{data.title}</Text>
          <Text className={styleTinder.textDateTime}>{data.dateTime}</Text>
          <Row justify="center" css={{marginTop:20}}>
            <Button css={{borderRadius:0, background:'#66DE8D', color:'#fff', marginRight:10, width:250}} size="sm">Katılıyorum</Button>
            <Button css={{borderRadius:0, background:'#DDDDDD', color:'#fff', marginRight:10, width:250}} size="sm">Geç</Button>
            <Button css={{borderRadius:0, background:'#FF4E4F', color:'#fff', marginRight:10, width:250}} size="sm">Katılmıyorum</Button>
            </Row>
        </div>
       </div>
        </DynamicTinderCard>
    ))}
  </div>
  </div>
   
{/* sonuc arka yüz */}

{/* <div className={styleTinder.card}>
  <div className={styleTinder.cardBoxss}>
  {sonucusers.map((data) => (
        <DynamicTinderCard
        className={styleTinder.tinderCard}
        key={data.title}
        preventSwipe = {
          ["up", "down"]
        }
        >
       <div className={styleTinder.carddetails} style={{backgroundColor:'#fff'}}>
        <div className={styleTinder.userdetails}>
        <Avatar 
            rounded
            status="white"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
            css={{ size: "$23", marginRight:10 }}/>
          <Text className={styleTinder.textTitle}>{data.mvname}</Text>
          <Text className={styleTinder.textDateTime}>{data.kaynak}</Text>
          <div className={styleTinder.progressBar}>
            <div className={styleTinder.progressBarGreen}>
              <Text b css={{color:'#fff'}}>%60</Text>
            </div>
            <div className={styleTinder.progressBarGray}>
            <Text b css={{color:'#fff'}}>%20</Text>
            </div>
            <div className={styleTinder.progressBarRed}>
            <Text b css={{color:'#fff'}}>%20</Text>
            </div>
          </div>
          <Row justify="center" css={{marginTop:20}}>
            <Button css={{borderRadius:0, background:'#DDDDDD', color:'#fff', marginRight:10, width:250}} size="sm">Geri Dön</Button>
            <Button css={{borderRadius:0, background:'#000', color:'#fff', marginRight:10, width:250}} size="sm">Sonraki</Button>
            </Row>
            <div className={styles.commentUseTinder}>
                        <Grid>
                            <Textarea
                                width='100%'
                                label="Sen Ne Düşünüyorsun?"
                                placeholder="Yorum yap..."
                                status="white"
                                borderRadius={0}
                            />
                        </Grid>
                        <Grid xs={12} css={{ marginTop: 20 }}>
                            <Row>
                                <Avatar
                                    rounded
                                    status="white"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                    css={{ size: "$13", marginRight: 10 }} />
                                <Grid css={{ background: '#FAFAFA', width: '100%', minHeight: 50 }}>
                                    <Row>
                                        <Text css={{ paddingLeft: 10, width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
                                    </Row>
                                    <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom: -20 }}>
                                        <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                        <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                    </Row>
                                </Grid>
                            </Row>
                        </Grid>
                        <Grid xs={12} css={{ marginTop: 20 }}>
                            <Row>
                                <Avatar
                                    rounded
                                    status="white"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                    css={{ size: "$13", marginRight: 10 }} />
                                <Grid css={{ background: '#FAFAFA', width: '100%', minHeight: 50 }}>
                                    <Row>
                                        <Text css={{ paddingLeft: 10, width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
                                    </Row>
                                    <Row css={{ justifyContent: 'flex-end', alignContent: 'flex-end', bottom: -20 }}>
                                        <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#FF4E4F' }}></Button>
                                        <Button size={4} css={{ padding: 15, fontSize: 10, width: 10, height: 10, borderRadius: 50, margin: 5, background: '#63D889' }}></Button>
                                    </Row>
                                </Grid>
                            </Row>
                        </Grid>
                    </div>
        
        </div>
       </div>
        </DynamicTinderCard>
    ))}
  </div>
  </div> */}

{/* sonuc arka yüz */}


        </div>
        </div>
        </div>
    </Layout>
  )
}


{/* <Avatar 
            rounded
            status="white"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
            css={{ size: "$53", marginRight:10 }}/>
            <Spacer/>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
            <Text css={{color:'#e3e3e3'}}>
              25 Mayıs 2022
            </Text>
            <Spacer/>
            <Row justify="center">
            <Button css={{borderRadius:0, background:'#66DE8D', color:'#fff', marginRight:10, width:250}} size="sm">Katılıyorum</Button>
            <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:250}} size="sm">Geç</Button>
            <Button css={{borderRadius:0, background:'#FF4E4F', color:'#fff', marginRight:10, width:250}} size="sm">Katılmıyorum</Button>
            </Row> */}




          //   <Grid.Container gap={0}>
          //   <Grid sm={12} md={12}>
          //     <Card css={{ mw: "100%", height:500 }}>
          //       <Card.Body css={{ py: "$100" , justifyContent:'center', alignItems:'center'}}>
          //       <Avatar 
          //         rounded
          //         status="white"
          //         src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
          //         css={{ size: "$53", marginRight:10 }}/>
          //         <Spacer/>
          //         <Text>
          //           Some quick example text to build on the card title and make up the
          //           bulk of the card's content.
          //         </Text>
          //         <Text css={{color:'#e3e3e3'}}>
          //           25 Mayıs 2022
          //         </Text>
          //         <Spacer/>
          //         <Row justify="center">
          //         <Button css={{borderRadius:0, background:'#66DE8D', color:'#fff', marginRight:10, width:250}} size="sm">Katılıyorum</Button>
          //         <Button css={{borderRadius:0, background:'#DDDDDD', color:'#000', marginRight:10, width:250}} size="sm">Geç</Button>
          //         <Button css={{borderRadius:0, background:'#FF4E4F', color:'#fff', marginRight:10, width:250}} size="sm">Katılmıyorum</Button>
          //         </Row>
          //       </Card.Body>
          //       <Card.Divider />
               
          //     </Card>
          //   </Grid>
          // </Grid.Container>
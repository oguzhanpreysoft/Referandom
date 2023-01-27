import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Progress, useTheme, Textarea, createTheme, Container } from "@nextui-org/react";
import CardName from '../Components/CardName'
import CardDagilim from '../Components/CardDagilim'
import CardEmpty from '../Components/CardEmpty'
import CardSlider from '../Components/CardSlider'
import CardAktif from '../Components/CardAktif'
import CardSoru from '../Components/CardSoru'
import React, { useState } from "react";



const inter = Inter({ subsets: ['latin'] })

export default function secimpage() {
    const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
    const { theme } = useTheme();
    return (
        
        <Layout >
            <div className={styles.homePageSecim}>
                <div className={styles.homeFlex}>
                    <Text b weight={'bold'} size={20}>Seçim Güvenliği Testi</Text>
                    <div className={styles.timeSecim}>
                        <div className={styles.boxTopColor}>
                            <Text>Test Ana Görsel</Text>
                        </div>
                    </div>
                    <div className={styles.answerText}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  BURASI SORU METNİ</Text>
                    </div>
                    <div className={styles.answerButton}>
                        <Grid  ghost css={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
                            <Row className={styles.buttonSResp}>
                                <Button onClick={handleClick}
                                    style={{ backgroundColor: active ? "#66DE8D" : "#20252D", color: active ? "#000" : "#fff" }} css={{ width: '100%', marginRight: 10, bg: '#20252D', justifyContent: 'flex-start', borderRadius: 0, border: 'none', color: '#fff' }} auto ghost>Şık 1</Button>
                                <Button className={styles.buttonSelectResp} css={{ width: '100%', marginLeft: 10, bg: '#20252D', justifyContent: 'flex-start', borderRadius: 0, border: 'none', color: '#fff' }} auto ghost>Şık 2</Button>
                            </Row>
                        </Grid>
                        <Grid ghost css={{ width: '100%' }}>
                            <Row className={styles.buttonSResp}>
                                <Button css={{ width: '100%', marginRight: 10, bg: '#20252D', justifyContent: 'flex-start', borderRadius: 0, border: 'none', color: '#fff' }} auto ghost>Şık 3</Button>
                                <Button className={styles.buttonSelectResp} css={{ width: '100%', marginLeft: 10, bg: '#20252D', justifyContent: 'flex-start', borderRadius: 0, border: 'none', color: '#fff' }} auto ghost>Şık 4</Button>
                            </Row>
                        </Grid>
                    </div>
                    <div className={styles.progressStyle}>
                        <Grid>
                            <Progress value={20} color="success" status="success" flat css={{ borderRadius: 2 }} />
                        </Grid>
                        <Text>Yanıt Sayısı</Text>
                    </div>
                    <div className={styles.commentUse}>
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
        </Layout>
    )
}


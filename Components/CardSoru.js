import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col } from "@nextui-org/react";
import styles from '../styles/Home.module.css'
import oopImage from '../public/logo/oops.png'
import Image from "next/image";

const MockItem = ({ text, textAlt }) => {
    return (
      // <div className={styles.cardSoru}>
      //   <Text h6 size={15} color="white" css={{ mt: 20, }}>{text}</Text>
      //   <div className={styles.cardSoruFlex}>
      //     <div className={styles.cardSoruFlexLeft}>
      //       <div className={styles.cardsSoru}>
      //         <div className={styles.avatarImage}></div>
      //         <div className={styles.avatarText}></div>
      //       </div>
      //       <div className={styles.cardsSoru}></div>
      //     </div>
      //     <div className={styles.cardSoruFlexright}></div>
      //   </div>
      // </div>


      <Card css={{ minHeight:"200px", bg:'#20252D', borderRadius:0 }}>
        <Card.Body css={{justifyContent:'flex-start'}}>
         <Text h6 size={15} color="white" css={{ mt: 0, width:140 }}>
             {text}
           </Text>
           <Grid.Container gap={1}>

            <Grid>
            <Row>
      <Col>

             <Grid xs={6}>
                   <Row>
             <Avatar 
             rounded
             className={styles.borderClor}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
              css={{ size: "$10", }}/>
              <Col>
              <div className={styles.cardStyle}>
                <Text size={12} css={{ml:10}}>sadasdasdas</Text>
              </div>
              <Text h6 size={12} color="white" css={{ mt: 0, width:140 }}>
              Soran MV ismi
              </Text>
              </Col>
          </Row>
          </Grid>
          <Grid xs={6}>
          <Row>
              <Avatar 
             rounded
             className={styles.borderClorCevap}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
              css={{ size: "$10", }}/>
              <Col>
              <div className={styles.cardStyleCevap}>
                <Text size={12} css={{ml:10}}>sadasdasdas</Text>
              </div>
              <Text h6 size={12} color="white" css={{ mt: 0, width:140}}>
              Cevaplayan MV ismi
              </Text>
              </Col>
          </Row>
        
          </Grid>
          </Col>
        <Col className={styles.RespShowHide}>
        <Grid xs={6}>
        <Row>
          <Avatar 
             rounded
             className={styles.borderClor}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
              css={{ size: "$10", }}/>
                   <Col>
                   <div className={styles.cardStyle}>
                <Text size={12} css={{ml:10}}>sadasdasdas</Text>
              </div>
               <Text h6 size={12} color="white" css={{ mt: 0 }}>
               Soran MV ismi
              </Text>
              </Col>
          </Row>
          </Grid>
          <Grid xs={6}>
          <Row>
          <Avatar 
             rounded
             className={styles.borderClorCevap}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
              css={{ size: "$10", }}/>
                   <Col>
                   <div className={styles.cardStyleCevap}>
                <Text size={12} css={{ml:10}}>sadasdasdas</Text>
              </div>
               <Text h6 size={12} color="white" css={{ mt: 0, width:140 }}>
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
              <Text size={12} css={{textAlign:'end', flex:1, color:'white'}}>Tarih Kaynak</Text>
              <Text size={12} css={{textAlign:'end', flex:1, color:'white'}}>Tarih Kaynak</Text>
              </Row>
            
          </Grid>
          
      </Grid.Container>
          </Card.Body>
        </Card>
    );
  };

export default function CardSoru() {
  return (
  
    <MockItem text='Soru Önergeleri' />

  )
}

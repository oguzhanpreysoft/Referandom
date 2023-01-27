import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col } from "@nextui-org/react";
import styles from '../styles/Home.module.css'

const MockItem = ({ text, textAlt }) => {
    return (
      <Card css={{ minHeight:"200px", bg:'#20252D', borderRadius:0 }}>
        <Card.Body css={{justifyContent:'flex-start'}}>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
          <Grid.Container gap={.7} css={{justifyContent:'center'}}>
            <Grid>
                <Avatar text="1." size="sm" color={'empty'} textColor={'white'}/>
            </Grid>
            <Grid>
                <Col >
                <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                size={'xl'}
                />
                </Col>
                <Text h6 size={12} color="white" css={{ mt: 0, textAlign:'center' }}>
                    {textAlt}
                </Text>
            </Grid>
            <Grid>
                <Avatar text="2." size="sm" color={'empty'} textColor={'white'}/>
            </Grid>
            <Grid>
                <Col>
                <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                size={'xl'}
                />
                </Col>
                <Text h6 size={12} color="white" css={{ mt: 0, textAlign:'center' }}>
                    {textAlt}
                </Text>
            </Grid>
            <Grid>
                <Avatar text="3." size="sm" color={'empty'} textColor={'white'}/>
            </Grid>
            <Grid>
                <Col>
                <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                // css={{ size: "$20" }}
                size={'xl'}
                />
                </Col>
                <Text h6 size={12} color="white" css={{ mt: 0, textAlign:'center' }}>
                    {textAlt}
                </Text>
            </Grid>
        </Grid.Container>
        </Card.Body>
      </Card>
    );
  };

export default function CardAktif() {
  return (
  
    <MockItem text='En Aktif Konular' textAlt='Teknoloji'/>

  )
}

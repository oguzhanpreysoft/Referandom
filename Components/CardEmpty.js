import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col } from "@nextui-org/react";
const MockItem = ({ text, altText }) => {
    return (
      <Card css={{ minHeight:"200px", bg:'#707070', borderRadius:0 }}>
        <Card.Body css={{justifyContent:'flex-end'}}>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
          <Text h6 size={12} color="black" css={{ mt: 0 }}>
            {altText}
          </Text>
        </Card.Body>
      </Card>
    );
  };

export default function CardEmpty() {
  return (
  
    <MockItem />

  )
}

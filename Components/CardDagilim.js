import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Badge, Progress} from "@nextui-org/react";
const MockItem = ({ text, degilimText, cinsiyetText, erkek, kadin }) => {
    return (
      <Card css={{ minHeight:"200px", bg:'#F8F8F8', borderRadius:0 }}>
        <Card.Body css={{}}>
          <Text h6 size={15} color="black" css={{ mt: 0 }}>
            {text}
          </Text>
          <Row  css={{padding:0}}>
        <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
       <Grid.Container gap={0.1}>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge  variant="dot" size={'xs'} css={{background:'gray'}}/>
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
      <Grid xs={12} alignItems="center">
        <Badge color="error" size={'xs'} variant="dot" />
      </Grid>
    </Grid.Container>
        </Row>
        <Text h6 size={12} color="black" css={{ mt: 10 }}>
            {degilimText}
          </Text>
          <Text h6 size={15} color="black" css={{ mt: 10, mb:15 }}>
            {cinsiyetText}
          </Text>
        <Progress value={80} color="primary" status="#E57BE1"  css={{borderRadius:2, background:'#E67BE1'}}/>
        <Row css={{paddingTop:15}}>
        <Text h6 size={12} color="black" css={{ mt: 0, flex:1 }}>
            {erkek}
          </Text>
          <Text h6 size={12} color="black" css={{ mt: 0 }}>
            {kadin}
          </Text>
        </Row>
        <Grid.Container xs={12} sm={6} gap={2}>
     
    </Grid.Container>
        </Card.Body>
      
      </Card>
    );
  };
export default function CardDagilim() {
  return (
    <MockItem text='Güncel meclis dağılımı' degilimText='134 Miletvekili' cinsiyetText='Cinsiyet dağılımı' erkek='118 erkek' kadin='17 kadın'/>
  )
}

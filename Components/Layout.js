import { Container } from '@nextui-org/react'
import React from 'react'
import Footer from './Footer'
import Header from './Header'


function Layout({children}) {
  return (
    <div style={{background:'#fff'}}>
        <Header />
        <div>
          <Container lg css={{padding:0}}>
          {children}
          </Container>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import logo from '../public/logo/logo.png'
import Image from "next/image";
import styleHeader from "../styles/Home.module.css"

function Header() {
  const collapseItems = [
    "Ana Sayfa",
    "Detaylı İncele",
    "Seçim Güvenliği Testi",
    "Rastgele!",
  ];
  return (
<Navbar isBordered variant="sticky" isBlur disableShadow>
        <Navbar.Brand
          css={{
            "@xs": {
              w: "100%",
              jc: "flex-start",
            },
          }}
        >
        <Image
          src={logo}
          alt="Default Image"
          width={40}
          height={40}
        />
        </Navbar.Brand>
       
        <Navbar.Content
          css={{
            "@xs": {
              w: "100%",
              jc: "flex-end",
            },
          }}
        >
           <Navbar.Content hideIn="sm">
          <Navbar.Link href="./detayincele">Detaylı İncele</Navbar.Link>
          <Navbar.Link href="./secimpage">Seçim Güvenliği Testi</Navbar.Link>
          <Navbar.Link href="./rastgele">Rastgele!</Navbar.Link>
        </Navbar.Content >
        <Navbar.Toggle showIn="sm" />
        </Navbar.Content>
        <Navbar.Collapse onAnimationEnd isBlur disableShadow css={{width:'70%'}}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
                width:'100%',
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  textAlign:'end',
                  fontSize:12
                }}
                href="./detayincele"
              >
                {item}
              </Link>
              
            </Navbar.CollapseItem>
          ))}
          <div className={styleHeader.lineHeader}></div>
          <div className={styleHeader.navbarHref}>
              <li style={{marginBottom:5}}><a className={styleHeader.navbarhrefhakk} href='/'>Hakkımızda</a></li>
              <li><a className={styleHeader.navbarhrefhakk} href='/'>Gizlilik ve Kullanıcı Sözleşmesi</a></li>
          </div>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header
import React from "react";
import styles from '../styles/Home.module.css'
import { Navbar, Link, Text, Row, Spacer, Grid} from "@nextui-org/react";
import oopImage from '../public/logo/oops.png'
import Image from "next/image";

// Inside the "pages/404.js" file
export default function Custom404() {
	return (
		<div className={styles.oops}>
            <div className={styles.oopsText}>
                <Text size={40} css={{color:'#fff'}}>Aradığınız sayfa bulunamıyor.</Text>
                <Row>
                <Link  href="#"  css={{textDecoration:'underline', fontSize:25, color:'#fff'}}>
                    Anasayfaya 
                </Link>
                <Text size={25} css={{marginLeft:10, color:'White'}}>dön.</Text>
                </Row>
            </div>
            <div className={styles.oopsImage}>
            <Grid>
        <Image
          src={oopImage}
          alt="Default Image"
          width={600}
          height={600}
        />
      </Grid>
            </div>
		</div>
	);
}

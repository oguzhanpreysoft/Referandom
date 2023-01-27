import React from 'react'
import styles from '../styles/Home.module.css'
import { Text } from "@nextui-org/react";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <Text>Hakkımızda</Text>
        <Text style={{paddingLeft:10, paddingRight:10}}>|</Text>
        <Text>Gizlililk ve Kullanıcı</Text>
      </div>
    </div>
  )
}

export default Footer
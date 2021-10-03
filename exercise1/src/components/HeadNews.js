import React from 'react';
import styles from './HeadNews.module.css';

export default function HeadNews() {
    return (
      <div className= {styles.background}>
        <span className= { styles.header }>Korona</span>
        <img src = "korona.jpg" alt ="" width="700" height="430"  />
        <span className={ styles.main }>Koronavirus |</span>
        <span className={ styles.topic }>STM:n Pohjola: Koronavirus kuormittaa teho-osastoja jopa kevääseen saakka, jos rokotus­kattavuus jää alhaiseksi</span>
        <div>Kotimaa 20:01</div>
      </div>
    )
  }
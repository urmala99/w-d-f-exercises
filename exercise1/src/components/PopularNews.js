import React from 'react';
import styles from './PopularNews.module.css';


export default function PopularNews() {
    return (
      <div>
          <div className={styles.notification}><span className={styles.topic}>TALOUS: </span>Kolme autovalmistajaa sulkee Saksassa tehtaitaan sirupulan vuoksi</div>
          <div className={styles.notification}><span className={styles.topic}>PÄIVÄN TIMANTTI: </span>Treenaaminen ja ero eivät ratkaisseet Roope Salmisen alkoholiongelmaa</div>
          <div className={styles.add}><span className={styles.topic}>MAINOS: </span>Lunasta kaksi viikkoa maksutonta lukuaikaa!</div>
      </div>
      
    )
  }
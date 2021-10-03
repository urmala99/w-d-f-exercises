import React from 'react';
import styles from './SideNews.module.css';

export default function SideNews() {
    return (
      <div className={ styles.backGround }>
        <span className={styles.header}>Luetuimmat</span>
        <div className={ styles.container }>
          <div className={ styles.number }>1</div>
          <div className={ styles.title }>Pääkirjoitus |
          <span className={ styles.topic}>Poliitikot katselevat varpaitaan, kun hyvinvointivaltio luhistuu</span>
          </div>
        </div>
        <div className={ styles.container }>
          <div className={ styles.number }>2</div>
          <div className={ styles.title }>Perhesiteitä |
          <span className={ styles.topic}>Roope Salminen treenasi viisi kertaa viikossa ja irtautui ahdistavasta parisuhteesta – Se ei ratkaissut alkoholiongelmaa, ja pian isä Eppu Salminen huolestui</span>
          </div>
        </div>
        <div className={ styles.container }>
          <div className={ styles.number }>3</div>
          <div className={ styles.title }>Autot |
          <span className={ styles.topic}>Kolme autovalmistajaa sulkee Saksassa tehtaitaan sirupulan vuoksi</span>
          </div>
        </div>
        <div className={ styles.container }>
          <div className={ styles.number }>4</div>
          <div className={ styles.title }>Juoksu |
          <span className={ styles.topic}>Harri Kirvesniemi vaikuttui 18-vuotiaan ”amatöörin” hurjasta Cooper-tuloksesta</span>
          </div>
        </div>
        <div className={ styles.container }>
          <div className={ styles.number }>5</div>
          <div className={ styles.title }>Oikeudenkäynnit |
          <span className={ styles.topic}>Uusi käänne palkkamurhajutun oikeuden­käynnissä: ”Saara” peruutti Aarniolle myönteisiä lausuntojaan</span>
          </div>
        </div>
      </div>
    )
  }
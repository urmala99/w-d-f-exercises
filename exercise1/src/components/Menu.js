import React from 'react';
import styles from './Menu.module.css';

export default function Menu() {
    return(
    <div className={styles.headerBackground}>
        <div className={styles.container}> 
            <img src = "hesari.PNG" alt= "" />
            <div className = {styles.firstSection}> Etusivu 
            <div>Uutiset</div>
            <div>Lehdet </div> 
            <div>Asiakaspalvelu</div>
            </div>  
        <div className = {styles.secondSection}>
            <div className = {styles.subscribe}> Tilaa </div> 
            <div>Kirjaudu</div>
            <div>Valikko  </div>
        </div>
        </div>
    </div>
    )
}
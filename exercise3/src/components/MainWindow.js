import React from "react";
import styles from './MainWindow.module.css'


function MainWindow(props){
    return(
    <div className = { styles.container }>
        <div><img src={`/images/${props.image}`} alt="" /></div>
        <div className={ styles.name }> {props.name}</div>
        <div>{ props.type}</div>
        <div>{ props.color}</div>
        <div>€{ props.price}</div>
    </div>
    )
}

export default MainWindow;
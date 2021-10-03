import React from "react";
import styles from './SearchBar.module.css'
import MainWindow from "./MainWindow";



export default function SearchBar(props) {

  return (
    <div>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <MainWindow key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
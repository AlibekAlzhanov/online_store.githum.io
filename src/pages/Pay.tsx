import { Header } from '../components'
import React from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

function Pay() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1>Тапсырыс берілді сізбен жақын арада байланысады</h1>
        <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        
        className={styles.input}
        placeholder="Электронды пошта"
      />
      </div>
      </div>
    </div>
  )
}

export default Pay
import { Header } from '../components'
import React from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import styles from '../components/Search/Search.module.scss'
import { Link } from 'react-router-dom'
const onClickPay = () => {
  window.alert('Тапсырысынызға рахмет сізбен жақын арада байланысады')
}
const Pay: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <h2 className="pay_text">сізбен байланысу поштаныз</h2>
        <div className="pay_search">
          <div className={styles.root}>
            <svg
              className={styles.icon}
              enableBackground="new 0 0 32 32"
              id="EditableLine"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <input className={styles.input} placeholder="Электронды пошта" />
          </div>
        </div>
        <div className="button pay-btn" id="kil">
          <Link to="/">
            <span onClick={onClickPay}>Жіберу</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pay

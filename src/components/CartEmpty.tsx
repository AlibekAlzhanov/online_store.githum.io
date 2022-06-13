import React from 'react'
import { Link } from 'react-router-dom'

import cartEmptyImg from '../assets/img/empty-cart.png'

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Себет бос<span>😕</span>
    </h2>
    <p>
      Сірә, сіз әлі өнімге тапсырыс берген жоқсыз.
      <br />
      Өнімге тапсырыс беру үшін басты бетке өтіңіз.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Артқа қайту</span>
    </Link>
  </div>
)

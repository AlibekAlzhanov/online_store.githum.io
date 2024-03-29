import Loadable from 'react-loadable'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import './scss/app.scss'
import MainLayout from './layouts/MainLayout'

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
})

const FullProduct = React.lazy(() =>
  import(/* webpackChunkName: "FullProduct */ './pages/FullProduct'),
)
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound'),
)
const Pay = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/Pay'),
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="Product/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullProduct />
            </Suspense>
          }
        />
        <Route
          path="pay"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Pay />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App

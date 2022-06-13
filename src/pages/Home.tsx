import React from 'react'

import { useSelector } from 'react-redux'

import {
  Categories,
  Sort,
  ProductBlock,
  Skeleton,
  Pagination,
} from '../components'

import { useAppDispatch } from '../redux/store'
import { selectFilter } from '../redux/filter/selectors'
import { selectProductData } from '../redux/product/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchProducts } from '../redux/product/asyncActions'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { items, status } = useSelector(selectProductData)
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    selectFilter,
  )

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx))
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? String(categoryId) : ''
    const search = searchValue

    dispatch(
      fetchProducts({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    )

    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    getProducts()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const Products = items.map((obj: any) => (
    <ProductBlock key={obj.id} {...obj} />
  ))
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Барлығы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Қателік туындады 😕</h2>
          <p>
            Өкінішке орай, тауарды алу мүмкіндігі болған жоқ. Кейінірек
            қайталаңыз.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletons : Products}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home

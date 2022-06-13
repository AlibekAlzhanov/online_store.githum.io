import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const FullProduct: React.FC = () => {
  const [Product, setProduct] = React.useState<{
    imageUrl: string
    title: string
    price: number
  }>()

  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://62a2da5d5bd3609cee5bd482.mockapi.io/Online' + id,
        );
        setProduct(data);
      } catch (error) {
        alert('Ошибка при получении товаров!');
        navigate('/');
      }
    }

    fetchProduct()
  }, [])

  if (!Product) {
    return <>Загрузка...</>
  }

  return (
    <div className="container">
      <img src={Product.imageUrl} />
      <h2>{Product.title}</h2>
      <h4>{Product.price} тг</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Кері</span>
        </button>
      </Link>
    </div>
  )
}

export default FullProduct;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import getSingleProduct from '../../data/getSingleProduct';
import { useEffect, useState } from 'react';
import { Product } from '../../types/types';
import styles from './ProductDetail.module.css';
import CharacteristicItem from '../../components/CharacteristicItem/CharacteristicItem';
import RatingButton from '../../components/RatingButton/RatingButton';
import Section from '../../components/Section/Section';
import Review from '../../components/Review/Review';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id || '';

  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleProduct(productId);
      setProduct(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />

      {product && (
        <>
          <div className='container'>
            <div className={styles.productHeader}>
              <div className={styles.productImages}>
                <div className={styles.productDiscount}>
                  -{product.discountPercentage}%
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                  navigation
                  pagination
                  className={styles.imageSwiper}
                >
                  {product.images.map((el, i) => (
                    <SwiperSlide key={i}>
                      <img src={el} alt={product.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.productDescription}>
                <div className={styles.productTitle}>{product.title}</div>
                <div className={styles.productPriceContainer}>
                  <div className={styles.productCurPrice}>${product.price}</div>
                  <div className={styles.productOldPrice}>
                    {(
                      (product.price / (100 - product.discountPercentage)) *
                      100
                    ).toFixed(2)}
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <CharacteristicItem
                    name={'Rating'}
                    value={
                      <RatingButton
                        rating={product.rating}
                        reviewsQty={product.reviews.length}
                      />
                    }
                  />
                  {product.brand && (
                    <CharacteristicItem name={'Brand'} value={product.brand} />
                  )}
                  <CharacteristicItem
                    name={'Category'}
                    value={product.category}
                  />
                  <CharacteristicItem name={'SKU'} value={product.sku} />
                  <CharacteristicItem
                    name={'Available quantity'}
                    value={product.stock}
                  />
                  <CharacteristicItem
                    name={'Warranty'}
                    value={product.warrantyInformation}
                  />
                  <CharacteristicItem
                    name={'Shipping'}
                    value={product.shippingInformation}
                  />
                  <CharacteristicItem name={'Weight'} value={product.weight} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '24px' }}>{product.description}</div>
          </div>
          {product.reviews && (
            <Section title='Reviews'>
              <div>
                {product.reviews.map((el) => (
                  <Review {...el} />
                ))}
              </div>
            </Section>
          )}
        </>
      )}
    </>
  );
}

export default ProductDetail
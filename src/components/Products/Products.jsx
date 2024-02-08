import { useState } from 'react';
import styles from './style.module.css'
import img1 from '../../images/images_products/Rectangle 1131.jpg'
import img2 from '../../images/images_products/Rectangle 1221.jpg'
import img3 from '../../images/images_products/Rectangle 1223.jpg'
import img4 from '../../images/images_products/Rectangle 1225.jpg'
import img5 from '../../images/images_products/Rectangle 1227.jpg'
import img6 from '../../images/images_products/Rectangle 1229.jpg'
import img7 from '../../images/images_products/Rectangle 1236.jpg'
import img8 from '../../images/images_products/Rectangle 1237.jpg'
import img9 from '../../images/images_products/Rectangle 1238.jpg'
import img10 from '../../images/images_products/Rectangle 1239.jpg'
import img11 from '../../images/images_products/Rectangle 1240.jpg'
import img12 from '../../images/images_products/Rectangle 1241.jpg'
import img13 from '../../images/images_products/Rectangle 1248.jpg'
import img14 from '../../images/images_products/Rectangle 1249.jpg'
import img15 from '../../images/images_products/Rectangle 1250.jpg'
import img16 from '../../images/images_products/Rectangle 1251.jpg'
import img17 from '../../images/images_products/Rectangle 1252.jpg'
import img18 from '../../images/images_products/Rectangle 1253.jpg'
import img19 from '../../images/images_products/Rectangle 1260.jpg'
import img20 from '../../images/images_products/Rectangle 1261.jpg'
import img21 from '../../images/images_products/Rectangle 1262.jpg'
import img22 from '../../images/images_products/Rectangle 1263.jpg'
import img23 from '../../images/images_products/Rectangle 1264.jpg'
import img24 from '../../images/images_products/Rectangle 1265.jpg'
import img25 from '../../images/images_products/Rectangle 1272.jpg'
import img26 from '../../images/images_products/Rectangle 1273.jpg'
import img27 from '../../images/images_products/Rectangle 1274.jpg'
import img28 from '../../images/images_products/Rectangle 1275.jpg'
import img29 from '../../images/images_products/Rectangle 1276.jpg'
import img30 from '../../images/images_products/Rectangle 1277.jpg'
import ProductItem from '../ProductItem/ProductItem';


function Products() {

    const [products, setProducts] = useState([
        {
            id: 'prod1',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img1,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod2',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img2,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod3',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img3,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod4',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img4,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod5',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img5,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod6',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img6,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod7',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img7,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod8',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img8,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod9',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img9,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod10',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img10,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod11',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img11,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod12',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img12,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod13',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img13,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod14',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img14,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod15',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img15,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod16',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img16,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod17',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img17,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod18',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img18,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod19',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img19,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod20',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img20,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod21',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img21,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod22',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img22,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod23',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img23,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod24',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img24,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod25',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img25,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod26',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img26,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod27',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img27,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod28',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img28,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod29',
            category_id: 1,
            subcategory_id: 'sc1',
            image: img29,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        },
        {
            id: 'prod30',
            category_id: 1,
            subcategory_id: 'sc1',
            // image: img30,
            alter: 'Product image',
            art: 'A555',
            price: '2500$'
        }
    ]); 

    return (
        <div className={styles.productsContainer}>
            {products?.map((product) => {
                return (
                    <ProductItem key={product.id} {...product} />
                );
            })}
        </div>
    );
}

export default Products;
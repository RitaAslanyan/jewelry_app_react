import { useState } from 'react';
import styles from './style.module.css'
import { SlUserFemale } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import category_ring_img from '../../images/category_ring.jpg'
import category_necklace_img from '../../images/category_necklace.jpg'
import category_earrings_img from '../../images/category_earrings.jpg'
import category_chain_img from '../../images/category_chain.jpg'
import category_brooch_img from '../../images/category_brooch.jpg'
import category_pendants_img from '../../images/category_pendants.jpg'
import category_bracelets_img from '../../images/category_bracelets.jpg'
import CategoryItem from '../CategoryItem/CategoryItem';

function Categories() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'ring',
            display_name: 'Кольцo',
            image: category_ring_img,
            isActive: true
        },
        {
            id: 2,
            name: 'necklace',
            display_name: 'Колье',
            image: category_necklace_img,
            isActive: false
        },
        {
            id: 3,
            name: 'earrings',
            display_name: 'Серьги',
            image: category_earrings_img,
            isActive: false
        },
        {
            id: 4,
            name: 'chain',
            display_name: 'Цепь',
            image: category_chain_img,
            isActive: false
        },
        {
            id: 5,
            name: 'brooch',
            display_name: 'Брошь',
            image: category_brooch_img,
            isActive: false
        },
        {
            id: 6,
            name: 'pendants',
            display_name: 'Кулоны',
            image: category_pendants_img,
            isActive: false
        },
        {
            id: 7,
            name: 'bracelets',
            display_name: 'Браслеты',
            image: category_bracelets_img,
            isActive: false
        }
    ]);


    return (
        <div className={styles.genderAndCategories}>
            <div className={styles.gender}>
                <div className={styles.female}>
                    <SlUserFemale style={{fill: "#0008C1"}} />
                </div>
                <div className={styles.male}>
                    <SlUser style={{color: "#939393"}}/>
                </div>
            </div>
            {/* <div className={styles.categoryContainer}> */}
            <div className={styles.categories}>
                {categories?.map((category) => {
                    return (
                        <CategoryItem key={category.id} {...category}/>
                    )
                })}
            </div>
            {/* </div> */}
            <button className={styles.addCategory}>
                <FaPlus size={16} style={{color: '#7E7A7A'}} />
            </button>
        </div>
    );
}

export default Categories;
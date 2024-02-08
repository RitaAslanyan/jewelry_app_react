import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import styles from './style.module.css'
import AddSubCategory from '../AddSubCategory/AddSubCategory';

function SubCategories() {
    const [isModalActive, setModalActive] = useState(false)

    const [subCategories, setSubCategories] = useState([
        {
            id: 'sc1',
            name: 'Ring',
            display_name: 'Кольцo',
            isActive: true,
            category_id: 1
        },
        {
            id: 'sc2',
            name: 'Wedding rings',
            display_name: 'Обручальные',
            isActive: false,
            category_id: 1
        },
        {
            id: 'sc3',
            name: 'Brass knuckles ring',
            display_name: 'Кольца кастеты ',
            isActive: false,
            category_id: 1
        },
        {
            id: 'sc4',
            name: 'Cocktail rings',
            display_name: 'Коктейльные',
            isActive: false,
            category_id: 1 
        },        
        {
            id: 'sc5',
            name: 'Engagement',
            display_name: 'Помолвочные',
            isActive: false,
            category_id: 1 
        }
    ]);

    console.log(subCategories)

    return (
        <div className={styles.subCategoriesContainer}>
            <div className={styles.subCategories}>
                {subCategories?.map((item) => {
                    return (
                        <div key={item.id} className={styles.subCategoryItem}>
                            <div className={styles.name}>{item.display_name}</div>
                            <div className={styles.line}></div>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => setModalActive(true)} className={styles.addSubCtg}>
                <FaPlus size={16} style={{color: '#7E7A7A'}} />
            </button>
            {isModalActive && <AddSubCategory setModalActive={setModalActive} setSubCategories={setSubCategories}/>}
        </div>
    );
}

export default SubCategories;
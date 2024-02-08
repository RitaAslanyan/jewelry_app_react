import { useState } from 'react';
import styles from './style.module.css'
import { TfiClose } from "react-icons/tfi";

function AddSubCategory({setModalActive, setSubCategories}) {
    const [text, setText] = useState('')

    const handleAddSubCategory = () => {
        setSubCategories((state) => {
            return [...state,         {
                id: 'scID',
                name: text,
                display_name: text,
                isActive: false,
                category_id: 1
            },]
        })
        setText('')
    }

    return (
        <div className={styles.wrapper} onClick={() => setModalActive(false)}>       
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_and_cancel_wrapper}>
                    <span className={styles.title}>Кольцo : Добавить Подкатегория</span>
                    <TfiClose onClick={() => setModalActive(false)} />
                </div>
                <input className={styles.input} placeholder='Подкатегория' value={text} onChange={(e) => setText(e.target.value)}/>
                <div className={styles.bttn}>
                    <button className={styles.addBttn} onClick={handleAddSubCategory}>Добавить</button>
                </div>
            </div>
        </div>
    );
} 

export default AddSubCategory;
import styles from './style.module.css'

function CategoryItem({id, name, display_name, image, isActive}) {
    return (
        <div className={styles.item} >
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.catItemImg}/>
            </div>
            <div className={styles.name}>{display_name}</div>
        </div>
    );
}

export default CategoryItem;
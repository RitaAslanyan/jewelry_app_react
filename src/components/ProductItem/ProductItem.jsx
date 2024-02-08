import styles from './style.module.css'

function ProductItem({image, alter, art, price}) {
    return (
        <div className={styles.itemContainer}>
            { image ? 
                <div className={styles.img}>
                    <img src={image} />
                </div>
                : 
                <div className={styles.alter}>
                    <span>{alter}</span>
                </div>
                
            }
            
            <div className={styles.artAndPrice}>
                <span className={styles.art}>{art}</span>
                <span className={styles.price}>{price}</span>
            </div>

        </div>
    );
}

export default ProductItem;
import styles from './style.module.css'
import Categories from '../Categories/Categories';
import SubCategories from '../SubCategories/SubCategories';
import Products from '../Products/Products';

function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.contentContainer}>
                <Categories />
                <SubCategories />
                <Products />
            </div>
        </div>
    );
}

export default Menu;
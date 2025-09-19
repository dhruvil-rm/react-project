import styles from "./item.module.css";

const Item = ({ fooditmes, handleBuyButton, Bought }) => {

  return (
    <li className={`${styles['RR-item']} list-group-item ${Bought && 'active'}`}>
      <span className={styles['RR-span']}>{fooditmes}</span>
      <button className={`${styles.button} btn btn-warning`} onClick={handleBuyButton}>Buy</button>
    </li>
  );
}

export default Item;
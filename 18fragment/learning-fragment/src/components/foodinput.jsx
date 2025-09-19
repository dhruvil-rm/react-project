import styles from "./foodinput.module.css"


const Foodinput = ({ handleKeyDown }) => {
  return <input type="text" placeholder="Enter Food Item Here" className={styles.FoodInput}
    onKeyDown={handleKeyDown} />
}

export default Foodinput;
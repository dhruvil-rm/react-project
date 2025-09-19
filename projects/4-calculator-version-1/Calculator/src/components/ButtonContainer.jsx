import styles from './ButtonContainer.module.css'

const buttonContainer = () => {

  const ButtonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.buttonContainer}>
      {ButtonName.map(ButtonName => <button className={styles.button}>{ButtonName}</button>)}
    </div>
  );
}

export default buttonContainer;
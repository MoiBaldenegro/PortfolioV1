import styles from "./switch.module.css";



export default function Switch (){

    return(
        <div className={styles.switchContainer}>
             <div className={styles.content}>
                <label className={styles.switch}>
                    <input type="checkbox" className={styles.input} />
                    <span className={styles.slider + " " + styles.round}></span>
                </label>
             </div>
        </div>
       
  );
}


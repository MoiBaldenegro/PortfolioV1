import styles from "./ventoColumns.module.css"
import Switch from "../../pages/elements/switch/switch"
import useDate from "../../hooks/useDate.jsx"



export default function VentoColumns(){
    const { currentDateTime } = useDate();
    
    return(
        <div className={styles.ventoColumns}>
            <main className={styles.Container}>
                <section className={styles.presentacion}>Presentacion</section>
                <section className={styles.lenguaje}>ES</section>
                <section className={styles.theme}><Switch/></section>
                <section className={styles.date}><div>{currentDateTime.toString()}</div></section>
                <section className={styles.linkeDin}>Linkedin</section>
                <section className={styles.animation}>Animation</section>
                <section className={styles.videogames}>pi videogames</section>
                <section className={styles.doubleFetching}>Double Fetching</section>
                <section className={styles.glamourglow}>Glamour Globe</section>
                <section className={styles.pi}>pi countries</section>
                <section className={styles.rickYmorty}>Rick y morty</section>
                <section className={styles.userList}>UserList</section>
                <section className={styles.movies}> Buscador de peliculas </section>
                <section className={styles.tomate}>Tomate punto de venta</section>
                <section className={styles.encriptador}>Encriptador</section>
        </main>

        </div>

        
    )
}
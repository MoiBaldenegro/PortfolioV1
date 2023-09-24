import styles from "./ventoColumns.module.css"



export default function VentoColumns(){
    return(
        <div className={styles.ventoColumns}>
            <main className={styles.Container}>
                <section className={styles.presentacion}>Presentacion</section>
                <section className={styles.lenguaje}>Leguaje</section>
                <section className={styles.theme}>Tema</section>
                <section className={styles.date}>Fecha</section>
                <section className={styles.linkeDin}>Linkedin</section>
                <section className={styles.animation}>Animation</section>
                <section className={styles.videogames}>pi videogames</section>
                <section className={styles.doubleFetching}>Double Fetching</section>
                <section className={styles.glamourglow}>Glamour Globe</section>
                <section className={styles.pi}>pi countries</section>
                <section className={styles.rickYmorty}>Rick y morty</section>
                <section className={styles.userList}>UserList</section>
                <section className={styles.movies}> Buscador de peliculas </section>
                <section className={styles.encriptador}>Encriptador</section>
                <section className={styles.encriptador}>Encriptador</section>
                <section className={styles.encriptador}>Encriptador</section>
                <section className={styles.encriptador}>Encriptador</section>
        </main>

        </div>

        
    )
}
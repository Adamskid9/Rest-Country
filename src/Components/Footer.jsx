import styles from './Footer.module.css';


function Footer() {

    return (
        <div className={styles.footer}>
            CopyRight By <span className={styles.owner} >Adam</span>
        </div>
    )
}

export default Footer

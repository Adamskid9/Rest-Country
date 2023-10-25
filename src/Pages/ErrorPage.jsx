import styles from './ErrorPage.module.css'
function ErrorPage() {
    return (
        <div className={styles.error} >
            <div className={styles.container}>
                page Not Found
            </div>
        </div>
    )
}

export default ErrorPage

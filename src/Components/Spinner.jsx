import "./Spinner.css"

function Spinner() {
{/* <div className={styles.spinner}></div> */}

    return <div className="containe">
    <div className="spin">
        <div class="jumping-dots-loader">
         <span></span> <span></span> <span></span> 
        </div>

         <div class="moving-gradient">

        </div>
    </div> 
    </div>              
}

export default Spinner;
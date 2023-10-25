import "./Spinner.css"

function Spinner() {

    return <div className="containe">
    <div className="spin">
        <div className="jumping-dots-loader">
         <span></span> <span></span> <span></span> 
        </div>

         <div className="moving-gradient">

        </div>
    </div> 
    </div>              
}

export default Spinner;
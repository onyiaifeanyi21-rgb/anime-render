import { useState } from "react";
import './style.css'
function Newcomponent(){
    const[ favanime, setfavanime ]= useState("")
    const[ premium, setPremium] = useState(false)
    return(
        <div className={favanime?  "active": "adjusted"}>
        {premium && <p> my favourite anime attack of titan </p>}
        <h1>my fav anime </h1>
        <button onClick={() => setPremium(true)}>show</button>
         <button onClick={() => setPremium(false)}>hide</button>
        <button onClick={() => setfavanime('naruto')}>click me </button>
</div>
    )
}

export default Newcomponent;
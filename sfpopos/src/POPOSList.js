import React from "react";
import POPOSSpace
 from "./POPOSSpace";
function POPOSList(){
    return(
        <div className="POPOSList">
            <POPOSSpace
            name="Tent life"
            address="Middle of nowhere"
            image="img2.jpg"
             />
            <POPOSSpace 
            name="Ocean "
            address="12 Downtown Avenue"
            image="img3.jpg"
            />
            <POPOSSpace 
             name="Lambo "
             address="12 Macleods Avenue"
             image="img4.jpg"
            />
            <POPOSSpace 
            name="Waterfall "
            address="15 Abbot Avenue"
            image="img5.jpg"
            />
            <POPOSSpace />

        </div>
    )
}

export default POPOSList
import React from "react"





function ContactCard(props){
    return(
<div className="contact-card">
<img src={props.foto}
 ></img><br></br>
<a >{props.emrimaces}</a><br/>
<p >{props.help}</p><br/>
<p >{props.nr}</p><br/>

</div>
    )
}


    export default ContactCard
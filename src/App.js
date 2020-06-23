import React from "react"
import Meme from "./components/Meme"

 
const objectQueryParameters=(obj) =>{
const parameters= Object.entries(obj).map(([key,value]) => `${key}=${value}`)
    return '?' + parameters.join('&')
}


function App(){
const[templates, setTemplates]= React.useState([]);
const[template, setTemplate]=React.useState(null);
const[topText, setTopText]=React.useState('');
const[bottomText, setBottomText]=React.useState('');
const[meme, setMeme]= React.useState(null);
React.useEffect (()=>{
 fetch ('https://api.imgflip.com/get_memes').then(x=>
 x.json().then(response =>setTemplates(response.data.memes)))
},[])

if(meme){
    return(
        <div style={{textAlign: "center"}}>
            <img src={meme} 
                 alt="custom meme"
                 style={{width:200}}/>
        </div>);
}

    return(
        <div style={{textAlign:"center"}}>
            {template && (

        <form onSubmit={async e => {
            e.preventDefault()
            
            const parameters={
                template_id: template.id,
                text0: topText,
                text1: bottomText,
                username:"lorik1",
                password:"liki1234"
        };
            const response = await fetch(
                `https://api.imgflip.com/caption_image${objectQueryParameters(parameters)}`
               
            );
             const json = await response.json();
             setMeme(json.data.url);
            
            
        }}
        >
            <Meme template={template} />
            <input 
            placeholder="top text"
            value={topText} 
            onChange={e=>setTopText(e.target.value)}/>
            <input placeholder="bottom text"
            value={bottomText}
            onChange={e=>setBottomText(e.target.value)}
            />
            <button type="submit">create meme</button>
         </form>
            )}
            {!template &&(
            <>
            <h1>Pick your template!</h1>
             {templates.map(template => {
                return (
                    <Meme 
                     template={template}
                    onClick={()=>{
                       setTemplate(template)
                    }}
                    />
                );
            })}
            </>
            )}
            </div>
    )
}









export default App;





































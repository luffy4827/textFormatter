import React, { useState } from 'react'

export default function TextForm(props) {
    const toUpperCase = () => {
        console.log("UpperCase was clicked '" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const toLowerCase = () => {
        console.log("LowerCase was clicked '" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }

    const clearText = () => {
        console.log("LowerCase was clicked '" + text);
        let newText ="";
        setText(newText);
        props.showAlert("Text area cleared","success");
    }

    const copyText = () => {
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to the clipboard","success");
    }

    const handelOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }


    const [text, setText] = useState("")
    return (
        <>        < div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(138, 142, 146)':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn-primary" onClick={toUpperCase}>Into UpperCase</button>
            <button className="btn-primary mx-2" onClick={toLowerCase}>Into LowerCase</button>
            <button className="btn-primary " onClick={clearText}>Clear Text</button>
            <button className="btn-primary mx-2 " onClick={copyText}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Word and {text.length} Text</p>
            <p>{0.008*text.split(" ").length} is the average time(in min) required to read the the text.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something To Preview It Here"}</p>
        </div>
        </>
    )
}

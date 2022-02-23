import React, { useState } from 'react';

const Lang = () => {

    const [text, setText] = useState('')
    const [res, setRes] = useState([])

    const detect = (e) => {
        if(e.key === 'Enter'){
            var DetectLanguage = require('detectlanguage')
            var detectlanguage = new DetectLanguage("e291e72cac0af694cf437df95a050196")
            detectlanguage.detect(text).then(function(result){
                setText("")
                setRes(result);
                console.log(res)
            })
        }
}

    return (
        <div>
            <div className="body">
                <br/>
                <div className="box">
                    <input type="search" placeholder="Your Text Here..." onChange={ e => setText(e.target.value)} value={text} onKeyPress={detect} required autoComplete="off"/><br/>
                </div><br/>
                <pre>{res.map((data, index) => {
                    return(<p>Lang. possib - {index.toString()} : {data.language}</p>)
                })}</pre>
                <br/><br/>
            </div>
        </div>
    )
}

export default Lang;
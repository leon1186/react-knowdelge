import React from 'react'
import "./DocumentObject.css"

function DocumentObject() {

    document.title = "Document Object in React"
    document.body.style.backgroundColor = "lightblue"
    document.body.style.color = "green"
    // document.body.innerHTML = "<h1>LEON PROGRAMMER</h1>"

    // console.log("Document Object: ", document)

    function makeframe() {
        document.getElementById("idframe1").innerHTML += "<p>This is frame 1</p>"
    }


    return (

        <>
            <div className='frame1' id='idframe1'>Frame1</div>
            <div className='frame2' id='idframe2'>Frame2</div>
            <button onClick={makeframe}>Make Frame</button>

        </>

    )
    //body, head, title, meta, link, script, style, etc. are all part of the document object.
    //classe are many but id is only one. so we can use getElementById to access the element with the specific id and manipulate it. but for class we have to use getElementsByClassName which returns a collection of elements with the same class name and we have to loop through them to manipulate them.


}

export default DocumentObject




//rfce abreviation
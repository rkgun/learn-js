function load() {
    let paragraph=document.createElement("p");
    let node=document.createTextNode("This is new paragraph");
    paragraph.appendChild(node);
    
    let elem=document.getElementById("div1");
    let child = document.getElementById("p3");

    //elem => add paragraph once child elem
    elem.insertBefore(paragraph, child);

    elem=document.getElementById("div2");
    child=document.getElementById("2");
    paragraph=document.createElement("p");
    node=document.createTextNode("3. paragraph");
    paragraph.appendChild(node);
    insertAfter(paragraph,child);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
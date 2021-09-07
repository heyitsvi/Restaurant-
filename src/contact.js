function displayContact(){
    let contact_div = document.createElement('div');
    contact_div.setAttribute("id","contact");
    document.querySelector("#content").appendChild(contact_div);
    let contact = document.getElementById("contact");

    const img  = document.createElement("img");
    img.src = "./address.PNG";
    contact.appendChild(img);

    const address = document.createElement("div");
    address.textContent=`
Phone Number: +1 303-205
Email: la-bel.ca
6263 Leland Way, Los Angeles, CA 90028, United States`;
    contact.appendChild(address);
}

export{displayContact};
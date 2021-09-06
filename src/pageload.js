function pageload(){
    const title = document.createElement('div');
    title.textContent = "La Bel Restaurant";
    title.setAttribute("id","heading");
    console.log(document.body);
    document.body.appendChild(title);

    const tabs = document.createElement('div');
    tabs.setAttribute("id","tabs");
    document.querySelector("#content").appendChild(tabs);

    const tab1 = document.createElement('button');
    tab1.textContent = "About";
    tab1.setAttribute("id","Btn1");
    tab1.setAttribute("class","tabBtn");
    const tab2 = document.createElement('button');
    tab2.textContent = "Menu";
    tab2.setAttribute("id","Btn2");
    tab2.setAttribute("class","tabBtn");
    const tab3 = document.createElement('button');
    tab3.textContent = "Contact";
    tab3.setAttribute("id","Btn3");
    tab3.setAttribute("class","tabBtn");
    document.querySelector("#tabs").appendChild(tab1);
    document.querySelector("#tabs").appendChild(tab2);
    document.querySelector("#tabs").appendChild(tab3);

}

export {pageload};
function displayMenu(){
    let menu_div = document.createElement('div');
    menu_div.setAttribute("id","menu-list");
    document.querySelector("#content").appendChild(menu_div);
    let menu = document.getElementById("menu-list");
    
    class createItems{
        constructor(name,ingredients,price){
            this.name = name;
            this.ingredients = ingredients;
            this.price = price;
        }
    }

    let item1 = new createItems("Breakfast Sandwich","Bread, Eggs, Veggies, Cheese", "10");
    let item2 = new createItems("Lunch Platter", "Steak, Rice, Sweet Potatoes", "50");
    let item3 = new createItems("Brunch Sandwich", "Bread, Chipotle, Veggies", "15");
    let item4 = new createItems("Dinner Platter", "Chicken, Rice, Veggies, Soup", "50");

    let items = [item1,item2,item3,item4];

    function createItemDiv(item){
        let div = document.createElement("div");
        div.setAttribute("class","items");
        div.textContent = 
`${item.name}

${item.ingredients}
 
${item.price}$`;
        return div;
    }

    for(let i =0; i<4;i++){
        let div = createItemDiv(items[i]);
        menu.appendChild(div);
    }

}

export {displayMenu};
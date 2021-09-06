function about(){
    const intro = document.createElement('div');
    intro.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod similique, 
    voluptas pariatur delectus odit maxime accusantium, dolores quae sequi explicabo adipisci 
    totam perferendis harum neque? Est soluta laudantium ipsam.`;
    intro.setAttribute("id","intro");
    document.querySelector("#content").appendChild(intro);
}

export {about};
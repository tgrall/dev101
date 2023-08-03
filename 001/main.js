const menu = [
    {
        id: 1,
        title: "Crepe au Sucre",
        price: 2.50,
        color : "beige",
        
    },
    {
        id: 2,
        title: "Crepe au Chocolat",
        price: 3.50,
        color : "lightblue",
    },    
    {
        id: 3,
        title: "Crepe au Nutella",
        price: 5.50,
        color : "lightpink",
    },
];



/**
 *  Use this function to print the menu
 */
function load() {

    // get container element
    const container = document.getElementById("container");

    // loop through the menu and print each item
    // here I am using for (i...), you can also use forEach
    for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        container.innerHTML += `
            <div class="item" style="background-color:${item.color}">
                <h1>${item.title}</h1>
                <h2>${item.price}€</h2>
            </div>
        `;
    }

}

// Call the function to exucute our business logic
load();


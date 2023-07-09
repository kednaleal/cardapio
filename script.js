const menu = [
    {
        id: 1,
        title: "Coxinha",
        categoria: "Salgados",
        preco: 4,
        img: "img/coxinha.jpeg",
        descricao: "Coxinha de frango",
    },

    {
        id: 2,
        title: "Suco",
        categoria: "Bebidas",
        preco: 3,
        img: "img/bebidas-sucos.avif",
        descricao: "Suco de Laranja",
    },

    {
        id: 3,
        title: "Brigadeiro",
        categoria: "Sobremesas",
        preco: 3.50,
        img: "img/sobremesa-bricadeiro.jpeg",
        descricao: "Brigadeiro de chocolate",
    },
    

    {
        id: 4,
        title: "Pastel",
        categoria: "Salgados",
        preco: 4,
        img: "img/pastel-carne.jpeg",
        descricao: "Pastel de carne",
    },


    {
        id: 5,
        title: "Pastel",
        categoria: "Salgados",
        preco: 4,
        img: "img/pastel-misto.jpg",
        descricao: "Pastel misto",
    },
 

    {
        id: 6,
        title: "Coxinha",
        categoria: "Salgados",
        preco: 4,
        img: "img/coxinha-carne.jpeg",
        descricao: "Coxinha de carne",
    },

    {
        id: 7,
        title: "Refri",
        categoria: "Bebidas",
        preco: 6.50,
        img: "img/bebida-refri-laranja.jpeg",
        descricao: "Fanta de Laranja",
    },

    {
        id: 8,
        title: "Refri",
        categoria: "Bebidas",
        preco: 10,
        img: "img/bebida-refi-coca.jpeg",
        descricao: "Coca-Cola",
    },

    {
        id: 9,
        title: "Bolo",
        categoria: "Sobremesas",
        preco: 3,
        img: "img/sobremesa-bolo.jpg",
        descricao: "Bolo de chocolate com sorvete de leite condensado e cobertura  de chocolate",
    },


    {
        id: 10,
        title: "Pastel",
        categoria: "Salgados",
        preco: 4,
        img: "img/pasteal-frango.jpg",
        descricao: "Pastel de frango",
    },


    {
        id: 11,
        title: "Sorvete",
        categoria: "Sobremesas",
        preco: 3,
        img: "img/sobremesa-choco.jpg",
        descricao: "Brownie na taça",
    },

];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll('.filter-btn')


window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});



filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const categoria = e.currentTarget.dataset.id
        const menuCategoria = menu.filter(function (menuItems) {
            //console.log(menuItems.categoria)
            if (menuItems.categoria === categoria) {

                return menuItems
            }
        });
        //console.log(menuCategoria);
        if(categoria === 'todos'){
            displayMenuItems(menu);
        }
        else{
           displayMenuItems(menuCategoria) 
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        return `<article class="menu-item">
        <img src=${item.img}
            alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="preco">$${item.preco}</h4>
            </header>
            <p class="item-text">
                ${item.descricao}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu
}
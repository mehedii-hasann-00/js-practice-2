
let cart = [];
const loader_skeleton = `<div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>`;
document.getElementById("trees").innerHTML = loader_skeleton;

fetch('https://openapi.programming-hero.com/api/categories')
    .then(response => response.json())
    .then(data => {
        const cat = document.getElementById("category");
        for (let i = 0; i < data.categories.length; i++) {
            const temp = `<button class="rounded text-black-700 py-2 px-4 w-full cursor-pointer categories" id="${data.categories[i].id}" onClick="show_category(this)">${data.categories[i].category_name}</button>`
            cat.innerHTML += temp;
        }
        // console.log(data);
    });

fetch('https://openapi.programming-hero.com/api/plants')
    .then(response => response.json())
    .then(data => {
        const tree = document.getElementById("trees");
        tree.innerHTML = '';
        for (let i = 0; i < data.plants.length; i++) {
            const temp = `<div class="bg-white shadow-lg rounded-lg p-4" id="${data.plants[i].id}">
                    <img src="${data.plants[i].image}" class="h-32 w-64 rounded-lg" alt="">
                    <p class="py-2 plant_name cursor-pointer" onClick="setModalBox(${data.plants[i].id})">${data.plants[i].name}</p>
                    
                    <p class="text-xs py-2">${data.plants[i].description}</p>
                    <div class="flex justify-between ">
                        <button class="rounded-full bg-green-100 text-green-700 text-xs px-2 py-2">${data.plants[i].category}</button>
                        <p>${data.plants[i].price}</p>
                    </div>
                    <button class="rounded-full bg-green-700 text-white w-full py-2 my-4" onClick=add_to_cart(${data.plants[i].id})>Add to Cart</button>
                </div>`
            tree.innerHTML += temp;
        }
    });

function show_category(btn) {
    document.getElementById("trees").innerHTML = loader_skeleton;

    const id = btn.getAttribute("id");
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(response => response.json())
        .then(data => {
            const buttons = document.querySelectorAll('#category .categories');

            buttons.forEach(bton => {
                bton.classList.remove('bg-green-700', 'text-white');
                bton.classList.add('text-black-700');
            });
            btn.classList.add('bg-green-700', 'text-white');
            btn.classList.remove('text-black-700');

            const tree = document.getElementById("trees");
            tree.innerHTML = "";
            for (let i = 0; i < data.plants.length; i++) {
                const temp = `<div class="bg-white shadow-lg rounded-lg p-4" id="${data.plants[i].id}">
                    <img src="${data.plants[i].image}" class="h-32 w-64 rounded-lg" alt="">
                    <p class="py-2 plant_name cursor-pointer" onClick="setModalBox(${data.plants[i].id})">${data.plants[i].name}</p>
                    <p class="text-xs  py-2">${data.plants[i].description}</p>
                    <div class="flex justify-between ">
                        <button class="rounded-full bg-green-100 text-green-700 text-xs px-2 py-2">${data.plants[i].category}</button>
                        <p>${data.plants[i].price}</p>
                    </div>
                    <button class="rounded-full bg-green-700 text-white w-full py-2 my-4" onClick=add_to_cart(${data.plants[i].id})>Add to Cart</button>
                </div>`
                tree.innerHTML += temp;
            }
        });
}

function show_all(btn) {
    document.getElementById("trees").innerHTML = loader_skeleton;

    fetch('https://openapi.programming-hero.com/api/plants')
        .then(response => response.json())
        .then(data => {
            const buttons = document.querySelectorAll('#category .categories');

            buttons.forEach(bton => {
                bton.classList.remove('bg-green-700', 'text-white');
                bton.classList.add('text-black-700');
            });
            btn.classList.add('bg-green-700', 'text-white');
            btn.classList.remove('text-black-700');
            const tree = document.getElementById("trees");
            tree.innerHTML = "";
            for (let i = 0; i < data.plants.length; i++) {
                const temp = `<div class="bg-white shadow-lg rounded-lg p-4" id="${data.plants[i].id}">
                    <img src="${data.plants[i].image}" class="h-32 w-64 rounded-lg" alt="">
                    <p class="py-2 plant_name cursor-pointer" onClick="setModalBox(${data.plants[i].id})">${data.plants[i].name}</p>
                    <p class="text-xs  py-2">${data.plants[i].description}</p>
                    <div class="flex justify-between ">
                        <button class="rounded-full bg-green-100 text-green-700 text-xs px-2 py-2">${data.plants[i].category}</button>
                        <p>${data.plants[i].price}</p>
                    </div>
                    <button class="rounded-full bg-green-700 text-white w-full py-2 my-4" onClick=add_to_cart(${data.plants[i].id})>Add to Cart</button>
                </div>`
                tree.innerHTML += temp;
            }
        });

}


function setModalBox(id) {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(response => response.json())
        .then(data => {
            const plant = data.plants;

            const modalWrapper = document.createElement("div");
            modalWrapper.id = "modal";
            modalWrapper.className = "fixed inset-0 flex items-center justify-center";

            modalWrapper.innerHTML = `
        <div class="bg-white p-6 rounded shadow-[0_25px_80px_rgba(0,0,0,0.8)] w-3/4 lg:w-1/3">
          <img src="${plant.image}" class="h-32 w-full rounded-lg" alt="">
          <p class="py-2 font-bold">${plant.name}</p>
          <p class="text-xs py-2">${plant.description}</p>
          <div class="flex justify-between">
            <button class="rounded-full bg-green-100 text-green-700 text-xs px-2 py-2">${plant.category}</button>
            <p>${plant.price}</p>
          </div>
          <button class="rounded-full bg-green-700 text-white w-full py-2 my-4" onClick=add_to_cart(${plant.id})>Add to Cart</button>
          <div class="flex justify-center">
            <button id="closeModal" class="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Close</button>
          </div>
          
        </div>
      `;
            document.body.appendChild(modalWrapper);
            document.getElementById("closeModal").addEventListener("click", () => {
                modalWrapper.remove();
            });

            modalWrapper.addEventListener("click", (e) => {
                if (e.target === modalWrapper) modalWrapper.remove();
            });
        });
}

function add_to_cart(id) {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(response => response.json())
        .then(data => {
            if (!cart[data.plants.id]) {
                cart[data.plants.id] = {
                    id: data.plants.id,
                    name: data.plants.name,
                    price: data.plants.price,
                    qty: 0
                }
            }
            if (cart[data.plants.id]) {
                cart[data.plants.id].qty += 1;
            }
            document.getElementById('cart_list').innerHTML = '';
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i]) {
                    document.getElementById('cart_list').innerHTML += `                <div class="bg-gray-100 rounded-md flex justify-between p-4 my-4">
                    <div>
                        <p>${cart[i].name}</p>
                        <p>${cart[i].price} x ${cart[i].qty}</p>
                    </div>
                    <p class="py-4 text-red-500 cursor-pointer" onClick="delete_item(${cart[i].id})">X</p>
                </div>`;

                    total = total + (cart[i].price * cart[i].qty);
                }
            }
            document.getElementById('total').innerHTML = total;
        });

}

function delete_item(id) {
    for (let i = cart.length - 1; i >= 0; i--) {
        if (cart[i] && (cart[i].id === id)) {
            cart.splice(i, 1);
        }
    }
    document.getElementById('cart_list').innerHTML = '';
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]) {
            document.getElementById('cart_list').innerHTML += `                <div class="bg-gray-100 rounded-md flex justify-between p-4 my-4">
                    <div>
                        <p>${cart[i].name}</p>
                        <p>${cart[i].price} x ${cart[i].qty}</p>
                    </div>
                    <p class="py-4 text-red-500 cursor-pointer" onClick="delete_item(${cart[i].id})">X</p>
                </div>`;

            total = total + (cart[i].price * cart[i].qty);
        }
    }
    document.getElementById('total').innerHTML = total;
}



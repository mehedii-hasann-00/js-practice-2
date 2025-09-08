fetch('https://openapi.programming-hero.com/api/categories')
  .then(response => response.json())
  .then(data => {
    const cat = document.getElementById("category");
    for (let i = 0; i < data.categories.length; i++) {
        const temp = `<button class="rounded text-black-700 py-2 px-4 w-full" id="${data.categories[i].id}">${data.categories[i].category_name}</button>`
        cat.innerHTML += temp;
    }
    console.log(data);
  });

  fetch('https://openapi.programming-hero.com/api/plants')
  .then(response => response.json())
  .then(data => {
        const tree = document.getElementById("trees");
    for (let i = 0; i < data.plants.length; i++) {
        const temp = `<div class="bg-white shadow-lg rounded-lg p-4" id="${data.plants[i].id}">
                    <img src="${data.plants[i].image}" class="h-32 w-64 rounded-lg" alt="">
                    <p class="py-2">${data.plants[i].name}</p>
                    <p class="text-xs  py-2">${data.plants[i].description}</p>
                    <div class="flex justify-between ">
                        <button class="rounded-full bg-green-100 text-green-700 text-xs px-2 py-2">${data.plants[i].category}</button>
                        <p>${data.plants[i].price}</p>
                    </div>
                    <button class="rounded-full bg-green-700 text-white w-full py-2 my-4">add to cart</button>
                </div>`
        tree.innerHTML += temp;
    }
    console.log(data);
  });

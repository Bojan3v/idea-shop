let total = document.querySelector(`.sidebar-total`);
let sidButton = document.querySelector(`.cart-button`);
let sidebar = document.querySelector(`.sidebar`);
let containerFood = document.querySelector(`.food-container`);
let input = document.querySelector(`.search-input`);
let sideBarBas = document.querySelector(`.sidebar-list`);
let popup = document.querySelector(`.popup`);
let cards = [
  {
    name: `Кактус`,
    price: 200,
    assets: `assets/goods/1.jpg`,
  },

  {
    name: `Настенные часы`,
    price: 1500,
    assets: `assets/goods/2.jpg`,
  },

  {
    name: `Телевизор`,
    price: 25000,
    assets: `assets/goods/3.jpg`,
  },
  {
    name: `Блендер`,
    price: 1200,
    assets: `assets/goods/4.jpg`,
  },
  {
    name: `Шторы`,
    price: 3000,
    assets: `assets/goods/5.jpg`,
  },
  {
    name: `Комплект посуды`,
    price: 5000,
    assets: `assets/goods/6.jpg`,
  },
];

render();
let cardsFood = document.querySelectorAll(`.card`);
input.addEventListener(`input`, seachByTitle);

function renderItem(item) {
  containerFood.innerHTML += `
    <div class="card">
        <img src="${item.assets}">
        <div class="card-body">
          <span class="food-title">${item.name}</span>
          <span class="food-price">${item.price}</span>
        </div>
      </div>
    `;
}

function seachByTitle() {
  let search = input.value.toLowerCase();

  containerFood.innerHTML = ``;

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].name.toLowerCase();
    if (title.includes(search)) {
      renderItem(cards[i]);
    }
  }
}
function render() {
  containerFood.innerHTML = ``;
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    renderItem(card);
  }
}

sidButton.addEventListener(`click`, function () {
  sidebar.classList.toggle(`hidden`);
});

document.addEventListener(`click`, function (e) {
  if (
    e.target.classList.contains(`card-body`) ||
    e.target.classList.contains(`card`) ||
    e.target.classList.contains(`food-title`)
  ) {
    let cards = e.target.closest(`.card`);
    total.innerHTML = ``;
    sideBarBas.innerHTML = ``;
    cards.classList.toggle(`card-active`);
    let foods = document.querySelectorAll(`.card-active`);
    for (let i = 0; i < foods.length; i++) {
      sideBarBas.innerHTML += `
    <div class="sideList">
      <span class="food-title">${
        foods[i].querySelector(`.food-title`).innerHTML
      }</span>
      <span class="food-price">${Number(
        foods[i].querySelector(`.food-price`).innerHTML
      )}</span>
    </div>
    `;
    }
    for (let i = 0; i < foods.length; i++) {
      total.innerHTML =
        Number(total.innerHTML) +
        Number(foods[i].querySelector(`.food-price`).innerHTML);
    }
  }
});



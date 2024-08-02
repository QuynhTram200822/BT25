let funFactApi = "http://localhost:3000/fun_facts";

function start() {
  getData(renderProducts);
}

start();

// Function get list product
async function getData() {
  try {
    const response = await fetch(funFactApi);

    const json = await response.json();
    renderProducts(json);
  } catch (error) {
    console.error(error.message);
  } finally {
    alert("Render completed!");
  }
}

function renderProducts(products) {
  const listProducts = document.querySelector("#list-funfatcs");
  const displayProducts = products.map(function (funfacts) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4>${funfacts.title}</h4>
    <p>${funfacts.funfact}</p>
    </div>
    <img src="${funfacts.imageURL}" >
  </div>
    `;
  });

  listProducts.innerHTML = displayProducts.join("");
}

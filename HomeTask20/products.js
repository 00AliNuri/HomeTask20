const myDiv = document.querySelectorAll('div');

myDiv.forEach(element => {
  element.addEventListener('click', () => {
    window.open("product.html");
  });
});

const data = [
    {
      id: 1,
      name: "Item",
      price: 1,
      image: "",
    },
  ];
  
  const container = document.querySelector(".container");
  const Btn = document.querySelector(".myBtn");
  
  function productsToMain(){
    Btn.addEventListener("click", () => {
      for (let i = 0; i < data.length; i++) 
      {
        const items = document.createElement("div");
        const nameText = document.createElement("h2");
        const priceText = document.createElement("p");
        const imageD = document.createElement("img");
    
        nameText.textContent = data[i].name;
        priceText.textContent = `Price: $${data[i].price}`;
        imageD.src = data[i].image;
    
        items.appendChild(nameText);
        items.appendChild(priceText);
        items.appendChild(imageD);
    
        container.appendChild(items);
      }
    });
  }

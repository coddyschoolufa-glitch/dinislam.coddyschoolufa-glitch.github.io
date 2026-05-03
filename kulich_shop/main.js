const cart=[];
let total=0;
const cartDiv = document.getElementById("cart");
const cartUl = document.getElementById("cart_list");
const cartBtn = document.getElementById("cart_btn");

function clearCart(){
cart.length = 0;
total = 0;
}

function openANDhide(){
    cartDiv.style.display = cartDiv.style.display === "block"? "none":"block";
}
function DaiDeneg(btn){
 const kartochka = btn.closest(".card");
 const name = kartochka.getAttribute("data-name");
 const price = parseFloat(kartochka.getAttribute("data-price"));
 cart.push({name,price});
}

function renderCart(){
 cartUl.innerHTML = "";
 cart.forEach((item,index)=>{
 total+=item.price;
 const li = document.createElement("li");
 li.textContent = `${item.name} -${item.price}`;
 cartUl.appendChild(li);
 });
    const total_li = document.createElement("li");
    total_li.content = `Итоговая стоимость: ${total}`
    cartUl.appendChild(total_li);
}
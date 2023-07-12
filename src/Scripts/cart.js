function addToCart(item) {

  let cartRaw = getCookie("cart");
  let cart;
  console.log({cart: cartRaw, item: item.id});

  let qty = parseInt(document.getElementById("cart_quantity").value) || 1;

  if (!cartRaw) {
    console.log("Cart is empty.")
    let cart = [{
      id: item.id,
      quantity: qty,
      price: parseInt(item.price.toLowerCase().replaceAll("rs ", "")),
      sum: parseInt(item.price.toLowerCase().replaceAll("rs ", ""))*qty
    }];
    successPopup(`Successfully added ${qty} ${item.id} to cart!`)
    return setCookie("cart", JSON.stringify(cart), 30)
  }

  cart = JSON.parse(cartRaw);
  let existing = cart.find(i => i.id === item.id);

  if (existing) {

    existing.quantity+=qty;
    existing.sum = existing.price*existing.quantity;

  } else {

    cart.push({
      id: item.id,
      quantity: qty,
      price: parseInt(item.price.toLowerCase().replaceAll("rs ", "")),
      sum: parseInt(item.price.toLowerCase().replaceAll("rs ", ""))*qty
    })

  }

  successPopup(`Successfully added ${qty} ${item.id} to cart!`)

  return setCookie("cart", JSON.stringify(cart), 30)

}

function successPopup(message) {

  let msg = document.createElement("div")
  msg.setAttribute("class", "success");
  msg.setAttribute("id", "success_popup")
  msg.innerText = message;
  document.getElementsByClassName("App")[0].appendChild(msg);

  setTimeout(() => {document.getElementById("success_popup").remove()}  , 3*1000)
}


function addToCart2(item) {

  let cart = getCookie("cart");
  console.log({cart: cart, item: item.id})

  if (cart.includes(item.id))  return console.log("Item already in cart.")

  if (!cart) {
    console.log("Cart is empty")
    cart = `${item.id}:${item.price.toLowerCase().replaceAll("rs ", "")}`;
    return setCookie("cart", cart, 30);
  }

  cart += `,${item.id}:${item.price.toLowerCase().replaceAll("rs ", "")}`

  console.log(cart)

  setCookie("cart", cart, 30);

}

function setCookie(cname, cvalue, exdays) {

  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname) {

  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";

}

function removeFromCart(id) {

  const cart = JSON.parse(getCookie("cart"));

  console.log(cart);

  const index = cart.findIndex(i => i.id.toLowerCase() === id.toLowerCase());
  if (index > -1) { // only splice array when item is found
    cart.splice(index, 1); // 2nd parameter means remove one item only
  }

  console.log(cart);

  successPopup(`Removed ${id} from cart.`)

  setCookie("cart", JSON.stringify(cart), 30);
  setTimeout(() => {window.location.reload()}, 5000)
}

function checkout() {
  let c = getCookie("cart");
  if (!c) return 
  setCookie("cart", JSON.stringify({}), 0)
  successPopup("Your items will be delivered to your adddress within 5 business days.");
  setTimeout(() => {window.location.reload()}, 5000)
}

export {
  addToCart,
  removeFromCart,
  checkout,
  setCookie,
  getCookie
}
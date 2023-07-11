function addToCart(item) {

  let cartRaw = getCookie("cart");
  let cart;
  console.log({cart: cartRaw, item: item.id})

  if (!cartRaw) {
    console.log("Cart is empty.")
    let cart = [{
      id: item.id,
      quantity: 1,
      price: parseInt(item.price.toLowerCase().replaceAll("rs ", ""))
    }]
    return setCookie("cart", JSON.stringify(cart), 30)
  }

  cart = JSON.parse(cartRaw);
  let existing = cart.find(i => i.id === item.id);

  if (existing) {

    existing.quantity++;
    existing.sum = existing.price*existing.quantity;

  } else {

    cart.push({
      id: item.id,
      quantity: 1,
      price: parseInt(item.price.toLowerCase().replaceAll("rs ", "")),
      sum: parseInt(item.price.toLowerCase().replaceAll("rs ", ""))
    })

  }

  return setCookie("cart", JSON.stringify(cart), 30)

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

export {
  addToCart,
  setCookie,
  getCookie
}
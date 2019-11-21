var productLink = document.querySelectorAll(".product__link");
var changeImgProduct = document.querySelectorAll(".change-img-js");
var titleWatch = document.querySelector('.js-title');
var itemText = document.querySelector(".item-text")
var itemPrice = document.querySelector(".item_price")
var gender = document.querySelector(".gender")

if (productLink[0]) {
    for (var i = 0; i < productLink.length; i++) {
        productLink[i].addEventListener('click', (e) => {
            localStorage.setItem("src", `i${e.target.parentElement.children[0].getAttribute("src")}`)
            localStorage.setItem("title", `${e.target.parentElement.nextElementSibling.children[0].innerText}`)
            localStorage.setItem("text", `${e.target.parentElement.nextElementSibling.children[1].innerText}`)
            localStorage.setItem("price", `${e.target.parentElement.nextElementSibling.children[3].children[1].innerText}`)
            localStorage.setItem("gender", `${e.target.parentElement.nextElementSibling.children[4].innerText}`)
        })
    }
}
if (changeImgProduct[0]) {
    changeImgProduct[0].setAttribute("src", `${localStorage.getItem("src")}`)
    titleWatch.innerText = localStorage.getItem("title")
    itemText.innerText = localStorage.getItem("text")
    itemPrice.innerText = localStorage.getItem("price")
    gender.innerText = localStorage.getItem("gender")
}
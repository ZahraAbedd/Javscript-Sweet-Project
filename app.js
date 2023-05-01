const scroll1 = document.querySelector(".scroll-top")
const input = document.querySelector(".search-item")
const nameProducts = document.querySelectorAll(".name")
const buttons = document.querySelectorAll(".buttons button")
const buttonBox = document.querySelector(".box-buy")
const buyBox = document.querySelector(".box")
const list = document.querySelector(".box")
const iconeShops = document.querySelectorAll(".item-icone")
const totalCost = document.querySelector(".total-p")
let count = document.getElementById("item-count")
let itemTotal = document.querySelector(".item-total")
console.log(iconeShops)

buttonBox.addEventListener("click",e=>{
    buyBox.classList.toggle("show-box-buy")
})


iconeShops.forEach(item=>{
    item.addEventListener("click",e=>{
        // console.log(e.target.parentElement)
        // console.log(e.target)
        if(e.target.parentElement.classList.contains("item-icone")){
            //the path of img
            let fullPath = e.target.parentElement.previousElementSibling.src;
            console.log(fullPath)
            let pos = fullPath.indexOf('img') + 3;
            console.log(pos)
            let partPath = fullPath.slice(pos);
            console.log(partPath)
            const element = {};
            element.img = `img${partPath}`;
            console.log(element)
            // console.log(e.target.parentElement.parentElement.nextElementSibling.children[0])
            let name = e.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
            console.log(name)
            element.name = name;

            let price = e.target.parentElement.parentElement.nextElementSibling.children[1].textContent;
            console.log(price)
            let finalPrice = price.slice(1).trim();
            console.log(finalPrice)
            price = finalPrice
            element.price = price;
            console.log(element)
            const cartItem = document.createElement("li")
            cartItem.classList.add("item")

            cartItem.innerHTML = `
            <img src="${element.img}" alt="">
            <div class="price">
                <p>${element.name}</p>
                <p>$<span class="cart-item-price">${element.price}</span></p>
            </div>
            <i class="fas fa-trash"></i>`;
            
            list.insertBefore(cartItem,totalCost)
            alert("item added successfully")

            showTotals();

        }
    })
})


function showTotals(){
    const total = []
    const items = document.querySelectorAll(".cart-item-price")
    items.forEach(item=>{
        total.push(parseFloat(item.textContent))
    })
    const totalMoney = total.reduce(function(total,item){
        total+=item
        return total
    },0)
    const finalMoney = totalMoney.toFixed(2);
    // console.log(count.textContent)
   count.textContent =  total.length;
    itemTotal.textContent = finalMoney;
    document.querySelector(".total-price").innerText = finalMoney

}
// buttons.forEach(item=>{
//     item.addEventListener("click",e=>{
//         input.value = ""
//         if(document.querySelector("#empty")){
//             document.querySelector("#empty").remove()
//         }
//         if(e.target.classList.contains("all")){
//             nameProducts.forEach(element=>{
//                 element.closest(".box").style.display = "block"
//             })
//         }else if(e.target.classList.contains("cake")){
//             nameProducts.forEach(element=>{
//                if(element.textContent.toLowerCase().includes("cake")){
//                     element.closest(".box").style.display = "block"
//                 }else{
//                     element.closest(".box").style.display = "none"
//                 }
//             })
//         }else if(e.target.classList.contains("cup")){
//             nameProducts.forEach(element=>{
//                 if(element.textContent.toLowerCase().includes("cup")){
//                     element.closest(".box").style.display = "block"
//                 }else{
//                     element.closest(".box").style.display = "none"
//                 }
//             })
//         }else if(e.target.classList.contains("sweet")){
//             nameProducts.forEach(element=>{
//                 if(element.textContent.includes("sweet")){
//                     element.closest(".box").style.display = "block"
//                 }else{
//                     element.closest(".box").style.display = "none"
//                 }
//             })
//         }else{
//             nameProducts.forEach(element=>{
//                 if(element.textContent.toLowerCase().includes("doughnut")){
//                     element.closest(".box").style.display = "block";

//                 }else{
//                     element.closest(".box").style.display = "none"
//                 }
//             })
//         }
//     })
// })

const boxs = document.querySelectorAll(".box")
buttons.forEach((button)=>{
    button.addEventListener("click",e=>{
        const filter = e.target.dataset.filter
        boxs.forEach(item=>{
            if(filter === "all"){
                item.style.display = "block"
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block"
                }else{
                    item.style.display = "none"
                }
            }
        })

    })
})
let msg = document.createElement("p")
input.addEventListener("input",e=>{
    flag = false;
    let boxContainer = document.querySelector(".store .box-container")
       let container =  document.querySelectorAll(".store .box-container .box");
        container.forEach(element=>{
            if(element.style.display === "none"){
                flag = true
            }
            if(flag){
                msg.textContent = "There is Any Item With this characteric"
                msg.style.margin = "30px"
                msg.id = "empty"
                boxContainer.appendChild(msg)
            }
        })
        nameProducts.forEach(item=>{
        if(!item.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                item.closest(".box").style.display = "none"
        }else{
            item.closest(".box").style.display = "block"
            flag=false
        }
        })
        if(flag == false){
                if(document.querySelector("#empty")){
                    document.querySelector("#empty").remove()
        }
        }
})

document.addEventListener("scroll",e=>{
    scrollValue = window.scrollY;
    if(scrollValue < 197){
        scroll1.classList.remove("show")
    }
    if(scrollValue >= 197){
        scroll1.classList.add("show")
    }
})
scroll1.addEventListener("click",e=>{

})




const imgs= document.querySelectorAll(".img-container img")
const leftBtn = document.querySelector(".btnLeft")
const rightBtn = document.querySelector(".btnRight")
const Close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const img = document.querySelector(".modal img")

imgs.forEach(element=>{
    element.addEventListener(("click"),e=>{
        // console.log(e.target.getAttribute("src"))
       img.src = `${e.target.getAttribute("src")}`
        modal.classList.add("show")
    })
})

let products = ["cake-1","cake-2","cake-3","cupcake-1","cupcake-2","cupcake-3","doughnut-1","doughnut-2","doughnut-3","sweets-1","sweets-2","sweets-3"]

index=0
rightBtn.addEventListener("click",e=>{
    console.log(index)
    if(index === products.length-1){
        index=0
        img.src = `./img/${products[index]}.jpeg`
    }else{
        index+=1
        img.src = `./img/${products[index]}.jpeg`
    }
})

leftBtn.addEventListener("click",item=>{
    console.log("yes")
    if(index === 0){
        index = products.length-1
        img.src = `./img/${products[index]}.jpeg`
    }else{
        index-=1
       img.src = `./img/${products[index]}.jpeg`
    }
})

Close.addEventListener("click",e=>{
    modal.classList.remove("show")
})
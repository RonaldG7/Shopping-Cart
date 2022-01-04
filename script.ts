interface shopItems {
    name: string,
    photo: string,
    weight: number,
    price: number,
    category: string
}

const items: shopItems[] = [
    {
        name: "Milk",
        photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872",
        weight: 0.7,
        price: 2,
        category: "food"
    },
    {
        name: "Bread",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        weight: 0.5,
        price: 3,
        category: "food"
    },
    {
        name: "Meat",
        photo: "https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/125:94/w_2393,h_1800,c_limit/meat-80049790.jpg",
        weight: 2.5,
        price: 4.50,
        category: "food"
    },
    {
        name: "Camera",
        photo: "http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c",
        weight: 5,
        price: 200,
        category: "electronics"
    },
    {
        name: "Screen",
        photo: "https://lh3.googleusercontent.com/proxy/wl4THlWX1WeI7MVeP2X0DKLUE7NZr6fdm4WQ32TDzYefkQ67htVue1e-F_RKzSA8oTLNNfsBqGnUSbfeBip4F09i-PnAIyxMCd-l-zgh9ZNxSqcF20aBf_0BbdQ",
        weight: 8,
        price: 150,
        category: "electronics"
    },
    {
        name: "Phone",
        photo: "https://i5.walmartimages.com/asr/10accd37-b241-4d55-b39d-2417f2f80f74.dd8421d47ac8c8517d0b81fe716760b2.jpeg",
        weight: 0.5,
        price: 400,
        category: "electronics"
    },
    {
        name: "Chair",
        photo: "https://www.ikea.com/kr/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s",
        weight: 4,
        price: 20,
        category: "furniture"
    },
    {
        name: "Sofa",
        photo: "https://cdn.shopify.com/s/files/1/0056/0912/8000/products/Sofa_lova_Svan_1800x1800.jpg?v=1583269013",
        weight: 60,
        price: 200,
        category: "furniture"
    },
    {
        name: "Lamp",
        photo: "https://greenice.com/57848/a.jpg",
        weight: 4,
        price: 80,
        category: "furniture"
    },
]

const shopItems = document.querySelector(".shopItems")!
const inventoryItems = document.querySelector(".inventoryItems")!
const money = document.querySelector(".money")!
const weightTitle = document.querySelector(".weightTitle")!
let moneyCount: number = 200
let weightTotal: number = 30

///////// creates list of items /////////

function shopItemsList(obj: shopItems[]): void {
    for (const shopItem of obj) {
        const item = document.createElement("div")
        shopItems.appendChild(item)
        item.classList.add("item")
        const img = document.createElement("img")
        item.appendChild(img)
        img.src = shopItem.photo
        const name = document.createElement("p")
        item.appendChild(name)
        name.innerText = shopItem.name
        const weight = document.createElement("p")
        item.appendChild(weight)
        weight.innerText = `Weight: ${shopItem.weight}`
        const price = document.createElement("p")
        item.appendChild(price)
        price.innerText = `Price: ${shopItem.price}`
        const category = document.createElement("p")
        item.appendChild(category)
        category.innerText = shopItem.category
        item.onclick = () => {
            if (moneyCount >= 0 && moneyCount >= shopItem.price && weightTotal >= 0 && weightTotal >= shopItem.weight) {
                moneyCount -= shopItem.price
                weightTotal -= shopItem.weight
                inventoryItems.appendChild(item.cloneNode(true))
                money.innerHTML = `Money: ${moneyCount}`
                weightTitle.innerHTML = `Weight Limit: ${weightTotal}`
            }
        }
    }
}

shopItemsList(items)

////// filter //////

const foodFilter: HTMLButtonElement = document.querySelector(".food")!
const electronicsFilter: HTMLButtonElement = document.querySelector(".electronics")!
const furnitureFilter: HTMLButtonElement = document.querySelector(".furniture")!
const showAllFilter: HTMLButtonElement = document.querySelector(".showAll")!

foodFilter.onclick = () => {
    shopItems.innerHTML = ""
    for (const i in items) {
        if (items[i].category === "food") {
            const arr = []
            arr.push(items[i])
            shopItemsList(arr)
        }
    }
}

electronicsFilter.onclick = () => {
    shopItems.innerHTML = ""
    for (const i in items) {
        if (items[i].category === "electronics") {
            const arr = []
            arr.push(items[i])
            shopItemsList(arr)
        }
    }
}

furnitureFilter.onclick = () => {
    shopItems.innerHTML = ""
    for (const i in items) {
        if (items[i].category === "furniture") {
            const arr = []
            arr.push(items[i])
            shopItemsList(arr)
        }
    }
}

showAllFilter.onclick = () => {
    shopItems.innerHTML = ""
    shopItemsList(items)
}

////////// modal ///////////

const modal = document.getElementById("myModal")!
const addProductBtn: HTMLButtonElement = document.querySelector(".addProduct")!
const span = document.getElementsByClassName("close")[0]!

addProductBtn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/////////// add item to shop //////////

const input = document.querySelectorAll("input")
const select = document.querySelector("select")!
const submit = document.querySelector("button")!

submit.onclick = () => {
    if (input[0].value !== "" && input[1].value !== "" && input[2].value !== "" && input[3].value !== "") {
        items.push({
            name: input[0].value,
            photo: input[1].value,
            weight: Number(input[2].value),
            price: Number(input[3].value),
            category: select.value
        })
        shopItems.innerHTML = ""
        shopItemsList(items)
    }
}



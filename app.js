
alert("Faqat biita telefon sotib ololasiz bazi bir xatoliklar tufayli ;)")

const elList = document.querySelector(".list");

const technics = [
    {
        name: "Apple Iphone 14 Plus",
        price : 800,
        image : `./imgs/14.jpg`,
        memory : `128, 256, 1024/ GB`
    },
    {
        name: "Apple Iphone 14 Max",
        price : 900,
        image : `./imgs/14.jpg`,
        memory : `128, 256, 1024/ GB`
    },
    {
        name: "Apple Iphone 14 Pro",
        price : 1100,
        image : `./imgs/14.jpg`,
        memory : `128, 256, 1024/ GB`
    },
    {
        name: "Apple Iphone 14 Pro Max",
        price : 1200,
        image : `./imgs/14.jpg`,
        memory : `128, 256, 1024/ GB`
    },
 
];

const sortTechnics = technics.sort((a,b) => {
    if(a.name < b.name) return -1;
    return 1;
});


for(let phones of technics){
    let elItem = document.createElement("li"),
        elImg = document.createElement("img"),
        elTitle = document.createElement("strong"),
        elDiv = document.createElement("div"),
        elPrice = document.createElement("p"),
        elInfo = document.createElement("p"),
        elBtn = document.createElement("button");
      

    elItem.classList.add("item");     
    elImg.classList.add("img");     
    elDiv.classList.add("info");     
    
    elBtn.textContent = "Buy";
    elBtn.classList.add("btn");

    elTitle = phones.name;
    elPrice.textContent = `Price of this phone : $ ${phones.price}`;
    elInfo.textContent = `Memory of this phone : ${phones.memory}`;
    elImg.setAttribute(`src`, phones.image);
    elItem.append(elImg,elInfo,elPrice,elBtn);
    elList.append(elItem);
    // elCost.textContent = 0;


    let elCost = document.querySelector(".cost");
    let cost = 0;
    cost += phones.price;
    elBtn.addEventListener("click", () => {
        elCost.textContent = cost + `$ your payment`;
        });

    
};
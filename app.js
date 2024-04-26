document.getElementById('cart').addEventListener('click', () => {
    document.getElementById('cart_bx').classList.toggle('cart_bx_active')
})



let card_count = 0;
let price_add = 0;

let addcard = () => {
    // Create a Card 
    let card = document.createElement('div');
    card.className = 'crd';
    card.id = `card${card_count}`;


    // card IneerHTML 
    card.innerHTML = `
    <div class="img_title">
        <img src="${document.getElementsByClassName('main_img')[0].src}" alt="">
        <div class="title_price">
            <h5>${document.getElementsByClassName('coffee_title')[0].innerText}</h5>
            <h6 title="${document.getElementsByClassName('coffee_price')[0].title}">$${document.getElementsByClassName('coffee_price')[0].title}</h6>
        </div>
    </div>
    `;


    // create remove button 
    let removeBtn = document.createElement('i');
    removeBtn.className = 'bi bi-x';
    removeBtn.onclick = () => {
        removeCard(card.id);
    }
    card.appendChild(removeBtn);


    document.getElementsByClassName('coffee_cards')[0].appendChild(card);
    card_count++;
    price_add += +document.getElementsByClassName('coffee_price')[0].title;
    document.getElementById('total').innerText = '$'+price_add;
    
    
    function  removeCard(cardId) {
        let card = document.getElementById(cardId);
        if (card) {
            card.remove();
            price_add -= +card.getElementsByTagName('h6')[0].title;
            document.getElementById('total').innerText = '$'+price_add;
        }

    }
}


document.getElementById('add_button').addEventListener('click', () => {
    addcard();
})



let coffee = [
    {
        name:"Simple Coffee",
        price:"9",
        img:"img/coffee_cup.png"
    },
    {
        name:"Cappuccino",
        price:"16",
        img:"img/cappuccino.png"
    },
    {
        name:"Cappuccino 2",
        price:"19",
        img:"img/coffee_cup3.png"
    }
];


let next_back_count = 0;

let pagi_fun = () => {
    Array.from(document.getElementsByClassName('pagi_btn')).forEach((el,i) => {
        el.style.width = "10px";
        el.style.height = "10px";
    })
}

document.getElementById('next').addEventListener('click', () => {
    if (coffee.length-2 < next_back_count) {
        next_back_count = 0;
    } else {
        next_back_count++;
    }

    document.getElementsByClassName('main_img')[0].src = coffee[next_back_count].img;
    document.getElementsByClassName('coffee_title')[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName('coffee_price')[0].innerText = '$'+coffee[next_back_count].price;
    document.getElementsByClassName('coffee_price')[0].title = coffee[next_back_count].price;
    document.getElementById('count').innerText = next_back_count+1;
    pagi_fun();
    document.getElementsByClassName('pagi_btn')[next_back_count].style.width = "15px";
    document.getElementsByClassName('pagi_btn')[next_back_count].style.height = "15px";

})


document.getElementById('back').addEventListener('click', () => {
    if (0 >= next_back_count) {
        next_back_count = coffee.length-1;
    } else {
        next_back_count--;
    }

    document.getElementsByClassName('main_img')[0].src = coffee[next_back_count].img;
    document.getElementsByClassName('coffee_title')[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName('coffee_price')[0].innerText = '$'+coffee[next_back_count].price;
    document.getElementsByClassName('coffee_price')[0].title = coffee[next_back_count].price;
    document.getElementById('count').innerText = next_back_count+1;
    pagi_fun();
    document.getElementsByClassName('pagi_btn')[next_back_count].style.width = "15px";
    document.getElementsByClassName('pagi_btn')[next_back_count].style.height = "15px";

})
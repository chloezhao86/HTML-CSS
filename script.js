const storeSection = document.querySelector('.store');
 

const storeItems = [
    {
        id:1,
        title:'Nike Air Force',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Air%20Force%201%20'07.png?raw=true"
    },
    {
        id:2,
        title:'Nike Dunk Low',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Dunk%20Low.png?raw=true"
    },
    {
        id:3,
        title:'Nike Blazer Mid \'77',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Blazer%20Mid%20'77.png?raw=true"
    },
    {
        id:4,
        title:'Nike Free Metcon 5',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Free%20Metcon%205.png?raw=true"
    },
    {
        id:5,
        title:'Nike Streakfly',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Streakfly.png?raw=true"
    },
    {
        id:6,
        title:'ike Vaporfly 3',
        price:160,
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Vaporfly%203.png?raw=true"
    }
]

const storeEl = storeItems.map(storeItem =>
    `<div class='item'>
     <img src=${storeItem.imageUrl} alt='Nike Air Force' />
     <h4>${storeItem.title}</h4>
     <p>$${storeItem.price}</p>
     <button>Add to Cart</button>
     </div>
    `
).join('');

console.log(storeEl);


storeSection.innerHTML = storeEl;


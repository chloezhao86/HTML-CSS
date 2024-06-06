const storeSection = document.querySelector('.store');

const storeItems = [
    {
        id:1,
        title:'Nike Air Force',
        price:260,
        size:7,
        color:'white',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Air%20Force%201%20'07.png?raw=true"
    },
    {
        id:2,
        title:'Nike Dunk Low',
        price:150,
        size:8,
        color:'white/black',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Dunk%20Low.png?raw=true"
    },
    {
        id:3,
        title:'Nike Blazer Mid \'77',
        price:190,
        size:8,
        color:'white/black',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Blazer%20Mid%20'77.png?raw=true"
    },
    {
        id:4,
        title:'Nike Free Metcon 5',
        price:170,
        size:7.5,
        color:'white/black',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Free%20Metcon%205.png?raw=true"
    },
    {
        id:5,
        title:'Nike Streakfly',
        price:260,
        size:7.5,
        color:'white/black',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Streakfly.png?raw=true"
    },
    {
        id:6,
        title:'ike Vaporfly 3',
        price:160,
        size:7,
        color:'white',
        imageUrl:"https://github.com/chloezhao86/WAY-SHOES/blob/main/images/Nike%20Vaporfly%203.png?raw=true"
    }
]

const storeEl = storeItems.map(storeItem =>
    `<div class='item'>
     <img src=${storeItem.imageUrl} alt='Nike Air Force' />
     <h4>${storeItem.title}</h4>
     <h5>Size:${storeItem.size}</h5>
     <h5>Color:${storeItem.color}<h5>
     <p>$${storeItem.price}</p>
     <button id='add-to-cart-${storeItem.id}'>Add to Cart</button>
     </div>
    `
).join('');

console.log(storeEl);


storeSection.innerHTML = storeEl;

storeItems.forEach((storeItem, index) => {
    const button = document.querySelector(`#add-to-cart-${storeItem.id}`);
    button.addEventListener('click', () => {
        const totalCount = handleAddToCart(storeItem);
        displayCountInCart(totalCount)
    });
});

function displayCountInCart(totalCount){
    document.querySelector('#cart-count').textContent = totalCount;
    document.querySelector('.cart-badge').style.display = 'inline-block'
}

function handleAddToCart(storeItem){
    let previousStoredItems = JSON.parse(localStorage.getItem('addToCartItems')) || {};

    if(previousStoredItems[storeItem.id]) {
        previousStoredItems[storeItem.id].count += 1;
    } else {
        previousStoredItems[storeItem.id] = {...storeItem, count: 1};
    }
    localStorage.setItem('addToCartItems', JSON.stringify(previousStoredItems));
    const totalCount = Object.values(previousStoredItems).reduce((previousValue, currentValue, currentIndex, array)=>{
        return previousValue+currentValue.count
    },0);
    return totalCount;
}

document.addEventListener('DOMContentLoaded', () => {
    // Display the current date and time
    function displayDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('current-date-time').textContent = dateTimeString;
    }
    setInterval(displayDateTime, 1000); // Update every second

    // Fetch and display data from the API
    fetch('https://onlineprojectsgit.github.io/API/WDEndpoint.json')
        .then(response => response.json())
        .then(data => {
            const {End,Name, Start, cohort, id, instructor, students} = data.info;
            let result = `
            <h2>Cohort Information</h2>
            <p><strong>Course Name:</strong> ${Name}</p>
            <p><strong>Course ID:</strong> ${id}</p>
            <p><strong>Cohort Number:</strong> ${cohort}</p>
            <p><strong>Start Date:</strong> ${Start}</p>
            <p><strong>End Date:</strong> ${End}</p>
            <h3>Instructor Information</h3>
            <p><strong>Name:</strong> ${instructor.name}</p>
            <p><strong>Position:</strong> ${instructor.position}</p>
            <p><strong>Number of Cohorts:</strong> ${instructor.cohorts}</p>
            <h3>Students</h3>
            <ul>
        `;

            students.forEach(student => {
                result += `<li>${student}</li>`;
            });

            result += `</ul>`;
            document.getElementById('api-data').innerHTML = result;
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
            document.getElementById('api-data').textContent = 'Failed to load data.';
        });
})

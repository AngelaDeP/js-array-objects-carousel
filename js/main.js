const items = [
    {
        photo: 'img/01.jpg',
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    {
        photo: 'img/02.jpg',
        title: "Svizzera",
        text: "Lorem ipsum."
    },
    {
        photo: 'img/03.jpg',
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        photo: 'img/04.jpg',
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    },
    {
        photo: 'img/05.jpg',
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }
];

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let item = '';
let thumb = '';
let active = 1;

for (let key in items) {

    
    let itemsObject = items[key];
    console.log(itemsObject);

        item += `
            <div class="item">
                <img src="${itemsObject.photo}" alt="">
                <div class="text">
                    <h3>${itemsObject.title}</h3>
                    <p>${itemsObject.text}</p>
                </div>
            </div>`
        thumb += `
            <div class="thumb">
                <img src="${itemsObject.photo}" alt="">
            </div>` 
    
}


itemsRef.innerHTML = item;
console.log(document.getElementsByClassName('item'));
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {                                                                   
        active = items.length - 1; 

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } 
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) { 
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});
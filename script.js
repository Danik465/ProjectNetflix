const cardWrapper = document.querySelector('.content-main__cards');
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')


const films = [{
    id: 0,
    title: 'Марсианин',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    link: '/film.html',
    rating: 7.8,
    image: '/images/film-item.png'

},
{
    id: 1,
    title: 'Марсианин 2',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    link: '/film.html',
    rating: 7.8,
    image: '/images/film-item.png'

}, {
    id: 2,
    title: 'Марсианин 3',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    link: '/film.html',
    rating: 7.8,
    image: '/images/film-item.png'

}, {
    id: 3,
    title: 'Марсианин 3',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    link: '/film.html',
    rating: 7.8,
    image: '/images/film-item.png'

}
]

const render = (array) => {

    console.log(array);
    
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend',`
            <a href="${item.link}" class="content-main__cards-item">
                    <img src="${item.image}" alt="film_item">
                    <div class="content-main__cards-item-title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                    <p class="content-main__cards-item-discription">
                    ${item.category}
                    </p>
                    <p class="content-main__cards-item-rating">${item.rating}</p>
                    </div>
            </a>
            `)
        
    })
}


searchBtn.addEventListener('click', ()=>{
    render(films.filter((item)=> item.title.includes(searchInput.value)))
    
    
})





render(films)


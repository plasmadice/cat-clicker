// Updates '.cat' container on page using selectedCat object
const updateCat = (cat) => {

    const name = document.querySelector('.cat-name');
    const clicks = document.querySelector('.cat-clicks');
    const picture = document.querySelector('.cat-picture');

    name.innerHTML = cat.name;
    clicks.innerHTML = `Clicks: ${cat.clicks}`;
    picture.src = `images/cat${cat.img}.jpg`;
}

let selectedCat = {
    name: 'Happy',
    clicks: 0,
    img: 1
}

// Grab Cat List and populate first cat
const catList = document.querySelectorAll('.cats li');

// Event listener for buttons
catList.forEach(item => {
    item.addEventListener('click', () => {
        // update click count of old cat
        document.querySelector(`.${selectedCat.name}`).value = 
            Number(document.querySelector('.cat-clicks')
            .innerHTML.match(/\d/g).join(''));

        // throws info about each button into selectedCat object
        selectedCat.name = item.innerHTML;
        selectedCat.clicks = item.value;
        selectedCat.img = item.id;

        updateCat(selectedCat);
    })
})

// Event listener for clicker
const catImage = document.querySelector('.cat-picture');

catImage.addEventListener('click', () => {
    let clicks = catImage.parentElement.querySelector('.cat-clicks');
    // Filter current count from clicks
    const count = Number(clicks.innerHTML.match(/\d/g).join(''));

    // Update click count of clicked cat
    clicks.innerHTML = `Clicks: ${count + 1}`;
})
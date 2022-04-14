const listCars = [
    { id: 0, price: '8 000', name: 'FORD FIESTA 2015', odometer: 70, body: 'Седан', engine: '1,6', driveUnit: 'Передний', img: './img/cars/fordFiesta.svg' },
    { id: 1, price: '7 500', name: 'CHEVROLET SPARK 2015', odometer: 60, body: 'Хетчбек', engine: '1,2', driveUnit: 'Передний', img: './img/cars/spark.svg' },
    { id: 2, price: '6 500', name: 'DODGE DART 2014', odometer: 60, body: 'Хетчбек', engine: '1,2', driveUnit: 'Передний', img: './img/cars/dodge.svg' },
    { id: 3, price: '9 900', name: 'FIAT 500 2013', odometer: 60, body: 'Хетчбек', engine: '1,2', driveUnit: 'Передний', img: './img/cars/fiat.svg' },
    { id: 4, price: '10 500', name: 'FORD FOCUS 2014', odometer: 60, body: 'Хетчбек', engine: '1,2', driveUnit: 'Передний', img: './img/cars/focus.svg' },
    { id: 5, price: '12 500', name: 'CHEVROLET CRUZE 2014', odometer: 60, body: 'Хетчбек', engine: '1,2', driveUnit: 'Передний', img: './img/cars/cruze2.png' },
]

const cards = document.querySelector('.cards__cars');

const createClass = (arr, cls) => {
    arr.classList.add(cls)
}

const removeClass = (arr, cls) => {
    arr.classList.remove(cls)
}

const getCars = listCars.map(({ id, price, name, odometer, body, engine, driveUnit, img }) => {
    const car = document.createElement('div');
    createClass(car, 'car')

    const carPhoto = document.createElement('img');
    createClass(carPhoto, 'car__photo');
    carPhoto.src = img;

    const carPrice = document.createElement('span');
    createClass(carPrice, 'car__price');
    car.appendChild(carPrice)
    carPrice.textContent = `Цена: ${price}$`;

    const carName = document.createElement('div');
    createClass(carName, 'car__name');
    car.appendChild(carName)
    carName.textContent = name;

    const carDesc = document.createElement('div');
    createClass(carDesc, 'car__desc');
    car.appendChild(carDesc);

    const carDescLeft = document.createElement('div');
    createClass(carDescLeft, 'car__desc-left');
    carDesc.appendChild(carDescLeft);

    const carDescRight = document.createElement('div');
    createClass(carDescRight, 'car__desc-right');
    carDesc.appendChild(carDescRight);

    const descOdometrLeft = document.createElement('p');
    createClass(descOdometrLeft, 'odometr');
    carDescLeft.appendChild(descOdometrLeft)
    descOdometrLeft.textContent = `Одометр:`;

    const descOdometrRight = document.createElement('p');
    createClass(descOdometrRight, 'odomert-right');
    carDescRight.appendChild(descOdometrRight)
    descOdometrRight.textContent = `${odometer}тыс. миль`;

    const descBodyleft = document.createElement('p');
    createClass(descBodyleft, 'body__car');
    carDescLeft.appendChild(descBodyleft);
    descBodyleft.textContent = `Тип кузова:`;

    const descBodyRight = document.createElement('p');
    createClass(descBodyRight, 'body__car-right');
    carDescRight.appendChild(descBodyRight);
    descBodyRight.textContent = body;

    const descEngineLeft = document.createElement('p');
    createClass(descEngineLeft, 'type__engine');
    carDescLeft.appendChild(descEngineLeft);
    descEngineLeft.textContent = `Тип двигателя:`

    const descEngineRight = document.createElement('p');
    createClass(descEngineRight, 'type__engine');
    carDescRight.appendChild(descEngineRight);
    descEngineRight.textContent = engine;

    const descDriveUnitLeft = document.createElement('p');
    createClass(descDriveUnitLeft, 'type__drive-left');
    carDescLeft.appendChild(descDriveUnitLeft);
    descDriveUnitLeft.textContent = `Привод:`;

    const descDriveUnitRight = document.createElement('p');
    createClass(descDriveUnitRight, 'type__drive-right');
    carDescRight.appendChild(descDriveUnitRight);
    descDriveUnitRight.textContent = driveUnit;

    //Modals
    const modalWindow = document.querySelector('.full_info');
    
    //Buttons
    const moreButton = document.createElement('a');
    createClass(moreButton, 'moreButton');
    car.appendChild(moreButton);
    const moreButtonText = document.createElement('p');
    moreButton.appendChild(moreButtonText);
    moreButtonText.textContent = `Подробнее`;
    moreButton.setAttribute('href', `#modal`);
    const getCurrentID = id;

    const closeButton = document.querySelector('.modal__close');
    const closeArea = document.querySelector('.modal__area');

    const modalContent = document.querySelector('.full_info-content');
    const giveContent = document.createElement('div');
    createClass(giveContent, 'full_info-menu');
    modalContent.appendChild(giveContent)
    const setLeftBlock = document.createElement('div');
    createClass(setLeftBlock, 'setLeftBlock');
    giveContent.prepend(setLeftBlock);
    setLeftBlock.textContent = ``


    const fullInfo = document.createElement('div');
    createClass(fullInfo, 'full_info-auto')
    //Modal--END

    const similarButton = document.createElement('button');
    createClass(similarButton, 'similarButton');
    car.appendChild(similarButton);
    similarButton.textContent = `Подобрать похожее`;

    car.appendChild(carPhoto);
    cards.appendChild(car);
})

const setNav = document.querySelector('#set');
const equipmentAvto = document.querySelector('.equipment__avto');

setNav.addEventListener('click', function (e) {
    createClass(equipmentAvto, 'active');
    createClass(setNav, 'active');

    removeClass(techNav, 'active');
    removeClass(specificationsAvto, 'active');

    removeClass(damageAvto, 'active');
    removeClass(damageNav, 'active');
})

const techNav = document.querySelector('#tech');
const specificationsAvto = document.querySelector('.specifications__avto');

techNav.addEventListener('click', function (e) {
    createClass(specificationsAvto, 'active');
    createClass(techNav, 'active');

    removeClass(setNav, 'active');
    removeClass(equipmentAvto, 'active');

    removeClass(damageAvto, 'active');
    removeClass(damageNav, 'active');
})

const damageNav = document.querySelector('#damage');
const damageAvto = document.querySelector('.damage__avto');

damageNav.addEventListener('click', function (e) {
    createClass(damageAvto, 'active');
    createClass(damageNav, 'active');

    removeClass(setNav, 'active');
    removeClass(equipmentAvto, 'active');

    removeClass(techNav, 'active');
    removeClass(specificationsAvto, 'active');
})
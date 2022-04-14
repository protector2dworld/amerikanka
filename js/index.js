const calc = document.querySelector('.calculator');
const openCalc = document.querySelector('#calc__avto');
const closeCalc = document.querySelector('.modal__close');

calc.addEventListener('click', function (e) {
    openCalc.classList.toggle('active');
    document.body.classList.toggle('lock');
    closeCalc.addEventListener('click', function (e) {
        openCalc.classList.remove('active');
        
    })
})

const similarButton = document.querySelector('.similarButton');
const similarModal = document.querySelector('.similarModal');

similarButton.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
  similarModal.classList.toggle('active');
})

if ($verify) {
  header('Location:'.$succes_url);
  echo '<h1 style="color:green;">Поздравляем!Ваш заказ принят!</h1>';
  exit;
}
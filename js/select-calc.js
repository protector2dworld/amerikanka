let select = function () {
    let selectHeader = document.querySelectorAll('.calc-pay-select__header');

    let selectItem =document.querySelectorAll('.calc-pay-select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
           
        
    });

    selectItem.forEach(item=> {
        item.addEventListener('click', selectChose)
            
        
    }); 

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChose() {
        let text = this.innerText,
        select = this.closest('.calc-pay__select'),
        currentText = this.closest('.calc-pay__select').querySelector('.calc-pay-select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }
};

select();
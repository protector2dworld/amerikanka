

const swiper = new Swiper('.swiper', {

    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    
});

var paddingSliderYears = document.getElementById('slider-padding');

noUiSlider.create(paddingSliderYears, {
    start: [2012, 2022],
    //padding: [10, 15], // Or just 10
    connect: true,
    step: 1,
    range: {
        'min': [2012],
        'max': [2022]
    },
    format: {
        from: function(value) {
                return parseInt(value);
            },
        to: function(value) {
                return parseInt(value);
            }
        }
    
});


var paddingSliderPrice = document.getElementById('range-price');

noUiSlider.create(paddingSliderPrice, {
    start: [7000, 100000],
    //padding: [10, 15], // Or just 10
    connect: true,
    step: 1000,
    range: {
        'min': [7000],
        'max': [100000]
    },
        format: wNumb({
            decimals: 0,
            prefix: '$ ',
            thousand: ' ',
        })
    
});

// var sliderFormat = document.getElementById('slider-format');

// noUiSlider.create(sliderFormat, {
//     start: [2012, 2022],
//     step: 1,
//     range: {
//         'min': [0],
//         'max': [2022],
//     },
//     format: wNumb({
//         decimals: 3,
//         thousand: '',
        
//     })
// });

var paddingMinYears = document.getElementById('slider-padding-value-min');
      var paddingMaxYears = document.getElementById('slider-padding-value-max');
      
      paddingSliderYears.noUiSlider.on('update', function (values, handle) {
          if (handle) {
              paddingMaxYears.innerHTML = values[handle];
          } else {
              paddingMinYears.innerHTML = values[handle];
          }
      });

      var paddingMinPrice = document.getElementById('slider-price-value-min');
      var paddingMaxPrice = document.getElementById('slider-price-value-max');
      
      paddingSliderPrice.noUiSlider.on('update', function (values, handle) {
          if (handle) {
            paddingMaxPrice.innerHTML = values[handle];
          } else {
            paddingMinPrice.innerHTML = values[handle];
          }
      });

      
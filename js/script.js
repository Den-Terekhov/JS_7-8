//TABS
$(function() {
  // var $tab_link = $('.tab_link');
  $('.tab_link').hover (
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
  $('.tab_link').on('click', function() {
    if(!$(this).hasClass('active_link')) {
      var i = $(this).index();
      $('.tab_link').removeClass('active_link');
      $('.tab_content').hide().removeClass('active_tab');
      $(this).addClass('active_link');
      $($('.text_content').children('.tab_content')[i]).addClass('active_tab').fadeIn(500);
    }
  })
});


//FORM
$('input').hover (
  function() {
    $(this).siblings('.tooltip').addClass('active_tooltip');
  },
  function() {
    $(this).siblings('.tooltip').removeClass('active_tooltip');
  }
);


$('input').focus(function() {
  $('.tooltip').removeClass('active_tooltip');
  $(this).siblings('.tooltip').addClass('active_tooltip');
});


$('.help').mousedown(function() {
  $(this).addClass('active_button');
});


$('.help').mouseup(function() {
  $(this).removeClass('active_button'); 
  $('.tooltip').addClass('active_tooltip');
})








// (function(){


// var timerOutput = document.createElement('div');
// document.body.appendChild(timerOutput);
// timerOutput.classList.add('wrapper');
// timerOutput.innerHTML = '00:00:00.000';

// var buttons = document.createElement('div');
// document.body.appendChild(buttons);
// buttons.classList.add('buttons');

// var startButton = document.createElement('button');
// startButton.innerHTML = 'Start';
// buttons.appendChild(startButton);
// startButton.addEventListener('click', timerId);

// var splitButton = document.createElement('button');
// splitButton.innerHTML = 'Split';
// buttons.appendChild(splitButton);
// splitButton.addEventListener('click', timerSplit);

// var resetButton = document.createElement('button');
// resetButton.innerHTML = 'Reset';
// buttons.appendChild(resetButton);
// resetButton.addEventListener('click', timerReset);

// var counter = 1;
// var lastStopTime = 0;
// var startTimeStamp;
// var endTimeStamp;
// var timePassed;
// var parseOutputTime;
// var checkStop = 0;
// var hh;
// var mm;
// var ss;
// var ms;
// var stopms;
// var stopss;
// var stopmm;
// var stophh;

// function timerId() { // запуск таймера, добавление и удаление обработчиков событий
//   startButton.removeEventListener('click', timerId);
//   startButton.addEventListener('click', timerStop);
//   startTimeStamp = Date.now();
//   startButton.innerHTML = 'Stop';
//   checkStop = 1;
//   startInterval = setInterval(timerStart, 1);
// }

// function timerStart() { // парсинг и вывод текущего времени на экран
//   endTimeStamp = Date.now();
//   timePassed = endTimeStamp - startTimeStamp + lastStopTime;
//   ms = timePassed % 1000;
//   ss = Math.floor((timePassed / 1000) % 60);
//   mm = Math.floor((timePassed / 60000) % 60);
//   hh = Math.floor((timePassed / 3600000) % 24);
//   timerOutput.innerHTML = ('0' + hh).slice(-2) + ':' + ('0' + mm).slice(-2) + ':' + ('0' + ss).slice(-2) + '.' + ('00' + ms).slice(-3);
// }

// function parseMsTime() { // парсинг и вывод времени по нажатию кнопок Stop и Split
//   stopms = parseOutputTime % 1000;
//   stopss = Math.floor((parseOutputTime / 1000) % 60);
//   stopmm = Math.floor((parseOutputTime / 60000) % 60);
//   stophh = Math.floor((parseOutputTime / 3600000) % 24);
// }

// function timerStop() { //обработка нажатия кнопки Stop
//   clearInterval(startInterval);
//   startButton.removeEventListener('click', timerStop);
//   startButton.addEventListener('click', timerId);
//   startButton.innerHTML = 'Start';

//   parseOutputTime = timePassed - lastStopTime;
//   parseMsTime();

//   var stopTime = document.createElement('div');
//   stopTime.classList.add('timeStamp');
//   stopTime.innerHTML = counter++ + ' Stop: ' + ('0' + stophh).slice(-2) + ':' + ('0' + stopmm).slice(-2) + ':' + ('0' + stopss).slice(-2) + '.' + ('00' + stopms).slice(-3);
//   document.body.appendChild(stopTime);
//   lastStopTime = timePassed;
//   checkStop = 0;
// }

// function timerSplit() { //обработка нажатия кнопки Split
//   if (checkStop === 1) {
//     parseOutputTime = timePassed - lastStopTime;
//     parseMsTime();
//     var splitTime = document.createElement('div');
//     splitTime.classList.add('timeStamp');
//     splitTime.innerHTML = counter++ + ' Split: ' + ('0' + stophh).slice(-2) + ':' + ('0' + stopmm).slice(-2) + ':' + ('0' + stopss).slice(-2) + '.' + ('00' + stopms).slice(-3);
//     document.body.appendChild(splitTime);
//   }
// } 

// function timerReset() { //обработка нажатия кнопки Reset
//   clearInterval(startInterval);
//   startButton.removeEventListener('click', timerStop);
//   startButton.addEventListener('click', timerId);
//   var timeStampsToDelete = document.querySelectorAll('.timeStamp');
//   for (i = 0; i < timeStampsToDelete.length; i++) {
//     document.body.removeChild(timeStampsToDelete[i]);
//   }
//   startButton.innerHTML = 'Start';
//   timerOutput.innerHTML = '00:00:00.000';
//   timePassed = lastStopTime = 0;
//   checkStop = 0;
//   counter = 1;
// }
// })()
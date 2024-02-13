function NextLevel () {
   var arrl = document.getElementById('arrow left');
   var arrr = document.getElementById('arrow right');
   var curr = document.getElementById('current');
   var textArea = document.getElementById('code1');



   arrr.addEventListener("click", function() {
      textArea.value = '';
    if (curr.innerHTML=='1') {
       curr.innerHTML='2';
       func2();
      
       
    }
    else if (curr.innerHTML=='2') {
       curr.innerHTML='3';
       func3();  
      
      
    }
    else if (curr.innerHTML=='3') {
       curr.innerHTML='4';
       func4();

       
    }
    else if (curr.innerHTML=='4') {
       curr.innerHTML='5';
       func5();

    }
    else if (curr.innerHTML=='5') {
      curr.innerHTML='6';
      func6();

   }
   else if (curr.innerHTML=='6') {
      curr.innerHTML='7';
      func7();

   }
   });
   
   arrl.addEventListener("click", function() {
      textArea.value = '';
      if (curr.innerHTML=='7') {
         curr.innerHTML='6';
         func6();
         
      }
      else if (curr.innerHTML=='6') {
         curr.innerHTML='5';
         func5();
         
      }
       else if (curr.innerHTML=='5') {
          curr.innerHTML='4';
          func4();
          
       }
       else if (curr.innerHTML=='4') {
          curr.innerHTML='3';
          func3();
        }
       else if (curr.innerHTML=='3') {
          curr.innerHTML='2';
          func2();


       }
       else if (curr.innerHTML=='2') {
          curr.innerHTML='1';
          func1();
          
       }
      }); 
   }

function func1() {
   //переменные
   var instructions = document.getElementById('instruction');
   var upper = document.getElementById('upper');
   var down = document.getElementById('down');
   let flat = document.getElementById('view');
   
   instructions.innerHTML='<p>Добро пожаловать в Raccoon! Игра, в которой тебе нужно помочь еноту Рикки и его друзьям написать CSS-код! Для начала, давай подключим наш CSS-файл.</p><p> Помоги еноту испечь и украсить торт, используя присвоение свойства CSS файлу HTML с помощью ссылки на внешний ресурс <code><</code>link<code>></code>. Чтобы подключить таблицу стилей CSS, ты должен включить элемент <code><</code>link<code>></code> внутри твоего <code><</code>head<code>></code> следующим образом: </p><ul><code><</code>link rel="stylesheet" href="test.css"<code>></code></ul> </p>где атрибут <code><</code>href<code>></code> - наименование и расположение CSS файла, а атрибут <code><</code>rel<code>></code> - тип загружаемого элемента (таблица стилей CSS).</p> Подключи по очереди CSS-файлы: </p><li>cake1.css<p> </p><li>cake2.css<p> </p><li>cake3.css<p></p>Обрати внимание, что мы уже поставили символы <code><</code> и <code>></code>, тебе осталось только напечатать содержимое.</p>';
   upper.innerHTML="<";
   down.innerHTML=">";
   flat.innerHTML = '<section class ="flat" style ="justify-content:center"><div id="cake"></div> <div id ="raccon1"><div id="talk1"<p>Я пеку торт, чтобы сделать два дела одновременно: насладиться вкусом и поправить свою фигуру</p></div></div> <div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

var rbutton = document.getElementById('verify');    

rbutton.addEventListener("click", function() {
   var allinput = document.getElementById('code1');
   var paint = document.getElementById('cake');
   const value = allinput.value.trim();
   let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
   let popup = document.querySelector('.popup'); // Само окно

   if ((value=="link rel='stylesheet' href='cake1.css'")||(value=='link rel="stylesheet" href="cake1.css"')) {
       paint.style.backgroundImage = 'url("cake1.png")';
       paint.style.height = "300px";       
   }
   else if ((value=="link rel='stylesheet' href='cake2.css'")||(value=='link rel="stylesheet" href="cake2.css"')) {
       paint.style.backgroundImage = 'url("cake2.png")';
       paint.style.height = "175px";
      
   }
   else if ((value=="link rel='stylesheet' href='cake3.css'")||(value=='link rel="stylesheet" href="cake3.css"')) {
       paint.style.backgroundImage = 'url("cake3.png")';
       paint.style.height = "175px";

       popupBg.classList.add('active'); // Добавляем класс 'active' для фона
       popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
       
   }
   else {
     paint.style.backgroundImage = 'url("pngegg.png")';
     paint.style.height = "260px";
   }

}

);

}

function func2() {
   var instructions = document.getElementById('instruction');
   var upper = document.getElementById('upper');
   var down = document.getElementById('down');
   let flat = document.getElementById('view');

  instructions.innerHTML='<p>В этом уроке мы рассмотрим, как использовать тег div и атрибут id для присвоения свойств CSS определенному объекту.</p> <p>Тег div используется для создания блочных элементов на веб-странице. Он позволяет группировать другие элементы внутри себя и применять к ним общие свойства CSS. </p> <p>Атрибут id используется для идентификации конкретного элемента на странице. Он позволяет нам присвоить уникальный идентификатор объекту, который можно использовать для применения свойств CSS только к этому объекту. Синтаксис CSS:</p>#селектор {</p> &nbsp;&nbsp;&nbsp;&nbsp свойство: значение; </br>}</p>Приступим к практике. Наш друг енот Рикки ложится спать. Давай подарим ему новую подушку:</p> <code><</code>body<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp <code><</code>div id="pillow"<code>></code><code><</code>/div<code>></code></p><code><</code>/body<code>></code></p>Теперь расскрась подушку в цвет дивана (#a13e37), используя CSS-синтаксис и свойство background-color.</p>';
  upper.innerHTML="#pillow {";
  down.innerHTML="}";
  flat.innerHTML = '<section class ="flat" style ="justify-content:center"><div id="pillow"></div> <div id ="raccon2"><div id="talk1"<p>Спать 4 часа в сутки несложно. Намного сложнее остальные 20 не спать.</p></div></div><div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

  var ver = document.getElementById('verify');
  ver.addEventListener("mouseup", handleclick2);

}

//<p>Синтаксис CSS:</p>селектор {</p> &nbsp;&nbsp;&nbsp;&nbsp свойство: значение; </p> &nbsp;&nbsp;&nbsp;&nbsp свойство: значение </p>}. </p>Например: #test {</p> &nbsp;&nbsp;&nbsp;&nbsp background-color: green;</p>} </p>- мы присвоили раскрасили фон объекта в зеленый цвет.</p>
function func3() {
  var instructions = document.getElementById('instruction');
   var upper = document.getElementById('upper');
   var down = document.getElementById('down');
   var flat = document.getElementById('view');

  instructions.innerHTML='<p>HTML позволяет нам добавлять стили к тексту на веб-странице. Стили могут включать изменение цвета, размера и шрифта текста, а также добавление подчеркивания, зачеркивания и других эффектов.</p> <p>Для добавления стилей к тексту в HTML мы используем теги <code><</code>span<code>></code> и <code><</code>div<code>></code> с атрибутом style. Тег <code><</code>span<code>></code> используется для стилизации отдельных слов или фраз, а тег <code><</code>div<code>></code> - для стилизации больших блоков текста. Давай добавим фразу в блокнот. Для начала создадим div-элемент в контентной части страницы с текстом: </p> <code><</code>body<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp <code><</code>div id="cookbook"<code>></code>Счастье, это когда хочешь делать то, что тебя заставляют.</p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>/div<code>></code></p><code><</code>/body<code>></code></p>Теперь в CSS-файле мы можем изменить стили нашего текста. <p></p>Помоги еноту Рикки сделать текст видимым (например, красным - red), используя CSS-свойство color.</p>';
  upper.innerHTML="#letter {";    
  down.innerHTML="}";
  flat.innerHTML = '<section class ="flat" style ="justify-content:center"><div id="letter">Счастье, это когда хочешь делать то, что тебя заставляют.</div> <div id ="raccon3"><div id="talk1"<p>Сумасшедший? </p>Нет, я просто креативный!</p></div></div><div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

  var ver = document.getElementById('verify');
  ver.addEventListener("mouseup", handleclick);
}
  function handleclick(e) {
      e.preventDefault();
      var allInputs = document.getElementById('code1'); 
      var inputField = allInputs.value; 
      var el = document.getElementById('letter');
      el.setAttribute('style', inputField); //ввод

      
  let element = document.getElementById("letter");
  let styles = window.getComputedStyle(element);
  let bg = styles.getPropertyValue("color");
  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if (bg=="rgb(255, 0, 0)") {
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }


}
function handleclick2(e) {
  e.preventDefault();
  var allInputs = document.getElementById('code1'); 
  var inputField = allInputs.value; 
  var el = document.getElementById('pillow');
  el.setAttribute('style', inputField); //ввод


  let element = document.getElementById("pillow");
  let styles = window.getComputedStyle(element);
  let bg = styles.getPropertyValue("background-color");
  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if (bg=="rgb(161, 62, 55)") {
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }

}
function func4() {
  //переменные
  var instructions = document.getElementById('instruction');
  var upper = document.getElementById('upper');
  var down = document.getElementById('down');
  var flat = document.getElementById('view');

  instructions.innerHTML='<p>Кнопки - это важный элемент любой веб-страницы, который позволяет пользователю выполнить определенное действие. В HTML и CSS мы можем легко создавать кнопки с помощью тега <code><</code>button<code>></code> и стилей CSS. Пример:</p><code><</code>html<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>head<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<code><</code>link rel="stylesheet" href="style.css"<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>/head<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>body<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<code><</code>button class="button"<code>></code>Поехали<code><</code>/button<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>/body<code>></code></p><code><</code>/html<code>></code></p>В этом примере мы использовали тег <code><</code>button<code>></code> для создания кнопки на нашей странице. Мы также связали нашу страницу с файлом style.css, где мы определили стили для нашей кнопки. </p> Давайте поможем еноту Рики и его друзьями запустить ракету в космос! Для этого сделай курсор в виде руки (CSS-значение pointer) при наведении мыши на кнопку, используя свойство CSS cursor.';
  upper.innerHTML="#button {";
  down.innerHTML="}";
  flat.innerHTML = '<section class ="flat" style ="justify-content:center"><div id="buttonr">GO</div> <div id ="raccon4"><div id="talk1"<p>Бесконечный космос, </p> а нам тесно!</p></div></div><div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

  var ver = document.getElementById('verify');
  ver.addEventListener("mouseup", handleclick3);
}

function handleclick3(e) {
   e.preventDefault();
   var allInputs = document.getElementById('code1'); 
   var inputField = allInputs.value; 
   var el = document.getElementById('buttonr');
   el.setAttribute('style', inputField); //ввод

   let element = document.getElementById("buttonr");
  let styles = window.getComputedStyle(element);
  let bg = styles.getPropertyValue("cursor");
  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if (bg=="pointer") {
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }
 
 }

function func5() {
  //переменные
  var instructions = document.getElementById('instruction');
  var upper = document.getElementById('upper');
  var down = document.getElementById('down');
  var flat = document.getElementById('view');

  instructions.innerHTML='<p>Flexbox - это мощный инструмент в CSS, который позволяет легко и гибко управлять расположением элементов на странице. Он используется для создания адаптивных макетов, которые могут легко изменяться в зависимости от размера экрана или устройства. </p> <p>Давай создадим div-элементы в контентной части страницы html с текстом: </p> <code><</code>body<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp <code><</code>div id="space"<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp <code><</code>div id="rocket"<code>></code><code><</code>/div<code>></code></p>&nbsp;&nbsp;&nbsp;&nbsp<code><</code>/div<code>></code></p><code><</code>/body<code>></code></p>Теперь направь ракету с Рики и его друзьями на Луну, используя CSS-свойство justify-content. Это свойство выравнивает элементы горизонтально, и принимает значения: <br> <ul><li><code>flex-start</code>: элементы выравниваются по левой сторное контейнера </li><li><code>flex-end</code>: элементы выравниваются по правой стороне контейнера</li><li><code>center</code>: элементы расположены по центру</li><li><code>space-between</code>: элементы распологаются равномерно по длине контейнера</li><li><code>space-around</code>: элементы распологаются вдоль оси контейнера c одинаковым пространством вокруг них</li></ul></p>';
  upper.innerHTML="#space {<br>  display: flex;"
  down.innerHTML="}";
  flat.innerHTML = '<section class ="flat5" id="flat5"><div id="rocket"></div><div id="luna"></div><div id ="raccon5"><div id="talk1"<p>Зачем на Марсе ищут воду и кислород? Нефть и газ надо искать!</p></div></div><div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

  var ver = document.getElementById('verify');
  ver.addEventListener("mouseup", handleclick5);
}

function handleclick5(e) {
   e.preventDefault();
   var allInputs = document.getElementById('code1'); 
   var inputField = allInputs.value; 
   var el = document.getElementById('flat5');
   el.setAttribute('style', inputField); //ввод

   let element = document.getElementById("flat5");
  let styles = window.getComputedStyle(element);
  let bg = styles.getPropertyValue("justify-content");
  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if (bg=="flex-end") {
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }
 
 }

 function func6() {
   //переменные
   var instructions = document.getElementById('instruction');
   var upper = document.getElementById('upper');
   var down = document.getElementById('down');
   var flat = document.getElementById('view');
 
   instructions.innerHTML='<p>Помоги еноту расположить куски тортика на тарелки, используя flex-direction. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения: <br> <ul><li><code>row:</code>: элементы размещаются по направлению текста </li><li><code>row-reverse</code>: элементы отображаются в обратном порядке к направлению текста</li><li><code>column</code>: элементы распологаются сверху вниз </li><li><code>column-reverse</code>: элементы распологаются снизу вверх</li></ul></p>';
   upper.innerHTML="#table {<br>  display: flex;"
   down.innerHTML="}";
   flat.innerHTML = '<section class ="flat5" id="flat5"><div id="cakes"></div><div id="cakes2"></div><div id="cakes3"></div><div id="plate"></div><div id="plate2"></div><div id="plate3"></div><div id ="raccon6"><div id="talk1"<p>Никогда не говорите "Нет" торту!</p></div></div><div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';
 
   var ver = document.getElementById('verify');
   ver.addEventListener("mouseup", handleclick6);
 }

 function handleclick6(e) {
   e.preventDefault();
   var allInputs = document.getElementById('code1'); 
   var inputField = allInputs.value; 
   var el = document.getElementById('flat5');
   el.setAttribute('style', inputField); //ввод

  let element = document.getElementById("flat5");
  let styles = window.getComputedStyle(element);
  let bg = styles.getPropertyValue("flex-direction");

  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if (bg=="column") {
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна

       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }
 
 }


 function func7() {
   //переменные
   var instructions = document.getElementById('instruction');
   var upper = document.getElementById('upper');
   var down = document.getElementById('down');
   let flat = document.getElementById('view');
   
   instructions.innerHTML='<p>Давай поможем еноту выбрать фрукты, добавив в структуру html чек-бокс.</p><p> Чек-бокс - это элемент формы в HTML, который позволяет пользователю выбрать один или несколько вариантов ответа.</p> Флажок создается следующим образом: <p> <code><</code>input type="checkbox" атрибуты<code>></code> </p> Создай чек-боксы с атрибутом name равным "apple", по аналогии с чек-боксами "pear" и "peach"</p>';
   upper.innerHTML='<code><</code>body<code>></code><br>&nbsp;&nbsp;&nbsp<code><</code>input type="checkbox" name="pear"<code>></code><br>&nbsp;&nbsp;&nbsp<code><</code>input type="checkbox" name="peach"<code>></code>';
   down.innerHTML="<code><</code>/body<code>></code>";
   flat.innerHTML = '<section class ="flat7" style ="justify-content:center"><div id="pear"></div><div id="peach"></div><div id="apple"></div><input type="checkbox" name="pearc" checked="checked"><input type="checkbox" name="peachc" checked="checked"><input type="checkbox" name="applec" id = "applec"  style="opacity:0"> <div id ="raccon7"><div id="talk1"<p>Надкусив яблоко, всегда приятнее увидеть в нем целого червяка, чем его половинку!</p></div></div> <div class="popup__bg"><form class="popup">Поздравляю! Ты справился с заданием! Можешь перейти на следующий уровень!</form></div></section>';

var ver = document.getElementById('verify');  
ver.addEventListener("mouseup", handleclick7);  
}

function handleclick7(e) {
   e.preventDefault();
   var allInputs = document.getElementById('code1'); 
   var inputField = allInputs.value; 
   var el = document.getElementById('applec');

  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно

  if ((inputField==="<input type='checkbox' name='apple'>")||(inputField==='<input type="checkbox" name="apple">')){
   el.style = 'opacity:1';
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна
   
       document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
         if(e.target === popupBg) { // Если цель клика - фот, то:
             popupBg.classList.remove('active'); // Убираем активный класс с фона
             popup.classList.remove('active'); // И с окна
         }
     });
  }
  else {
   el.style = 'opacity:0';
  }
 }
   
   
   
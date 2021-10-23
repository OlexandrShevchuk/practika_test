function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});
;//Правильне додавання картинок вебП і тд
//Функція, яка додає текст в задане місце(найкраще працює по ід)
function addText(beforeText, valueText, inerText, arterText) {
    if (typeof inerText.innerText !== 'undefined') {
        // IE8-
        inerText.innerText = beforeText + valueText.value + arterText;
    } else {
        // Нормальные браузеры
        inerText.textContent = valueText.value;
    }
}
//Функція, яка додає текст в задане місце(найкраще працює по класнейму)
function addTextofClassname(beforeText, valueText, inerText, arterText) {
    for (let i = 0; i < inerText.length; i++) {
        if (typeof inerText[i].innerText !== 'undefined') {
            // IE8-
            inerText[i].innerText = beforeText + valueText.value + arterText;
        } else {
            // Нормальные браузеры
            inerText[i].textContent = valueText.value;
        }

    }
}
//Функція, яка додає текст в задане місце(без значення value у функції)
function addTextNoneValue(beforeText, valueText, inerText, arterText) {
    if (typeof inerText.innerText !== 'undefined') {
        // IE8-
        inerText.innerText = beforeText + valueText + arterText;
    } else {
        // Нормальные браузеры
        inerText.textContent = valueText;
    }
}
//Функція, яка додає та віднімає класи(використовується для відкриття/схову полів з університетом,...)
function buttonCheck(idElement, nameclass) {
    let idE = document.getElementById(idElement);
    if (idE.classList.contains(nameclass)) {
        idE.classList.remove(nameclass);
    } else {
        idE.classList.add(nameclass);
    }
}
//Сповіщення про доопрацювання функції
function doop(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    alert('Ця функція ще допрацьовується))')
}
//повертає массив з перемішаними числами
function randomNumber(array) {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}
//Функція для модальних вікон
function modalWindows(modal, span) {
    // Когда пользователь нажимает кнопку, открывается pop-up форма 
    modal.style.display = 'block';
    // Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
    span.onclick = function () {
        modal.style.display = 'none';
    }
    // Когда пользователь нажимает в любое место вне формы, закрыть окно формы
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
//Внесення запитань в массив
function addZavdToArray() {
    numberFormZavd = buttonFormZavd.length;
    // console.log(buttonFormZavd.length);
    for (let i = 0; i <= arrayButtonAddCheck.length; i++) {
        formZavd = document.getElementById(i).value;
        arrayzavd.push(formZavd);
    }
    // console.log('Масив з завданнями: ', arrayzavd);
    addTextNoneValue("Кількість завдань в пам'яті на данний момент: ", arrayzavd.length, obshchaKilkistZavdanRedactor, '');

}
//Видалення запитань із массиву
function removeZavdToArray() {
    arrayzavd.splice(0, arrayzavd.length);
    // console.log('Масив з завданнями: ', arrayzavd);
    addTextNoneValue("Кількість завдань в пам'яті на данний момент: ", arrayzavd.length, obshchaKilkistZavdanRedactor, '');
    biletZavd = document.getElementsByClassName('bilet__task');
    inputAddBilet = document.getElementById('redactor__input-kilkist-biletiv').value;
    
};//Стандартні уніфіковані функції
let arrayzavd = [];//Массив у який при натисканні кнопки заносяться завдання;
let buttonFormZavd = [];//Массив у який додається значення при нажатті на кнопку + і віднімається при нажатті на -
let arrayBilet=[];//Массив у якому зберігаються завдання які потім будуть у білеті
let arrayButtonAddCheck=[];//Лічильник натискань на кнопку+
//массиви у які записуються відсортовані по рівню складності завдання
let arrayLevelOne=[];
let arrayLevelTwo=[];
let arrayLevelThree=[];
;//Масиви
let defaultValueZavd = 2;//Кількість завдань в білеті по дефолту

;//Дефолтні значення
// Отправка данных на сервер
function send(event, php) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();

    const form = document.getElementById('form-suport');

    let error = formValid(form);

    if (error === 0) {
        console.log("Отправка запроса");
        req.open('POST', php, true);
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                json = JSON.parse(this.response); //  internet explorer 11
                console.log(json);

                // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
                if (json.result == "success") {
                    // Если сообщение отправлено
                    alert("Сообщение отправлено");
                } else {
                    // Если произошла ошибка
                    alert("Ошибка. Сообщение не отправлено");
                }
                // Если не удалось связаться с php файлом
            } else {
                alert("Ошибка сервера. Номер: " + req.status);
            }
        };

        // Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function () {
            alert("Ошибка отправки запроса");
        };
        req.send(new FormData(event.target));

    } else {
        alert("Заповніть обов'язкові поля")
    }




    function formValid(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            removeError(input);


            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    addError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    addError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function addError(params) {
        params.parentElement.classList.add('_error');
    }

    function removeError(params) {
        params.parentElement.classList.remove('_error');
    }

    function emailTest(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(input.value);
    }



};//Скрипт для валідації та відправки форми підтримки на пошту
//Перенос данних із поля вводу протоколу в док
function addProtokol(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    protokol = document.getElementById('protokol-redactor-textarea');

    protokolBilet = document.getElementsByClassName('bilet__protokol');

    addTextofClassname('', protokol, protokolBilet, '');
}
//=================================================================================
//Перенос данних із поля вводу ПІБ в док
function addPIb(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    zav = document.getElementById('pib-redactor__zav');
    zavName = document.getElementById('pib-redactor__zav-pib');
    prep = document.getElementById('pib-redactor__prep');
    prepName = document.getElementById('pib-redactor__prep-pib');

    zavBilet = document.getElementsByClassName('bilet__zavkaf');
    zavNameBilet = document.getElementsByClassName('bilet__zavkafname');
    prepBilet = document.getElementsByClassName('bilet__prepod');
    prepNameBilet = document.getElementsByClassName('bilet__prepodname');

    addTextofClassname('', zav, zavBilet, ': ');
    addTextofClassname(' ', zavName, zavNameBilet, '');
    addTextofClassname('', prep, prepBilet, ': ');
    addTextofClassname(' ', prepName, prepNameBilet, '');
}
//=================================================================================
//Перенос данних із поля вводу данних про спеціал. і тд. в док
function addNonespusok(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    university = document.getElementById('nonespusok-shablon__input-university');
    fakultet = document.getElementById('nonespusok-shablon__input-fakultet');
    specialnist = document.getElementById('nonespusok-shablon__input-specialnist');
    specializaciya = document.getElementById('nonespusok-shablon__input-specializacia');
    osvProg = document.getElementById('nonespusok-shablon__input-osv-prog');
    formaNavchannya = document.getElementById('nonespusok-shablon__input-forma-navchannya');
    duscuplina = document.getElementById('nonespusok-shablon__input-duscuplina');



    universityBilet = document.getElementsByClassName('bilet__university');
    fakultetBilet = document.getElementsByClassName('bilet__fakultet');
    specialnistBilet = document.getElementsByClassName('bilet__specialnist');
    specializaciyaBilet = document.getElementsByClassName('bilet__specializaciya');
    osvProgBilet = document.getElementsByClassName('bilet__osvprog');
    formaNavchannyaBilet = document.getElementsByClassName('bilet__okr');
    duscuplinaBilet = document.getElementsByClassName('bilet__duscuplina');


    addTextofClassname('', university, universityBilet, '');
    addTextofClassname('', fakultet, fakultetBilet, '');
    addTextofClassname('Спеціальність: ', specialnist, specialnistBilet, '');
    addTextofClassname('Спеціалізація: ', specializaciya, specializaciyaBilet, '');
    addTextofClassname('Освітня програма: ', osvProg, osvProgBilet, '');
    addTextofClassname('ОКР: ', formaNavchannya, formaNavchannyaBilet, '');
    addTextofClassname('Дисципліна: ', duscuplina, duscuplinaBilet, '');

}
//=================================================================================
//Додання кількості завдань в білеті по дефолту 3
let valueZavd = document.getElementById('zavd-div__value-zavd');
valueZavd.addEventListener('input', valueZavdCheck);
//функція валідації поля над полем для вводу запитань, встановлення значення по-дефолту
function valueZavdCheck() {
    if (valueZavd.value > 0 && valueZavd.value % 1 === 0 && valueZavd.value !== '') {
        defaultValueZavd = valueZavd.value;
        // console.log(defaultValueZavd);
    } else {
        defaultValueZavd = 3;
        // console.log('false',defaultValueZavd);
    }
    return defaultValueZavd;
}
//=================================================================================
//Функція додавання білету
function addBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    inputAddBilet = document.getElementById('redactor__input-kilkist-biletiv');
    $biletForm = document.getElementById('redactor__bilet-shablon');
    $bilet = document.getElementsByClassName('bilet');
    biletNumber = document.getElementsByClassName('bilet__number');
    if (inputAddBilet.value > 1 && inputAddBilet.value % 1 === 0 && inputAddBilet.value !== '') {
        alert(inputAddBilet.value)
        for (let i = 2; i <= inputAddBilet.value; i++) {
            $($bilet[0]).clone().appendTo($biletForm);
            biletNumber[i-1].innerText ='Білет №'+i; 
        }
        // console.log(biletNumber[0].innerText);
        

    } else if (inputAddBilet.value === '1') {
        alert('На сторінці і так показаний один білет')
    } else {
        alert('Кількість білетів не може бути менше одного')
    }

};//Додавання в білет статичних данних
//Кількість завданнь пам'яті в данний момент
let obshchaKilkistZavdanRedactor = document.getElementById('pib-redactor__kilkist-zavdan');


//додавання однорівневих завдань в білет(шаблон)
function addZavdToBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    addZavdToArray();
    if (arrayzavd.length === 0) {
        alert('Упс, сталась помилка. Ви не додали свої завдання в масив')
    } else {
        biletZavd = document.getElementsByClassName('bilet__task');
        inputAddBilet = document.getElementById('redactor__input-kilkist-biletiv').value;
        let arrayNumber = [];
        for (let i = 0; i < arrayzavd.length; i++) {
            arrayNumber.push(i);
        }
        var randomArray = randomNumber(arrayNumber);
        for (let i = 0; i < defaultValueZavd; i++) {
            arrayBilet[i] = arrayzavd[randomArray[i]];
        }
        if (inputAddBilet === '') {
            for (let i = 0; i < arrayBilet.length; i++) {
                biletZavd[0].innerHTML += '<div>' + (i + 1) + '. ' + arrayBilet[i] + '</div>';
            }
        } else {

            for (let i = 0; i < inputAddBilet; i++) {
                let arrayNumber = [];
                for (let i = 0; i < arrayzavd.length; i++) {
                    arrayNumber.push(i);
                }
                var randomArray = randomNumber(arrayNumber);
                for (let j = 0; j < defaultValueZavd; j++) {
                    arrayBilet[j] = arrayzavd[randomArray[j]];
                }
                for (let j = 0; j < arrayBilet.length; j++) {
                    biletZavd[i].innerHTML += '<div>' + (j + 1) + '. ' + arrayBilet[j] + '</div>';
                }
            }
        }
    }
}
//видалення любих завдань з білету(шаблон)
function removeZavdToBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    removeZavdToArray();
    biletZavd = document.getElementsByClassName('bilet__task');
    if (inputAddBilet === '') {
        biletZavd[0].innerText = '';
    } else {
        for (let i = 1; i <= inputAddBilet; i++) {
            biletZavd[i - 1].innerText = '';
        }
    }
    alert('Шаблон(и) очищено!')
}
//Додавання полів для вводу завдання
function addFormZavd(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    divForm = document.getElementById('zavd-div__div-textarea');
    form = document.getElementById('0');
    arrayButtonAddCheck.push(arrayButtonAddCheck.length + 1);
    // console.log(arrayButtonAddCheck)
    for (let i = 1; i <= arrayButtonAddCheck.length; i++) {
        if (document.getElementById(i) === null) {
            var $obj = $("<div class='zavd-div__div-div-textarea'><textarea name='redactor-zavd' id=" + i +
                " cols='30' rows='10' class='zavd-div__textarea' placeholder='    Впишіть ваше завдання'></textarea></div>");
            $obj.appendTo(divForm);
        }
    }
}
//видалення полів для вводу завдання
function removeFormZavd(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    divForm = document.getElementById('zavd-div__div-textarea');
    document.getElementById(arrayButtonAddCheck.length).parentElement.remove();
    arrayButtonAddCheck.pop();
    // console.log(arrayButtonAddCheck);

}

;//Додавання та видалення завдань в массиві
//Додавання модального вікна інфо
function modalInfo(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    // Объявить переменную модального окна в текущей области видимости
    var modal = document.getElementById('modalInfo');
    // Получение элемента <span>, который закрывает модальное окно
    var span = document.getElementsByClassName('content-modal__close')[0];
    modalWindows(modal, span);
}
//Додавання модального вікна з рейтингом
function addRating(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    addZavdToArray();
    // Объявить переменную модального окна в текущей области видимости
    var modal = document.getElementById('rating__modal');
    // Получение элемента <span>, который закрывает модальное окно
    var span = document.getElementsByClassName('content-modal__close-rating')[0];

    modalWindows(modal, span);
    //створення таблиці
    var table = document.getElementById('rating__table');
    table.innerHTML = '';
    for (let i = 0; i < arrayzavd.length; i++) {
        table.innerHTML += "<table class='table-rating__table'><tr class='table-rating__row'><td class='table-rating__column first-column count" + i + "'>" +
            arrayzavd[i] +
            "</td><td class='table-rating__column second-column'>" +
            "<div class='table-rating__column-rating'><div class='table-rating__column-rating-text'>Складність завдання</div>" +
            "<div class='table-rating__column-rating-count'><input type='radio' class='one' name='rating-radio" + (i + 1) + "'>1" +
            "<input type='radio' class='two' name='rating-radio" + (i + 1) + "'>2<input type='radio' class='three' name='rating-radio" + (i + 1) + "'>3 </div></div>" +
            "</td></tr></table>";
    }
}
//Функція збору данних з полів в 3 массиви(по складності), перемішування данних в кожному із масивів
//об'єднання всіх масивів в один зберігаючи послідовність рівнів
//вивід у шаблон
function ratingCount(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var array = [];
    for (let i = 0; i < arrayzavd.length; i++) {
        var a = document.getElementsByClassName('count' + i)[0];
        var checkOne = document.getElementsByName('rating-radio' + (i + 1));
        for (var j = 0; j < checkOne.length; j++) {
            if (checkOne[j].checked) {
                array[i] = (j + 1);
            }
        }
        if (array[i] === 1) {
            arrayLevelOne.push(a.textContent)
        } else if (array[i] === 2) {
            arrayLevelTwo.push(a.textContent)
        } else if (array[i] === 3) {
            arrayLevelThree.push(a.textContent)
        }
    }

    one = document.getElementById('content-modal__one-level');
    two = document.getElementById('content-modal__two-level');
    three = document.getElementById('content-modal__three-level');



    
    biletZavd = document.getElementsByClassName('bilet__task');
    inputAddBillet = document.getElementById('redactor__input-kilkist-biletiv').value;

    if (inputAddBillet==='') {
        var newArray = arrayZavdforLevel(arrayLevelOne, one.value,arrayLevelTwo, two.value,arrayLevelThree, three.value);
        for (let i = 0; i < newArray.length; i++) {
            biletZavd[0].innerHTML += '<div>' + (i + 1) + '. ' + newArray[i] + '</div>';
        }
    }else{
        for (let i = 0; i < inputAddBillet; i++) {
            var newArray = arrayZavdforLevel(arrayLevelOne, one.value,arrayLevelTwo, two.value,arrayLevelThree, three.value);
            for (let j = 0; j < newArray.length; j++) {
                biletZavd[i].innerHTML += '<div>' + (j + 1) + '. ' + newArray[j] + '</div>';
            }
            
        }
    }


    arrayLevelOne = [];
    arrayLevelTwo = [];
    arrayLevelThree = [];
    removeZavdToArray();
}
//Функція збору 3 масивів в 1 із збереженням послідовності
function arrayZavdforLevel(one, countOne, two, countTwo, three, countThree) {
    if (countOne > 0 && countOne % 1 === 0 || countTwo > 0 && countTwo % 1 === 0 || countThree > 0 && countThree % 1 === 0) {
        var newOne = randomArray(one);
        var newTwo = randomArray(two);
        var newThree = randomArray(three);
        var newArray = [];
        for (let i = 0; i < countOne; i++) {
            newArray.push(newOne[i])
        }
        for (let i = 0; i < countTwo; i++) {
            newArray.push(newTwo[i])
        }
        for (let i = 0; i < countThree; i++) {
            newArray.push(newThree[i])
        }
        
        return newArray;
    }
}
//Функція перемішування масиву
function randomArray(array) {
    var arrayNumber = [];
    var newArray = [];
    for (let j = 0; j < array.length; j++) {
        arrayNumber[j] = j;
    }
    var randomArrayNumber = randomNumber(arrayNumber);
    for (let j = 0; j < array.length; j++) {
        newArray[j] = array[randomArrayNumber[j]];
    }
    return newArray;
};//Модальні вікна
//Функція для завантаження файлу із серверу до пк користувача
window.downloadFile = function (sUrl) {

    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
        alert('Your device does not support files downloading. Please try again in desktop browser.');
        return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
        //Creating new link node.
        var link = document.createElement('a');
        link.href = sUrl;

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
            link.download = fileName;
        }

        //Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
        sUrl += '?download';
    }

    window.open(sUrl, '_self');
    return true;
}

window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;






function downloadBilet(event) {
    event.preventDefault();
    //Збір данних з потрібних полів
    let university = document.getElementsByClassName('bilet__university')[0].innerText;
    let fakultet = document.getElementsByClassName('bilet__fakultet')[0].innerText;
    let specialnist = document.getElementsByClassName('bilet__specialnist')[0].innerText.substr(15);
    let specializaciya = document.getElementsByClassName('bilet__specializaciya')[0].innerText.substr(15);
    let osvprog = document.getElementsByClassName('bilet__osvprog')[0].innerText.substr(18);
    let okr = document.getElementsByClassName('bilet__okr')[0].innerText.substr(5);
    let duscuplina = document.getElementsByClassName('bilet__duscuplina')[0].innerText.substr(12);
    let protokol = document.getElementsByClassName('bilet__protokol')[0].innerText;
    let zavkaf = document.getElementsByClassName('bilet__zavkaf')[0].innerText;
    let zavkafname = document.getElementsByClassName('bilet__zavkafname')[0].innerText;
    let prepod = document.getElementsByClassName('bilet__prepod')[0].innerText;
    let prepodname = document.getElementsByClassName('bilet__prepodname')[0].innerText;

    let number = document.getElementsByClassName('bilet__number');
    let numberArray =[];
    for (let i = 0; i<number.length;i++){
        numberArray[i]= number[i].innerText;
    }
    let task = document.getElementsByClassName('bilet__task');
    let taskArray=[];
    for (let i = 0; i<task.length;i++){
        taskArray[i]= task[i].innerText.split('\n');
    }
    // console.log(taskArray)

    //console.log(
        // university,
        // fakultet,
        // specialnist.length,
        // specializaciya.length,
        // osvprog.length,
        // okr.length,
        // duscuplina.length,
        // numberArray,
        // task,
        // taskArray,
        // protokol,
        // zavkaf,
        // zavkafname,
        // prepod,
        // prepodname,
    //);




    // Функція, яка відсилає данні у файл php
        $.post('js/downloadBilet.php', {
                'university': university,
                'fakultet': fakultet,
                'specialnist': specialnist,
                'specializaciya': specializaciya,
                'osvprog': osvprog,
                'okr': okr,
                'duscuplina': duscuplina,
                'number': numberArray,
                'task': taskArray,
                'protokol': protokol,
                'zavkaf': zavkaf,
                'zavkafname': zavkafname,
                'prepod': prepod,
                'prepodname': prepodname
            },
            function (data) {
                // console.log(data)
                downloadFile(data);
            });
};//Скачування шаблону з сайту
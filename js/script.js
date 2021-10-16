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
function addText(beforeText, valueText, inerText, arterText) {
    if (typeof inerText.innerText !== 'undefined') {
        // IE8-
        inerText.innerText = beforeText + valueText.value + arterText;
    } else {
        // Нормальные браузеры
        inerText.textContent = valueText.value;
    }
}

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

function addTextNoneValue(beforeText, valueText, inerText, arterText) {
    if (typeof inerText.innerText !== 'undefined') {
        // IE8-
        inerText.innerText = beforeText + valueText + arterText;
    } else {
        // Нормальные браузеры
        inerText.textContent = valueText;
    }
}

function buttonCheck(idElement, nameclass) {
    let idE = document.getElementById(idElement);
    if (idE.classList.contains(nameclass)) {
        idE.classList.remove(nameclass);
    } else {
        idE.classList.add(nameclass);
    }
}

function doop(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    alert('Ця функція ще допрацьовується))')
}


function randomNumber(array) {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}

function test(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    alert(rando(5));
};//Стандартні уніфіковані функції
let arrayzavd = [];//Массив у який при натисканні кнопки заносяться завдання;
let buttonFormZavd = [];//Массив у який додається значення при нажатті на кнопку + і віднімається при нажатті на -
let arrayBilet=[];//Массив у якому зберігаються завдання які потім будуть у білеті
let arrayButtonAddCheck=[];//Лічильник натискань на кнопку+
let arrayRaitings=[];//Массив з оцінками складності завдань
//массиви у які записуються відсортовані по рівню складності завдання
let arrayLevelOne=[];
let arrayLevelTwo=[];
let arrayLevelThree=[];
;//Масиви
let defaultValueZavd = 2;//Кількість завдань в білеті

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
let obshchaKilkistZavdanRedactor = document.getElementById('pib-redactor__kilkist-zavdan');

function addZavdToArray(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    numberFormZavd = buttonFormZavd.length;
    console.log(buttonFormZavd.length);
    for (let i = 0; i <= arrayButtonAddCheck.length; i++) {
        formZavd = document.getElementById(i).value;
        arrayzavd.push(formZavd);
    }
    console.log('Масив з завданнями: ', arrayzavd);
    alert('Всі написані вами завдання додано в массив з завданнями!');
    addTextNoneValue('Кількість завдань в масиві на данний момент: ', arrayzavd.length, obshchaKilkistZavdanRedactor, '');

}

function removeZavdToArray(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    arrayzavd.splice(0, arrayzavd.length);
    console.log('Масив з завданнями: ', arrayzavd);
    alert("Массив з завданнями очищено");
    addTextNoneValue('Кількість завдань в масиві на данний момент: ', arrayzavd.length, obshchaKilkistZavdanRedactor, '');
    biletZavd = document.getElementsByClassName('bilet__task');
    inputAddBilet = document.getElementById('redactor__input-kilkist-biletiv').value;
    if (inputAddBilet === '') {
        biletZavd[0].innerText = '';
    } else {
        for (let i = 1; i <= inputAddBilet; i++) {
            biletZavd[i - 1].innerText = '';
        }
    }
}

function addZavdToBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
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
                biletZavd[0].innerHTML += '<div>' + (i + 1) + '. ' + arrayBilet[i] + '<div>';
            }
        } else {

            for (let i = 0; i < inputAddBilet; i++) {
                let arrayNumber = [];
                for (let i = 0; i < arrayzavd.length; i++) {
                    arrayNumber.push(i);
                }
                var randomArray = randomNumber(arrayNumber);
                for (let i = 0; i < defaultValueZavd; i++) {
                    arrayBilet[i] = arrayzavd[randomArray[i]];
                }
                for (let j = 0; j < arrayBilet.length; j++) {
                    biletZavd[i].innerHTML += '<div>' + (j + 1) + '. ' + arrayBilet[j] + '<div>';
                }
            }
        }
    }
}

function removeZavdToBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    biletZavd = document.getElementById('bilet__task');
    biletZavd.innerHTML = '';
    alert('Шаблон очищено!')
}

function addRatingTasks(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    for (let i = 0; i < arrayzavd.length; i++) {
        arrayRaitings[i] = '1';
    }
    console.log(arrayRaitings);

}

function addFormZavd(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    divForm = document.getElementById('zavd-div__div-textarea');
    form = document.getElementById('0');
    arrayButtonAddCheck.push(arrayButtonAddCheck.length + 1);
    console.log(arrayButtonAddCheck)
    for (let i = 1; i <= arrayButtonAddCheck.length; i++) {
        if (document.getElementById(i) === null) {
            var $obj = $("<div class='zavd-div__div-div-textarea'><textarea name='redactor-zavd' id=" + i +
                " cols='30' rows='10' class='zavd-div__textarea' placeholder='    Впишіть ваше завдання'></textarea></div>");
            $obj.appendTo(divForm);
        }
    }
}

function removeFormZavd(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    divForm = document.getElementById('zavd-div__div-textarea');
    document.getElementById(arrayButtonAddCheck.length).parentElement.remove();
    arrayButtonAddCheck.pop();
    console.log(arrayButtonAddCheck);

};//Додавання та видалення завдань в массиві
function modalInfo(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    // Объявить переменную модального окна в текущей области видимости
    var modal = document.getElementById('modalInfo');
    // Получение элемента <span>, который закрывает модальное окно
    var span = document.getElementsByClassName('content-modal__close')[0];
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
};//Модальні вікна
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

let lastRandomNumber = 0;

function randomNumber() {
    min = Math.ceil(0);
    max = Math.floor(arrayzavd.length - 1);
    var getRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (getRandomNumber != lastRandomNumber) {
        lastRandomNumber = getRandomNumber;
    } else {
        randomNumber();
    }
    return lastRandomNumber;
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

    protokolBilet = document.getElementById('bilet__protokol');

    addText('',protokol, protokolBilet,'');
}
//=================================================================================
//Перенос данних із поля вводу ПІБ в док
function addPIb(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    zav = document.getElementById('pib-redactor__zav');
    zavName = document.getElementById('pib-redactor__zav-pib');
    prep = document.getElementById('pib-redactor__prep');
    prepName = document.getElementById('pib-redactor__prep-pib');

    zavBilet = document.getElementById('bilet__zavkaf');
    zavNameBilet = document.getElementById('bilet__zavkafname');
    prepBilet = document.getElementById('bilet__prepod');
    prepNameBilet = document.getElementById('bilet__prepodname');

    addText('', zav, zavBilet, ': ');
    addText(' ', zavName, zavNameBilet, '');
    addText('', prep, prepBilet, ': ');
    addText(' ', prepName, prepNameBilet, '');
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

    universityBilet = document.getElementById('bilet__university');
    fakultetBilet = document.getElementById('bilet__fakultet');
    specialnistBilet = document.getElementById('bilet__specialnist');
    specializaciyaBilet = document.getElementById('bilet__specializaciya');
    osvProgBilet = document.getElementById('bilet__osvprog');
    formaNavchannyaBilet = document.getElementById('bilet__okr');
    duscuplinaBilet = document.getElementById('bilet__duscuplina');

    addText('',university,universityBilet,'');
    addText('',fakultet,fakultetBilet,'');
    addText('Спеціальність: ', specialnist, specialnistBilet, '');
    addText('Спеціалізація: ', specializaciya, specializaciyaBilet, '');
    addText('Освітня програма: ', osvProg, osvProgBilet, '');
    addText('ОКР: ',formaNavchannya, formaNavchannyaBilet,'');
    addText('Дисципліна: ', duscuplina, duscuplinaBilet, '');

}
//=================================================================================
//Додання кількості завдань в білеті по дефолту 3
let valueZavd = document.getElementById('zavd-div__value-zavd');
valueZavd.addEventListener('input', valueZavdCheck);
function valueZavdCheck(){
    if (valueZavd.value > 0 && valueZavd.value%1===0 &&valueZavd.value!=='') {
        defaultValueZavd = valueZavd.value;
        // console.log(defaultValueZavd);
    }
    else{
        defaultValueZavd = 3;
        // console.log('false',defaultValueZavd);
    }
    return defaultValueZavd;
}
//=================================================================================
;//Додавання в білет статичних данних
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
    biletZavd = document.getElementById('bilet__task');
    biletZavd.innerHTML = '';
}

function addZavdToBilet(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    if (arrayzavd.length === 0) {
        alert('Упс, сталась помилка. Ви не додали свої завдання в масив')
    } else {
        for (let i = 0; i < defaultValueZavd; i++) {
            arrayBilet[i] = i + 1 + '. ' + arrayzavd[randomNumber()];
        }
        biletZavd = document.getElementById('bilet__task');
        for (let i = 0; i < arrayBilet.length; i++) {
            biletZavd.innerHTML += '<div>' + arrayBilet[i] + '<div>';
            console.log(arrayBilet[i]);
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
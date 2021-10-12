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

;
function addText(beforeText, valueText, inerText, arterText) {
    if (typeof inerText.innerText !== 'undefined') {
        // IE8-
        inerText.innerText = beforeText + valueText.value + arterText;
    } else {
        // Нормальные браузеры
        inerText.textContent = valueText.value;
    }
};
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



};
function buttonCheck(idElement,nameclass){
    let idE = document.getElementById(idElement);
    if (idE.classList.contains(nameclass)) {
        idE.classList.remove(nameclass);
    }else{
        idE.classList.add(nameclass);
    }
    
}
;
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
};
function addProtokol(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    protokol = document.getElementById('protokol-redactor-textarea');

    protokolBilet = document.getElementById('bilet__protokol');

    addText('',protokol, protokolBilet,'');
};
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

};
function doop(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    alert('Ця функція ще допрацьовується))')
};
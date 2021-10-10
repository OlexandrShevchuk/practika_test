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
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-suport');

    form.addEventListener('submit', checkEmail);

    async function checkEmail(e) {
        e.preventDefault();

        let error = formValid(form);

        if (error === 0) {
            form.parentElement.parentElement.classList.add('_sending');

            // let response = await fetch('sendmail.php',{
            //     method: 'POST',
            //     body: formData
            // })
            // if(response.ok){
            //     let result = await response.json();
            //     alert(result.message);
            //     formPreview.innerHTML = '';
            //     form.reset();
            //     form.classList.remove('_seding');
            // }else{
            //     alert('Упс, сталась помилка.')
            //     form.classList.remove('_seding');
            // }
        } else {
            form.parentElement.parentElement.classList.remove('_sending');
            alert("Заповніть обов'язкові поля")
        }

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
});

let form = document.getElementById('form');
let zgodyChx = document.getElementById('zgody');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let zgoda1 = document.getElementById('zgoda1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @!';
        errors.appendChild(liError);
    }

    if (!zgoda1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody 1!';
        errors.appendChild(liError);
    }



    if (errors.children.length > 0) {
        event.preventDefault();
    }
    
    

}

const zgody = (event) => {
    let zgoda1 = document.getElementById('zgoda1');
    let zgoda2 = document.getElementById('zgoda2');

    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;

} 

form.addEventListener('submit', validate);
zgodyChx.addEventListener('change', zgody)


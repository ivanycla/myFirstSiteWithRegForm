document.addEventListener("DOMContentLoaded", function() {
    const form = document.createElement("form");
    form.classList.add('firstRegForm');

    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const numberLabel = document.createElement("label");
    const numberInput = document.createElement("input");
    const submitButton = document.createElement("button"); 

    nameLabel.textContent = "Ваше имя:";
    nameLabel.style.fontFamily = 'Montserrat, sans-serif'; 
    nameLabel.style.fontSize = '16px'; 
    nameLabel.style.color = '#333'; 
    nameLabel.style.fontWeight = 'bold'; 
    nameLabel.setAttribute("for", "name");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("required","required")
    nameInput.classList.add("inputField");
     
    numberLabel.textContent = "Ваш номер:";
    numberLabel.style.fontFamily = 'Montserrat, sans-serif'; 
    numberLabel.style.fontSize = '16px'; 
    numberLabel.style.color = '#333'; 
    numberLabel.style.fontWeight = 'bold'; 
    numberLabel.setAttribute("for", "number");
    numberInput.setAttribute("type", "tel");
    numberInput.setAttribute("id", "number");
    numberInput.setAttribute("name", "number");
    numberInput.setAttribute("required","required") 
    numberInput.classList.add("inputField");
    numberInput.addEventListener('input', function() {
        numberInput.value = numberInput.value.replace(/[^0-9+]/g, ''); 
    });
    


    submitButton.textContent = "Отправить";
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add('submitButton');

    const townLabel = document.createElement("label");
    const townSelect = document.createElement("select");
    const cities = ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест", "Барановичи", "Борисов", "Бобруйск", "Пинск", "Орша", "Новополоцк", "Мозырь", "Солигорск", "Лида", "Жлобин", "Слуцк", "Речица", "Светлогорск", "Заславль", "Кобрин", "Малорита", "Марьина Горка", "Миоры", "Мир", "Молодечно", "Мосты", "Мстиславль", "Мядель", "Наровля", "Негорелое", "Несвиж", "Новогрудок", "Новолукомль", "Озаричи", "Октябрьский", "Осиповичи", "Островец", "Ошмяны", "Петриков", "Плещеницы", "Полоцк", "Поставы", "Пружаны", "Радошковичи", "Рогачёв", "Россоны", "Руденск", "Ружаны", "Светлогорск", "Свирь", "Свислочь", "Сенно", "Скидель", "Славгород", "Слоним", "Смолевичи", "Сморгонь", "Солигорск", "Сопоцкин", "Старобин", "Старые Дороги", "Столбцы", "Столин", "Стрешин", "Телеханы", "Толочин", "Туров", "Узда", "Уречье", "Ушачи", "Хойники", "Холопеничи", "Хотимск", "Чаусы", "Чашники", "Червень", "Чериков", "Чечерск", "Шарковщина", "Шерешёво", "Шклов", "Шумилино", "Щучин"];
    
    townLabel.textContent = "Ваш город:";
    townLabel.style.fontFamily = "Montserrat, sans-serif";
    townLabel.style.fontSize = '16px';
    townLabel.style.color = '#333';
    townLabel.style.fontWeight = 'bold';
    townLabel.setAttribute("for", "town");
    
    townSelect.setAttribute("id", "town");
    townSelect.setAttribute("name", "town");
    townSelect.setAttribute("required","required")
    townSelect.classList.add("inputField");
    
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        townSelect.appendChild(option);
    });
    

    
    const sexLabel = document.createElement("label");
const sexs = ["М", "Ж"];
sexLabel.textContent = "Ваш пол:";
sexLabel.style.fontFamily = "Montserrat, sans-serif";
sexLabel.style.fontSize = '16px';
sexLabel.style.color = '#333';
sexLabel.style.fontWeight = 'bold';
form.appendChild(sexLabel);

sexLabel.classList.add("sexLabel");

const radioGroup = document.createElement("div");
radioGroup.classList.add("radioGroup");
form.appendChild(radioGroup);

sexs.forEach((sex, index) => {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("id", `sex${index}`);
    radio.setAttribute("name", "sex");
    radio.setAttribute("value", sex.toLowerCase());
    radio.setAttribute("required", "required"); 
    radio.classList.add("radioInput");

    const label = document.createElement("label");
    label.setAttribute("for", `sex${index}`);
    label.textContent = sex;
    label.classList.add("radioLabel");

    radioGroup.appendChild(radio);
    radioGroup.appendChild(label); 
});


    const birthLabel = document.createElement("label");
    const birthInput = document.createElement("input");
    birthLabel.textContent = "Дата рождения:";
    birthLabel.style.fontFamily = "Montserrat, sans-serif";
    birthLabel.style.fontSize = '16px';
    birthLabel.style.color = '#333';
    birthLabel.style.fontWeight = 'bold';
    birthLabel.setAttribute("for", "birth");
    birthInput.setAttribute("type", "date");
    birthInput.setAttribute("id", "birth");
    birthInput.setAttribute("name", "birth");
    birthInput.classList.add("inputField");

    const hobiesLabel = document.createElement("label");
    const hobiesInput = document.createElement("input");
    const interestList = document.createElement("ul");
    interestList.setAttribute("id", "interestList");
    hobiesLabel.textContent = "Добавь свои интересы:";
    hobiesLabel.style.fontFamily = "Montserrat, sans-serif";
    hobiesLabel.style.fontSize = '16px';
    hobiesLabel.style.color = '#333';
    hobiesLabel.style.fontWeight = 'bold';
    hobiesLabel.setAttribute("for", "hobies");
    hobiesInput.setAttribute("type", "text");
    hobiesInput.setAttribute("id", "hobies");
    hobiesInput.setAttribute("name", "hobies");
    hobiesInput.setAttribute("placeholder", "Интересы");
    hobiesInput.classList.add("inputField");

    const textAboutYouLabel = document.createElement("label");
    const textAboutYou = document.createElement("textarea");
    textAboutYouLabel.textContent = "Информация о тебе:";
    textAboutYouLabel.style.fontFamily = "Montserrat, sans-serif";
    textAboutYouLabel.style.fontSize = '16px';
    textAboutYouLabel.style.color = '#333';
    textAboutYouLabel.style.fontWeight = 'bold';
    textAboutYouLabel.setAttribute("for", "textAboutYou");
    textAboutYou.setAttribute("minlength", "100");
    textAboutYou.setAttribute("maxlength", "500");
    textAboutYou.setAttribute("placeholder", "Напиши что-нибудь о себе");
    textAboutYou.setAttribute("required","required")
    textAboutYou.classList.add("textareaField");

    const select = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    select.setAttribute("id", "goal");
    select.setAttribute("required","required");
    select.setAttribute("name", "goal");
    option1.textContent = "Серьезные отношения";
    option2.textContent = "Возможные отношения";
    option3.textContent = "Просто так";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.classList.add("goalSelect");
    

    const textEductionLabel = document.createElement("label");
    const textEducation = document.createElement("textarea");
    textEducation.setAttribute("required","required")
    textEductionLabel.textContent = "Напиши о своем образовании:";
    textEductionLabel.style.fontFamily = "Montserrat, sans-serif";
    textEductionLabel.style.fontSize = '16px';
    textEductionLabel.style.color = '#333';
    textEductionLabel.style.fontWeight = 'bold';
    textEductionLabel.setAttribute("for", "textEducation");
    textEducation.setAttribute("maxlength", "500");
    textEducation.setAttribute("placeholder", "Напиши где учился что окончил");
    textEducation.classList.add("textareaField");


    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(numberLabel);
    form.appendChild(numberInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(townLabel);
    form.appendChild(townSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(birthLabel);
    form.appendChild(birthInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(hobiesLabel);
    form.appendChild(hobiesInput);
    form.appendChild(interestList);
    form.appendChild(document.createElement('br'));
    form.appendChild(textAboutYouLabel);
    form.appendChild(textAboutYou);
    form.appendChild(document.createElement('br'));
    form.appendChild(textEductionLabel);
    form.appendChild(textEducation);
    form.appendChild(document.createElement('br'));
    form.appendChild(select);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    document.getElementById('formContainer').appendChild(form);
    



submitButton.addEventListener("click", (event) => {
    
    event.preventDefault(); 
     
    
    if (form.checkValidity()) {
        alert("Спасибо за регестрацию .С нами вы точно найдете вторую половинку!!");
        window.location.href = "index.html"; 
    } else {
        
        form.reportValidity();
    }
});

    
    hobiesInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 

            const interest = hobiesInput.value;
            if (interest) {
                const listItem = document.createElement('li');
                const container = document.createElement('div');
                container.className = 'interest-container';
                if(listItem.lenght===0){
                    alert("заполните поле");
                    return;
                }

                const interestSpan = document.createElement('span');
                interestSpan.textContent = interest;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = '✖';
                deleteButton.className = 'delete-button';
                deleteButton.addEventListener('click', function() {
                    listItem.remove();
                });

                container.appendChild(interestSpan);
                container.appendChild(deleteButton);
                listItem.appendChild(container);
                interestList.appendChild(listItem);
                hobiesInput.value = ''; 
            }
        }
    });
  
});

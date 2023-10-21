const requestUrl = 'https://developers.ria.com/auto/categories/?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa';
const myXhr = new XMLHttpRequest();

myXhr.open('GET', requestUrl, true);

myXhr.onload = function () {
  if (myXhr.status === 200) {
    const myObject = {
      pageContent: myXhr.response
    };
    let tranport_typ = JSON.parse(myObject.pageContent);
    let transpot_typ_document = document.getElementById("transpot-typ");
    let html_text = tranport_typ.map((elem) => {
      return `<option value="${elem.value}">${elem.name}</option>`;
    });
    transpot_typ_document.innerHTML = html_text.join(''); 
  } else {
    console.error(`Помилка: статус код - ${myXhr.status}`);
  }
};

myXhr.onerror = function () {
  console.error('Помилка запиту');
};

myXhr.send();

let e = document.getElementById("transpot-typ");
e.addEventListener("change", function() {
  console.log("e.value", e.value);
  const requestMarks = `https://developers.ria.com/auto/categories/${e.value}/marks?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa`;
const myXhrMarks = new XMLHttpRequest();
myXhrMarks.open('GET', requestMarks, true);

myXhrMarks.onload = function () {
  if (myXhrMarks.status === 200) {
    const Marks = {
      pageContent: myXhrMarks.response
    };
    let tranport_marks = JSON.parse(Marks.pageContent);
    let transpot_marks_document = document.getElementById("transpot-marks");
    let html_text = tranport_marks.map((elem) => {
      return `<option value="${elem.value}">${elem.name}</option>`;
    });
    transpot_marks_document.innerHTML = html_text.join(''); 
  } else {
    console.error(`Помилка: статус код - ${myXhrMarks.status}`);
  }
};

myXhrMarks.onerror = function () {
  console.error('Помилка запиту');
};

myXhrMarks.send();
let tranport_marks_click = document.getElementById("transpot-marks");
tranport_marks_click.addEventListener("change",function(){
  console.log("Marks",tranport_marks_click.value)
  function populateYearSelect() {
    let selectYear = document.getElementById("transpot-year");

    for (let year = 1970; year <= 2023; year++) {
        let option = document.createElement("option");
        option.value = year;
        option.text = year;
        selectYear.appendChild(option);
    }

    selectYear.addEventListener("change", function() {
        let selectedYear = selectYear.value;
        if (selectedYear) {
            console.log("Ви вибрали рік " + selectedYear);
        } else {
            console.log("Будь ласка, оберіть рік");
        }
    });
}
populateYearSelect();
let tranport_Year_click = document.getElementById("transpot-year");
tranport_Year_click.addEventListener("change",function(){
  function populateFuelSelect() {
    let selectFuel = document.getElementById("transpot-fuel");

    let fuelOptions = ["Бензин", "Газ", "Дизель", "Гібрид", "Електро"];

    fuelOptions.forEach(function(fuel) {
        let option = document.createElement("option");
        option.value = fuel;
        option.text = fuel;
        selectFuel.appendChild(option);
    });
}
populateFuelSelect();
let tranport_Fuel_click = document.getElementById("transpot-fuel");
tranport_Fuel_click.addEventListener("change",function(){
  console.log("Fuel",tranport_Fuel_click.value)
  function populateAccidentSelect() {
    let selectAccident = document.getElementById("transpot-accident");

    let accidentOptions = ["в ДТП", "не в ДТП"];

    accidentOptions.forEach(function(accident) {
        let option = document.createElement("option");
        option.value = accident;
        option.text = accident;
        selectAccident.appendChild(option);
    });
}

populateAccidentSelect();
let tranport_accident_click = document.getElementById("transpot-accident");
tranport_accident_click.addEventListener("change",function(){
  console.log("ДТП",tranport_accident_click.value)
})  
})  
})  
})
});
var data = {
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "З тексту: У продажу Dodge Journey у комплектації R/T, 2015 року випуску, на автоматичній коробці передач та на передньому приводі. Автомобіль прибув з Америки, безпека вся ціла, один власник. Візуально і по ЛКП без нарікань, салон у відмінному стані та з комфортною комплектацією, в яку входить камера заднього виду, підігрів передніх сидінь, керма, 3-й ряд сидінь та багато іншого. З технічного боку автомобіль повністю обслугований та готовий до будь-яких перевірок на СТО. Запрошуємо на тест-драйв. 39655, Виділи властивості: Марка автомобіля, Модель автомобіля, Рік випуску. Порівняй з параметрами: Марка автомобіля - Dodge, Модель - Journey, Рік випуску -2015. Якщо властивості і параметри не співпадають поверни їх, у форматі: властивіть - параметр. Якщо всі властивості відповідають параметрам, поверни - Ок"}],
  "temperature": 0.7
};
var request = new XMLHttpRequest();

request.setRequestHeader('Authorization', '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');

      request.open('POST', "https://api.openai.com/v1/chat/completions", false);
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
              var resp = JSON.parse(this.response);
              
                  
              console.log(resp);
          }else{
              console.log("ERROR");
          }
      }
      request.onerror = function() {
          console.log("ERROR");
      };
request.send(JSON.stringify(data));

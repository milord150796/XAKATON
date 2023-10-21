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
})  
})  
})
});

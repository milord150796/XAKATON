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
    html_text_value = `<option value="0" selected >Зробіть вибір ...</option>` + html_text.join(''); 
    transpot_typ_document.innerHTML = html_text_value; 
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
    html_text_value = `<option value="0" selected >Зробіть вибір ...</option>` + html_text.join(''); 
    transpot_marks_document.innerHTML = html_text_value; 
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
  console.log("marks",tranport_marks_click.value);
  const requestModel = `https://developers.ria.com/auto/categories/${e.value}/marks/${tranport_marks_click.value}/models?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa`;
  const myXhrModel = new XMLHttpRequest();
  myXhrModel.open('GET', requestModel, true);
  
  myXhrModel.onload = function () {
    if (myXhrModel.status === 200) {
      const Model = {
        pageContent: myXhrModel.response
      };
      let tranport_Model = JSON.parse(Model.pageContent);
      let transpot_Model_document = document.getElementById("transpot-model");
      let html_text = tranport_Model.map((elem) => {
        return `<option value="${elem.value}">${elem.name}</option>`;
      });
      html_text_value = `<option value="0" selected >Зробіть вибір ...</option>` + html_text.join(''); 
      transpot_Model_document.innerHTML = html_text_value;
    } else {
      console.error(`Помилка: статус код - ${myXhrModel.status}`);
    }
  };
  
  myXhrModel.onerror = function () {
    console.error('Помилка запиту');
  };
  
  myXhrModel.send();

let tranport_Model_click = document.getElementById("transpot-model");
tranport_Model_click.addEventListener("change",function(){
  console.log("Model",tranport_Model_click.value)
  function populateYearSelect() {
    let selectYear = document.getElementById("transpot-year");
    selectYear.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.selected = true;
    defaultOption.text = "Зробіть вибір ...";
    selectYear.appendChild(defaultOption);

    for (let year = 1970; year <= 2023; year++) {
        let option = document.createElement("option");
        option.value = year;
        option.text = year;
        selectYear.appendChild(option);
    }

    selectYear.addEventListener("change", function() {
        let selectedYear = selectYear.value;
         if (selectedYear !== "0") {
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
     selectFuel.innerHTML = "";  

    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.selected = true;
    defaultOption.text = "Зробіть вибір ...";
    selectFuel.appendChild(defaultOption);

    let fuelOptions = ["Бензин", "Газ", "Дизель", "Гібрид", "Електро"];

    fuelOptions.forEach(function(fuel) {
      let option = document.createElement("option");
      option.value = fuel;
      option.text = fuel;
      selectFuel.appendChild(option);
      } 
    );
    selectFuel.addEventListener("change", function() {
      let selectedFuel = selectFuel.value;
      if (selectedFuel !== "0") {  // Перевірка на обрану опцію "Зробіть вибір ..."
          console.log("Ви вибрали тип пального: " + selectedFuel);
      } else {
          console.log("Будь ласка, оберіть тип пального");
      }
  });
}
populateFuelSelect();
let tranport_Fuel_click = document.getElementById("transpot-fuel");
tranport_Fuel_click.addEventListener("change",function(){
  console.log("Fuel",tranport_Fuel_click.value)
  function populateAccidentSelect() {
    let selectAccident = document.getElementById("transpot-accident");
    selectAccident.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.selected = true;
    defaultOption.text = "Зробіть вибір ...";
    selectAccident.appendChild(defaultOption);


    let accidentOptions = ["в ДТП", "не в ДТП"];

    accidentOptions.forEach(function(accident) {
      let option = document.createElement("option");
      option.value = accident;
      option.text = accident;
      console.log(option)
      selectAccident.appendChild(option);
    }
  );
  selectAccident.addEventListener("change", function() {
    let selectedAccident = selectAccident.value;
    if (selectedAccident !== "0") {  // Перевірка на обрану опцію "Зробіть вибір ..."
        console.log("Ви вибрали стан автомобіля: " + selectedAccident);
    } else {
        console.log("Будь ласка, оберіть стан автомобіля");
    }
});
}

populateAccidentSelect();
let tranport_accident_click = document.getElementById("transpot-accident");
tranport_accident_click.addEventListener("change",function(){
  console.log("ДТП",tranport_accident_click.value)
});
})  
})  
})  
})
/*--modalWindow-- */
// Отримання посилань на елементи
const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Функція для відображення модального вікна
function openModal() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModalWindow() {
  modal.style.display = "none";
}

// Додавання обробників подій
showModalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalWindow);
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModalWindow();
  }
});
});
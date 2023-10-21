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
  console.log("value_2",tranport_marks_click.value)
})
});

const requestUrl = 'https://developers.ria.com/auto/categories/?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa';
const myXhr = new XMLHttpRequest();

myXhr.open('GET', requestUrl, true);

myXhr.onload = function () {
  if (myXhr.status === 200) {
    const myObject = {
      pageContent: myXhr.response
    };
    console.log('Отримані дані:', JSON.parse(myObject.pageContent));
  } else {
    console.error(Помилка: статус код - ${ myXhr.status });
  }
};

myXhr.onerror = function () {
  console.error('Помилка запиту');
};

myXhr.send();
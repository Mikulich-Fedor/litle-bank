let USD = document.getElementById("banck-carrency_usd");
let UsdValue = document.getElementById("banck-carrency_course-usd");
let EURO = document.getElementById("banck-carrency_euro");
let EuroValue = document.getElementById("banck-carrency_course-euro");
let RU = document.getElementById("banck-carrency_ru");
let RuValue = document.getElementById("banck-carrency_course-ru");
let GR = document.getElementById("banck-carrency_gr");
let GrValue = document.getElementById("banck-carrency_course-gr");
let apiBank = "https://www.nbrb.by/API/ExRates/Rates?Periodicity=0";

//
async function usd(apiBank) {
  fetch(apiBank).then(response =>
    response.json().then(data => {
      (USD.innerHTML = data[4].Cur_Name),
        (UsdValue.innerHTML = data[4].Cur_OfficialRate.toFixed(3));
    })
  );
}
//
async function euro(apiBank) {
  fetch(apiBank).then(response =>
    response.json().then(data => {
      (EURO.innerHTML = data[5].Cur_Name),
        (EuroValue.innerHTML = data[5].Cur_OfficialRate.toFixed(3));
      console.log(data);
    })
  );
}
//
async function ru(apiBank) {
  fetch(apiBank).then(response =>
    response.json().then(data => {
      (RU.innerHTML = data[16].Cur_Name),
        (RuValue.innerHTML = data[16].Cur_OfficialRate.toFixed(3));
    })
  );
}
//
async function gr(apiBank) {
  fetch(apiBank).then(response =>
    response.json().then(data => {
      (GR.innerHTML = data[2].Cur_Name),
        (GrValue.innerHTML = data[2].Cur_OfficialRate.toFixed(3));
    })
  );
}
//
usd(apiBank);
euro(apiBank);
ru(apiBank);
gr(apiBank);

// export { usd, euro, ru, gr, apiBank };

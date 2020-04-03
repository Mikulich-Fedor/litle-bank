let byn = document.getElementById("conversion_valueBYN");
let currency = document.getElementById("conversion_currency");
let result = document.getElementById("conversion_result");

fetch("https://www.nbrb.by/API/ExRates/Rates?Periodicity=0")
  .then(response => response.json())
  .then(data => {
    currency.onchange = () => {
      switch (currency.value) {
        case "usd":
          let U = data[4].Cur_OfficialRate;
          rest = byn.value / U;
          result.value = `${rest.toFixed(2)} USD`;

          console.log(typeof rest);
          break;
        case "euro":
          let E = data[5].Cur_OfficialRate;
          rest = byn.value / E;
          result.value = `${rest.toFixed(2)} EUR`;

          break;
        case "ru":
          let R = data[16].Cur_OfficialRate;
          rest = byn.value * R * 10;
          result.value = `${rest.toFixed(2)} RUB`;

          break;
        case "gr":
          let G = data[2].Cur_OfficialRate;
          rest = byn.value * G;
          result.value = `${rest.toFixed(2)} UAN`;

          break;
      }
    };
  });

let enter = document.getElementById("enter");
let percent = document.getElementById("percent");
let year = document.getElementById("year");
let calcResult = document.getElementById("calculater_result");

year.onchange = () => {
  switch (percent.value) {
    case "5":
      let val5 = Number(enter.value);
      let per5 = (val5 / 100) * 5;
      let sum5 = val5 + per5;
      let res5 = sum5 / (year.value * 12);
      calcResult.value = res5.toFixed(2);
      break;
    case "10":
      let val10 = Number(enter.value);
      let per10 = (val10 / 100) * 10;
      let sum10 = val10 + per10;
      let res10 = sum10 / (year.value * 12);
      calcResult.value = res10.toFixed(2);
      break;

    case "15":
      let val15 = Number(enter.value);
      let per15 = (val15 / 100) * 15;
      let sum15 = val15 + per15;
      let res15 = sum15 / (year.value * 12);
      calcResult.value = res15.toFixed(2);
      break;

    case "20":
      let val20 = Number(enter.value);
      let per20 = (val20 / 100) * 20;
      let sum20 = val20 + per20;
      let res20 = sum20 / (year.value * 12);
      calcResult.value = res20.toFixed(2);
      break;
  }
};

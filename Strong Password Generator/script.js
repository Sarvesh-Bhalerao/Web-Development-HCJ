"use strict";

const resultshow = document.querySelector("#result");
const lengthel = document.getElementById("length");
const upperel = document.getElementById("uppercase");
const lowerel = document.getElementById("lowercase");
const numberel = document.getElementById("numbers");
const symbolel = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
  lower: randomlower,
  upper: randomupper,
  number: randomnumber,
  symbol: randomsymbol,
};

function randomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomupper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomsymbol() {
  const symbols = "!@#$%^&*(){}[]=<>";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomnumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

generatebtn.addEventListener("click", () => {
  const length = +lengthel.value;
  const haslower = lowerel.checked;
  const hasupper = upperel.checked;
  const hasnumber = numberel.checked;
  const hassymbol = symbolel.checked;

  resultshow.innerText = generatepassword(
    haslower,
    hasupper,
    hasnumber,
    hassymbol,
    length
  );
});

function generatepassword(lower, upper, number, symbol, length) {
  let generatedpass = "";
  const typescount = lower + upper + symbol + number;
  //   console.log(typescount);

  const array = [{ lower }, { upper }, { number }, { symbol }].filter(
    (it) => Object.values(it)[0]
  );

  //   console.log(array);

  if (typescount === 0) {
    return "";
  }

  for (let i = 0; i < length; i = i + typescount) {
    array.forEach((type) => {
      //   console.log(type);
      const funcname = Object.keys(type)[0];
      //   console.log(funcname);

      generatedpass += randomFunc[funcname]();
    });
  }

  const finalpass = generatedpass.slice(0, length);
  return finalpass;
}

clipboard.addEventListener("click", () => {
  const area4text = document.createElement("textarea");
  const password = resultshow.innerText;
  if (!password) {
    return;
  }
  area4text.value = password;
  document.body.appendChild(area4text);
  area4text.select();
  document.execCommand("copy");
  area4text.remove();
  alert("Password is copied to clipboard :)");
});

/*
* Реализовать функцию, которая выводит индексы один за другим.
* */

function iterateWrong() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log('BAD i:', i);
    }, 100);
  }
}

function iterateOkIIFE() {
  for (var i = 0; i < 5; i++) {
    (function (j) {
      setTimeout(function () {
        console.log('OK IIFE j:', j);
      }, 100);
    }(i));
  }
}

function iterateOkBind() {
  for (var b = 0; b < 5; b++) {
    setTimeout(function (innerB) {
      console.log('OK bind b:', innerB);
    }.bind(this, b), 100);
  }
}

function iterateOkLet() {
  for (let l = 0; l < 5; l++) {
    setTimeout(function () {
      console.log('OK let l:', l);
    }, 100);
  }
}

function iterateOkSetTimeout3Arg() {
  for (var k = 0; k < 5; k++) {
    setTimeout(function (innerK) {
      console.log('OK setTimeout 3 Argument k:', innerK);
    }, 100, k);
  }
}

iterateWrong();
iterateOkIIFE();
iterateOkBind();
iterateOkLet();
iterateOkSetTimeout3Arg();

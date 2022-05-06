function sum(num1, num2) {
  if (!num1) {
    // if number does not exist
    console.log("Error:Number 1 cam not be empty");
    return; // Stop the exec
  }
  let result = num1 + num2;
  return result;
}
function arrayTest() {
  let nums = [
    1, 3, 451, 123, 3456, 1234, 457, 967, 235, 236, 567, 2345, 1, 234, 567,
    6789,
  ];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    console.log(num);
  }
  console.log("----------------");
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num <= 500) {
      console.log(num);
    }
  }
  //2: print number from 1 to 20
  // b -1 to 20
  // c - except 13
  for (let i = 0; i < 21; i++) {
    if (i != 13 && i != 7) {
      // if not equal to 13
      console.log(i);
    }
  }
  console.log("------3----------");
  //3: print the sum of all number inside array
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    total = total + num;
    console.log(total);
  }
  console.log(total);
}

function init() {
  // console.log("intro page");
  //console.log(sum(1, 3));
  arrayTest();
  $("input").focus(function () {
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function () {
    $(this).css("background-color", "green");
  });

  $("p").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
  });
}

window.onload = init;

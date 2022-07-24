var time = 60;
var points = 0;
var time_counter = null;
var random_marker = null;
var all_dots = document.querySelectorAll(".empty");


function timer_start() {
  time_counter = setInterval(timer, 1000);

}

function timer() {
  const second = document.getElementsByClassName("second")[0];
  const time_end = document.getElementsByClassName("game_over")[0];
  const gameboard = document.getElementsByClassName("gameboard")[0];
  if (time > 0) {
    time = time - 1;
    second.innerHTML = time;
  } else {
    time_end.style.display = "block";
    clearInterval(random_marker);
    stop_it();
    return 0;
  }
}

function start_random() {
  random_marker = setInterval(random, 700);
}

function random() {
  let random_number = Math.floor(Math.random() * 200);
  let cur_rand = document.querySelectorAll(".empty");
  cur_rand[random_number].classList.remove("yellow");
  cur_rand[random_number].classList.add("green");
  cur_rand[random_number].addEventListener("click", check_click);

  function check_click() {
    let clicked = cur_rand[random_number].classList.contains("green");
    if (clicked === true) {
      cur_rand[random_number].classList.add("yellow");
      cur_rand[random_number].classList.remove("green");
      points_counter();
    } else {
      return 0;
    }

  }
}

function points_counter() {
  points = points + 1;
  document.getElementsByClassName("score")[0].innerHTML = points;
  document.getElementsByClassName("score")[1].innerHTML = points;
}

function stop_it() {
window.stop();
}

// Think how RWD Sholud look like

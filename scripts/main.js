// ==== Variables ==== //
// Buttons
const $start_btn = $('#start_btn');
const $reset_btn = $('#reset_btn');
const $square = $('td');

// Game Board
const $game = $('#game');
const $board = $('#board');
const $text = $('#text');
const $scoreboard = $('#scoreboard');

// Squares
const $sqr_1 = $('#sqr_1');
const $sqr_2 = $('#sqr_2');
const $sqr_3 = $('#sqr_3');
const $sqr_4 = $('#sqr_4');
const $sqr_5 = $('#sqr_5');
const $sqr_6 = $('#sqr_6');
const $sqr_7 = $('#sqr_7');
const $sqr_8 = $('#sqr_8');
const $sqr_9 = $('#sqr_9');

// Other
let turn = 1;

// ==== Button Event Listeners ==== //

// Start Game
$start_btn.click(function () {
  $start_btn.addClass('is-hidden');
  $game.removeClass('is-hidden');
  $text.text("player 1 is up!");
  $board.removeClass('is-hidden');
  $scoreboard.removeClass('is-hidden');
  $reset_btn.removeClass('is-hidden');
});

// Reset Game
$reset_btn.click(function () {
  $start_btn.removeClass('is-hidden');
  $game.addClass('is-hidden');
  $text.text("");
  $board.addClass('is-hidden');
  $scoreboard.addClass('is-hidden');
  $reset_btn.addClass('is-hidden');
  $("td").text("");
});

// Toggle Player Turn
$square.click(function () {
  let isEmpty = true;

  if (turn === 1) {
    //TODO: Talk about ':empty'
    //TODO: Talk about '.is'
    if ($(this).is(':empty')) {
      $("#text").text("player 2 is up!");
      $(this).text("x");
      turn = 2;
      isEmpty = false;

      //TODO: Talk about this console log
      // What is 'this'?
      console.log(this);
    } else {
      $(this).css("background-color", "lightcoral");
      setTimeout(() => {
        $(this).css("background-color", "white");
      }, 250); 
    }

  } else {
    //TODO: Talk about ':empty'
    //TODO: Talk about '.is'
    if ($(this).is(':empty')) {
      $("#text").text("player 1 is up!");
      $(this).text("o");
      turn = 1;
      isEmpty = false;

      //TODO: Talk about this console log
      // What is 'this'?
      console.log(this);
    }
  }
});
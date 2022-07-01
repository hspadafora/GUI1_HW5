// File: script.js

// GUI Assignment: HW5 Implementing a Bit of Scrabble with Drag-and-Drop

// Created by: Hunter Spadafora, hunter_spadafora@student.uml.edu
// Created on: 6/28/2022

// Description:
// Main Javascript page for the HW5 scrabble assignment.

// Copyright (c) 2022 by Hunter Spadafora. All rights reserved.
// May be freely copied or excerpted for educational purposes with credit
// to the author.
// Most recent update by HZS on 6/30/2022



// Variables
let hand = [];
const board = $("#scrabble_board");
const word_score = $("#word_score input");
const total_score = $("#total_score input");
let tiles_available = [true];
for (let i = 0; i < 100; i++) {
    tiles_available[i] = true;
}
// console.log(tiles_available);

// Triple word: 0, double word: 1
let word_bonus = [false, false];



// Fill grid with droppable div for locations
let spaces = [];
let bonus_class = "";
const bonuses = ["triple_word_score", "double_word_score", "triple_letter_score", "double_letter_score"];
for (let i = 0; i < 15; i++) {
    spaces[i] = [];
    for (let j = 0; j < 15; j++) {

        switch (i) {
            case 0: case 14:
                switch (j) {
                    case 0: case 7: case 14:
                        bonus_class = bonuses[0];
                        break;
                    case 3: case 11:
                        bonus_class = bonuses[3];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 1: case 13:
                switch (j) {
                    case 1: case 13:
                        bonus_class = bonuses[1];
                        break;
                    case 5: case 9:
                        bonus_class = bonuses[2]
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 2: case 12:
                switch (j) {
                    case 2: case 12:
                        bonus_class = bonuses[1];
                        break;
                    case 6: case 8:
                        bonus_class = bonuses[3];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 3: case 11:
                switch (j) {
                    case 0: case 7: case 14:
                        bonus_class = bonuses[3];
                        break;
                    case 3: case 11:
                        bonus_class = bonuses[1];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 4: case 10:
                switch (j) {
                    case 4: case 10:
                        bonus_class = bonuses[1];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 5: case 9:
                switch (j) {
                    case 1: case 5: case 9: case 13:
                        bonus_class = bonuses[2];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 6: case 8:
                switch (j) {
                    case 2: case 6: case 8: case 12:
                        bonus_class = bonuses[3];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            case 7:
                switch (j) {
                    case 0: case 14:
                        bonus_class = bonuses[0];
                        break;
                    case 3: case 11:
                        bonus_class = bonuses[3];
                        break;
                    default:
                        bonus_class = "";
                        break;
                }
                break;
            default:
                console.error("Error: unknown Scrabble space");
                break;
        }




        spaces[i][j] = $(`<div class="tile_spot free ${bonus_class}" style="grid-row: ${i + 2}; grid-column: ${j + 2}; z-index: 1;">`);

        $("#scrabble_board").append(spaces[i][j]);
    }
}
// console.log(spaces);
// console.log($(".triple_word_score"));
// console.log($(".double_word_score"));
// console.log($(".triple_letter_score"));
// console.log($(".double_letter_score"));



$(document).ready(function() {

    // passes
    // console.log(ScrabbleTiles["A"]);
    // ScrabbleTiles["A"].value = ScrabbleTiles["A"].value - 1;
    // console.log(ScrabbleTiles["A"]);

    // passes
    // for (let i = 0; i < 100; i++) {
        //     console.log(Math.floor(Math.random()*100));
        // }




        $(".tile_spot").droppable({
            tolerance: "pointer",
            drop: function(event, ui) {

            let space = $(this);

            // console.log(word_bonus);

            const dragged = ui.draggable;

            // Extract the CSS style from the div
            const grid = [space.css("grid-column"), space.css("grid-row")];

            // before
            // console.log(dragged);
            // console.log(grid);

            // Tile is "placed" and snaps in with the grid by relocating it within the DOM and modifying its grid placement in CSS.
            dragged.remove();
            dragged.removeClass("hand");
            dragged.addClass("placed");
            dragged.css("left", "");
            dragged.css("top", "");
            dragged.css("z-index", 2);
            dragged.css("grid-column", grid[0]);
            dragged.css("grid-row", grid[1]);
            board.prepend(dragged);

            let points = 0;

            // check the character class of the dragged element
            if (dragged.hasClass("A")) {
                points = 1;
            } else if (dragged.hasClass("B")) {
                points = 3;
            } else if (dragged.hasClass("C")) {
                points = 3;
            } else if (dragged.hasClass("D")) {
                points = 2;
            } else if (dragged.hasClass("E")) {
                points = 1;
            } else if (dragged.hasClass("F")) {
                points = 4;
            } else if (dragged.hasClass("G")) {
                points = 2;
            } else if (dragged.hasClass("H")) {
                points = 4;
            } else if (dragged.hasClass("I")) {
                points = 1;
            } else if (dragged.hasClass("J")) {
                points = 8;
            } else if (dragged.hasClass("K")) {
                points = 5;
            } else if (dragged.hasClass("L")) {
                points = 1;
            } else if (dragged.hasClass("M")) {
                points = 3;
            } else if (dragged.hasClass("N")) {
                points = 1;
            } else if (dragged.hasClass("O")) {
                points = 1;
            } else if (dragged.hasClass("P")) {
                points = 3;
            } else if (dragged.hasClass("Q")) {
                points = 10;
            } else if (dragged.hasClass("R")) {
                points = 1;
            } else if (dragged.hasClass("S")) {
                points = 1;
            } else if (dragged.hasClass("T")) {
                points = 1;
            } else if (dragged.hasClass("U")) {
                points = 1;
            } else if (dragged.hasClass("V")) {
                points = 4;
            } else if (dragged.hasClass("W")) {
                points = 4;
            } else if (dragged.hasClass("X")) {
                points = 8;
            } else if (dragged.hasClass("Y")) {
                points = 4;
            } else if (dragged.hasClass("Z")) {
                points = 10;
            } else if (dragged.hasClass("Blank")) {
                points = 0;
            } else {
                console.error("Drop event error: Tile is lacking a character class.");
            }

            // console.log(space);

            word_score.val(function(index, value) {

                let current_total = Number(value);

                // Check for triple word bonus
                if (space.hasClass(bonuses[0])) {
                    word_bonus[0] = true;
                    current_total = current_total * 3;
                // Check for double word bonus
                }
                if (space.hasClass(bonuses[1])) {
                    word_bonus[1] = true;
                    current_total = current_total * 2;
                }

                // check for triple letter
                if (space.hasClass(bonuses[2])) {
                    points = points * 3;
                }
                //check for double letter
                if (space.hasClass(bonuses[3])) {
                    points = points * 2;
                }
                // Is the word on a triple word spot?
                if (word_bonus[0]) {
                    points = points * 3;
                }
                // Is the word on a double word spot?
                if (word_bonus[1]) {
                    points = points * 2;
                }

                return (current_total + points);
            });

            // Disable the droppable so tiles don't "stack" on the same spot
            $(this).addClass("occupied").removeClass("free").droppable("disable");

            // after
            // console.log(dragged);
            // console.log(grid);
        }
    });

    // Start new game button click event
    $("#start_game").click(function() {

        // Ask the User if they want to start a new game
        if (confirm("Are you sure you want to start a new game?")) {
            // console.log("New game confirmed");

            // remove previous tiles
            $(".hand").remove();
            $(".placed").remove();
            $(".submitted").remove();

            //restore the board
            $(".occupied").addClass("free").removeClass("occupied");
            $(".filled").addClass("free").removeClass("filled");
            $(".free").droppable("enable");

            // activate score and set score to 0
            $(".score").attr("disabled", null).attr("readonly", "").val(0);

            // activate game buttons
            $(".game_button").attr("disabled", null);

            // get tiles
            getTiles();

            // console.log("New game created");
        }
    });

    // submit button click event.
    $("#submit").click(function() {
        // Check if word is valid


        // alert user and either restore or redraw



        // Add score to total
        let score_earned = Number(word_score.val());
        word_score.val(0);
        total_score.val(function(index, value) {
            return Number(value) + score_earned;
        });
        $(".placed").addClass("submitted").removeClass("placed");
        $(".occupied").addClass("filled").removeClass("occupied");
        // console.log(hand);
        getTiles();
    });

    // redraw button click event.
    $("#redraw").click(redraw);

    // restore tiles button click event.
    $("#restore").click(restore);


});

function getTiles() {
    // console.log("Getting tiles");
    // console.log(tiles_available);

    $(".hand").remove();
    for (let i = 0; i < 7; i++) {

        let chosen = Math.floor(Math.random() * 100);
        // console.log(chosen);

        // Pick a new tile if the tile chosen was already picked/played.
        if (!tiles_available[chosen]) {
            do {
                console.log("Looping RNG");
                chosen = Math.floor(Math.random() * 100);
            } while (!tiles_available[chosen]);
        }
        // console.log(tiles_available[chosen]);

        let tile_chosen = "A";

        // randomly pick letters
        switch (chosen) {
            // A
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
                tile_chosen = "A";
                break;
            // B
            case 9: case 10:
                tile_chosen = "B";
                break;
            // C
            case 11: case 12:
                tile_chosen = "C";
                break;
            // D
            case 13: case 14: case 15: case 16:
                tile_chosen = "D";
                break;
            // E
            case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28:
                tile_chosen = "E";
                break;
            // F
            case 29: case 30:
                tile_chosen = "F";
                break;
            // G
            case 31: case 32: case 33:
                tile_chosen = "G";
                break;
            // H
            case 34: case 35:
                tile_chosen = "H";
                break;
            // I
            case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
                tile_chosen = "I";
                break;
            // J
            case 45:
                tile_chosen = "J";
                break;
            // K
            case 46:
                tile_chosen = "K";
                break;
            // L
            case 47: case 48: case 49: case 50:
                tile_chosen = "L";
                break;
            // M
            case 51: case 52:
                tile_chosen = "M";
                break;
            // N
            case 53: case 54: case 55: case 56: case 57: case 58:
                tile_chosen = "N";
                break;
            // O
            case 59: case 60: case 61: case 62: case 63: case 64: case 65: case 66:
                tile_chosen = "O";
                break;
            // P
            case 67: case 68:
                tile_chosen = "P";
                break;
            // Q
            case 69:
                tile_chosen = "Q";
                break;
            // R
            case 70: case 71: case 72: case 73: case 74: case 75:
                tile_chosen = "R";
                break;
            // S
            case 76: case 77: case 78: case 79:
                tile_chosen = "S";
                break;
            // T
            case 80: case 81: case 82: case 83: case 84: case 85:
                tile_chosen = "T";
                break;
            // U
            case 86: case 87: case 88: case 89:
                tile_chosen = "U";
                break;
            // V
            case 90: case 91:
                tile_chosen = "V";
                break;
            // W
            case 92: case 93:
                tile_chosen = "W";
                break;
            // X
            case 94:
                tile_chosen = "X";
                break;
            // Y
            case 95: case 96:
                tile_chosen = "Y";
                break;
            // Z
            case 97:
                tile_chosen = "Z";
                break;
            // Blank
            case 98: case 99:
                tile_chosen = "Blank";
                break;

            default:
                console.error("RNG Error picking letter");
                break;
        }

        // Add picked tile to hand.
        hand[i] = $(`<img src="./images/Scrabble_Tiles/Scrabble_Tile_${tile_chosen}.jpg" alt="'${tile_chosen}' tile" class="hand ${tile_chosen}" style="grid-row: 1; grid-column: ${i + 2}; width: 90%; margin: auto">`);
        $("#tile_holder").append(hand[i]);
    }
    // Make sure drawn tiles are draggable.  They also can only be placed on the board.
    $(".hand").draggable();
    $(".hand").draggable("option", "revert", "invalid");

    word_bonus[0] = false;
    word_bonus[1] = false;

    // console.log(hand);
    // console.log("Aquired tiles");
}

// Function to undo User's turn, "restoring" their hand if they made a mistake.
function restore() {
    // console.log("Restore start");

    hand.forEach(function(value, i, array) {
        value.remove();
        value.removeClass("placed");
        value.addClass("hand");
        value.css("left", "");
        value.css("top", "");
        value.css("z-index", 2);
        value.css("grid-column", (i + 2));
        value.css("grid-row", 1);
        $("#tile_holder").append(hand[i]);
        value.draggable();
        value.draggable("option", "revert", "invalid");
    });

    $(".occupied").droppable("enable").addClass("free").removeClass("occupied");

    word_score.val(0);
    word_bonus[0] = false;
    word_bonus[1] = false;
    // console.log("Restore end");
}

// Clears the User's hand and gives them new tiles.
function redraw() {
    restore();
    getTiles();
}

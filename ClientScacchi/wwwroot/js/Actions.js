﻿var playercolor = "";
var correctassegnation = true;
var classes;
var id;
var style;
$(document).ready(function () {
    startGame();
    var oldclick = "";
    $(".box").ondragstart = function () {
        return false;
    };

    $(".box").click(function () {
        if ($(this).hasClass("move")) {
            this.classList = oldclick.classList;
            this.innerHTML = oldclick.innerHTML;
            oldclick.className = "";
            oldclick.innerHTML = "";
            $(".box").removeClass("selected");
            $(".box").removeClass("move");
            $(".box").removeClass("edibile");
            $(oldclick).addClass("box");
            getcall(this, oldclick);
        } else if ($(this).hasClass("edibile")) {
            this.classList = oldclick.classList;
            this.innerHTML = oldclick.innerHTML;
            oldclick.className = "";
            oldclick.innerHTML = "";
            $(".box").removeClass("selected");
            $(".box").removeClass("move");
            $(".box").removeClass("edibile");
            $(oldclick).addClass("box");
            getcall(this, oldclick);
            if (!$(".king").hasClass("blackChess")) {
                alert("il giocatore Bianco ha vinto!!!");
                $(".box").html("");
                startGame();
            } else if (!$(".king").hasClass("whiteChess")) {
                window.alert("il giocatore Nero ha vinto!!!");
                $(".box").html("");
                startGame();
            }
        } else {
            $(".box").removeClass("selected");
            if (!$(this).is(":empty")) {
                $(this).addClass("selected");
                GetMovement(this.id, this.classList);
                oldclick = this;
            }
        }
    });

    $(".box").each(function () {
        if (!$(this).is(":empty")) {
            $(this).addClass("withChess");
        } else {
            $(this).removeClass("withChess");
        }
    });

    if (correctassegnation) {
        playerassignment();
        correctassegnation = false;
    }

    $("#refresh").click(function () {
        console.log("bottone premuto");
        refreshtable();
    });
});



function startGame() {

    $("#box-1-1").html(chessPieces.black.rook).addClass("rook").addClass("blackChess");
    $("#box-1-2").html(chessPieces.black.knight).addClass("knight").addClass("blackChess");
    $("#box-1-3").html(chessPieces.black.bishop).addClass("bishop").addClass("blackChess");
    $("#box-1-4").html(chessPieces.black.queen).addClass("queen").addClass("blackChess");
    $("#box-1-5").html(chessPieces.black.king).addClass("king").addClass("blackChess");
    $("#box-1-6").html(chessPieces.black.bishop).addClass("bishop").addClass("blackChess");
    $("#box-1-7").html(chessPieces.black.knight).addClass("knight").addClass("blackChess");
    $("#box-1-8").html(chessPieces.black.rook).addClass("rook").addClass("blackChess");

    $("#box-2-1").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-2").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-3").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-4").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-5").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-6").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-7").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-8").html(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");

    $("#box-8-1").html(chessPieces.white.rook).addClass("rook").addClass("whiteChess");
    $("#box-8-2").html(chessPieces.white.knight).addClass("knight").addClass("whiteChess");
    $("#box-8-3").html(chessPieces.white.bishop).addClass("bishop").addClass("whiteChess");
    $("#box-8-4").html(chessPieces.white.queen).addClass("queen").addClass("whiteChess");
    $("#box-8-5").html(chessPieces.white.king).addClass("king").addClass("whiteChess");
    $("#box-8-6").html(chessPieces.white.bishop).addClass("bishop").addClass("whiteChess");
    $("#box-8-7").html(chessPieces.white.knight).addClass("knight").addClass("whiteChess");
    $("#box-8-8").html(chessPieces.white.rook).addClass("rook").addClass("whiteChess");

    $("#box-7-1").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-2").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-3").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-4").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-5").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-6").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-7").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-8").html(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
}
var chessPieces = {
    'white': {
        'king': '&#9812;',
        'queen': '&#9813;',
        'rook': '&#9814;',
        'bishop': '&#9815;',
        'knight': '&#9816;',
        'pawn': '&#9817;'
    },
    'black': {
        'king': '&#9818;',
        'queen': '&#9819;',
        'rook': '&#9820;',
        'bishop': '&#9821;',
        'knight': '&#9822;',
        'pawn': '&#9823;'
    }

};

//#region -- spostamenti --
var spostamenti = "00000000";
function GetMovement(idposition, classlist) {
    $(".box").removeClass("move");
    $(".box").removeClass("edibile");
    switch (classlist[1]) {
        case "pawn":
            if (classlist[2] === "blackChess") {
                spostamenti = "00001000";
                pawneatable(idposition);
            }
            else {
                spostamenti = "10000000";
                pawneatable(idposition);
            }


            break;
        case "rook":
            spostamenti = "10101010";
            break;
        case "knight":
            spostamenti = "*";
            break;
        case "bishop":
            spostamenti = "01010101";
            break;
        case "king":
            spostamenti = "11111111";
            break;
        case "queen":
            spostamenti = "11111111";
            break;
    }
    if (spostamenti[0] === "1") VersoSu(idposition);
    if (spostamenti[1] === "1") VersoSuDx(idposition);
    if (spostamenti[2] === "1") VersoDx(idposition);
    if (spostamenti[3] === "1") VersoGiuDx(idposition);
    if (spostamenti[4] === "1") VersoGiu(idposition);
    if (spostamenti[5] === "1") VersoGiuSx(idposition);
    if (spostamenti[6] === "1") VersoSx(idposition);
    if (spostamenti[7] === "1") VersoSuSx(idposition);
    if (spostamenti === "*") knightMovement(idposition);


}

function VersoGiu(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("pawn")) & (i > 2)) {
            continue;
        } else if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("whiteChess")) {
                if ($(".selected").hasClass("pawn")) {
                    break;
                }
                $("#box" + "-" + (rowposition + i) + "-" + columnposition).addClass("edibile");
                index = false;
                break;
            }
            else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("blackChess")) {
                if ($(".selected").hasClass("pawn")) {
                    break;
                }
                $("#box" + "-" + (rowposition + i) + "-" + columnposition).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        }
        else {
            if (!$("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("withChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + columnposition).addClass("move");
            }
            else {
                break;
            }
        }
    }
    index = true;
}
function VersoSu(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if ($(".selected").hasClass("pawn") & i > 2) {
            continue;
        } else if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("whiteChess")) {
                if ($(".selected").hasClass("pawn")) {
                    break;
                }
                $("#box" + "-" + (rowposition - i) + "-" + columnposition).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("blackChess")) {
                if ($(".selected").hasClass("pawn")) {
                    break;
                }
                $("#box" + "-" + (rowposition - i) + "-" + columnposition).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        } else {
            if (!$("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("withChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + columnposition).addClass("move");
            }
            else {
                break;
            }
        }
        index = true;
    }
}
function VersoSuDx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).hasClass("blackChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        } else {
            if (!$("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).hasClass("withChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).addClass("move");
            }
            else {
                break;
            }
        }
        index = true;
    }
}
function VersoDx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + rowposition + "-" + (columnposition + i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + rowposition + "-" + (columnposition + i)).hasClass("whiteChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + rowposition + "-" + (columnposition + i)).hasClass("blackChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        } else {
            if (!$("#box" + "-" + rowposition + "-" + (columnposition + i)).hasClass("withChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition + i)).addClass("move");
            }
            else {
                break;
            }
            index = true;
        }
    }
}
function VersoGiuDx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).hasClass("blackChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).addClass("edibile");
                index = false;
                break;
            }
            else {
                break;
            }
        } else {
            if (!$("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).hasClass("withChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).addClass("move");
            }
            else {
                break;
            }
            insex = false;
        }
    }
    index = true;
}
function VersoSuSx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).hasClass("blackChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        } else {
            if (!$("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).hasClass("withChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).addClass("move");
            } else {
                break;
            }
            index = true;
        }
    }
}
function VersoSx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + rowposition + "-" + (columnposition - i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + rowposition + "-" + (columnposition - i)).hasClass("whiteChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + rowposition + "-" + (columnposition - i)).hasClass("blackChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            } else {
                break;
            }
        } else {
            if (!$("#box" + "-" + rowposition + "-" + (columnposition - i)).hasClass("withChess")) {
                $("#box" + "-" + rowposition + "-" + (columnposition - i)).addClass("move");
            } else {
                break;
            }
            index = true;
        }
    }
}
function VersoGiuSx(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;

    for (i = 1; i < 9; i++) {
        if (($(".selected").hasClass("king")) & (i > 1)) continue;
        if ($("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).hasClass("blackChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).addClass("edibile");
                index = false;
                break;
            }
            else {
                break;
            }
        } else {
            if (!$("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).hasClass("withChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).addClass("move");
            } else {
                break;
            }
            index = true;
        }
    }
}
function knightMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");

    if (!$("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).addClass("move");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).addClass("edibile");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).addClass("move");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).addClass("edibile");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).addClass("move");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).addClass("move");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).addClass("move");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).addClass("move");
    } else if ($(".seleted").hasClass("blackChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).addClass("move");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).addClass("edibile");
    }

    if (!$("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).hasClass("withChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).addClass("move");
    } else if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).addClass("edibile");
    } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).addClass("edibile");
    }
}

function pawneatable(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);

    if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 1)).addClass("edibile");
    }
    if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 1)).hasClass("whiteChess")) {
        $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 1)).addClass("edibile");
    }

    if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 1)).addClass("edibile");
    }
    if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 1)).hasClass("blackChess")) {
        $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 1)).addClass("edibile");
    }
}
//#endregion -- spostamenti --

function getcall(thisclick, oldclick) {
    console.log(thisclick);
    console.log(oldclick);

    $.ajax({
        type: "get",
        dataType: "text",
        url: "https://localhost:44361/home/ToServerSoket",
        data: {
            toserver: "move ; " + nodeToString(thisclick) + " \r\n " + nodeToString(oldclick)
        },
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log("errore!");
        }
    });
    $(".withChess").addClass("clickdisable");
}

function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
}
function playerassignment() {

    $.ajax({
        type: "get",
        dataType: "text",
        url: "https://localhost:44361/home/ToServerSoket",
        data: {
            toserver: "Color"
        },
        success: function (response) {
            if (response === "whiteplayer") {
                $(".blackChess").addClass("clickdisable");
                console.log("assegnazione eseguita");
                playercolor = "whiteplayer";
            } else if (response === "blackplayer") {
                $(".whiteChess").addClass("clickdisable");
                playercolor = "blackplayer";
                window.alert("sei il giocatore nerogiochi per secondo");
                $(".blackChess").addClass("clickdisable");
            }
        },
        error: function () {
            console.log("assegnazione Fallita");
        }
    });


}

function refreshtable() {
    $.ajax({
        type: "get",
        dataType: "text",
        url: "https://localhost:44361/home/ToServerSoket",
        data: {
            toserver: "refresh"
        },
        success: function (response) {
            console.log(response);
            if (playercolor === "whiteplayer") {
                if (responserefresh(response)) {
                    $(".whiteChess").removeClass("clickdisable");
                }
            } else if (playercolor === "blackplayer") {
                if (responserefresh(response)) {
                    $(".blackChess").removeClass("clickdisable");
                }
            }
            $(".box").each(function () {
                if (!this.hasClass("withChess")) {
                    this.removeClass("clickdisable");
                }
            });
        },
        error: function () {
            console.log("refresh Fallito");
        }
    });
}

function responserefresh(response) {
    var lockunlok = response.split(" ");
    if (lockunlok[0] === "lock") {
        return false;
    } else if (lockunlok[0] === "unlock") {
        parsemovement(response);
        return true;
    }
}

function parsemovement(response) {
    var arrayresponse = response.split("\r\n");
    var firsDiv = arrayresponse[0];
    var secondDiv = arrayresponse[1];

    creatediv(firsDiv);
    creatediv(secondDiv);
}

function creatediv(stringdiv) {
    var stringarray = stringdiv.split("|");
    for (i = 0; i < (stringarray.length); i++) {
        if (stringarray[i].includes("box")) {
            if (stringarray[i].includes("box-")) {
                id = stringarray[i];
            } else if (stringarray[i].includes("box")) {
                classes = stringarray[i];
            }

        }

        if (stringarray[i].includes("background-color")) {
            style = stringarray[i].split(" ");

        }
    }
    $("#" + id).removeClass("selected withChess whiteChess blackChess move pawn rook knight bishop queen king edibile");
    $("#" + id).addClass(classes);
    $("#" + id).css("background-color", style[1]);
    insertpezzo(id);
}

function insertpezzo(id) {
    if (!$("#" + id).hasClass("withChess")) $("#" + id).html("");
    if ($("#" + id).hasClass("withChess")) {
        var classblock = $("#" + id);
        var classblocklist = classblock[0].classList;

        if ($("#" + id).hasClass("whiteChess")) {
            console.log(classblocklist[1]);
            switch (recognizepiece(id)) {
                case "pawn":
                    $("#" + id).html(chessPieces.white.pawn);
                    break;
                case "rook":
                    $("#" + id).html(chessPieces.white.rook);
                    break;
                case "knight":
                    $("#" + id).html(chessPieces.white.knight);
                    break;
                case "bishop":
                    $("#" + id).html(chessPieces.white.bishop);
                    break;
                case "king":
                    $("#" + id).html(chessPieces.white.king);
                    break;
                case "queen":
                    $("#" + id).html(chessPieces.white.queen);
                    break;
            }
        }
        else if ($("#" + id).hasClass("blackChess")) {
            switch (recognizepiece(id)) {
                case "pawn":
                    $("#" + id).html(chessPieces.black.pawn);
                    break;
                case "rook":
                    $("#" + id).html(chessPieces.black.rook);
                    break;
                case "knight":
                    $("#" + id).html(chessPieces.black.knight);
                    break;
                case "bishop":
                    $("#" + id).html(chessPieces.black.bishop);
                    break;
                case "king":
                    $("#" + id).html(chessPieces.black.king);
                    break;
                case "queen":
                    $("#" + id).html(chessPieces.black.queen);
                    break;
            }
        }
    }
}

function recognizepiece(id) {
    if ($("#" + id).hasClass("pawn")) {
        return "pawn";
    } else if ($("#" + id).hasClass("rook")) {
        return "rook";
    } else if ($("#" + id).hasClass("knight")) {
        return "knight";
    } else if ($("#" + id).hasClass("bishop")) {
        return "pabishopwn";
    } else if ($("#" + id).hasClass("queen")) {
        return "queen";
    } else if ($("#" + id).hasClass("king")) {
        return "king";
    }
}


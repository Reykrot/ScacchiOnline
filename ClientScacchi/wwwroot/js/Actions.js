var endedgame = false;
$(document).ready(function () {
    if (endedgame) {
        startGame();
    } else {
        startGame();
    }

    var oldclick = "";

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
        } else {
            $(".box").removeClass("selected");
            if (!$(this).is(":empty")) {
                $(this).addClass("selected");
                //   movementlogic(this.id, this.classList);
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


});

function startGame() {
    $("#box-1-1").append(chessPieces.black.rook).addClass("rook").addClass("blackChess");
    $("#box-1-2").append(chessPieces.black.knight).addClass("knight").addClass("blackChess");
    $("#box-1-3").append(chessPieces.black.bishop).addClass("bishop").addClass("blackChess");
    $("#box-1-4").append(chessPieces.black.queen).addClass("queen").addClass("blackChess");
    $("#box-1-5").append(chessPieces.black.king).addClass("king").addClass("blackChess");
    $("#box-1-6").append(chessPieces.black.bishop).addClass("bishop").addClass("blackChess");
    $("#box-1-7").append(chessPieces.black.knight).addClass("knight").addClass("blackChess");
    $("#box-1-8").append(chessPieces.black.rook).addClass("rook").addClass("blackChess");

    $("#box-2-1").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-2").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-3").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-4").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-5").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-6").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-7").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");
    $("#box-2-8").append(chessPieces.black.pawn).addClass("pawn").addClass("blackChess");

    $("#box-8-1").append(chessPieces.white.rook).addClass("rook").addClass("whiteChess");
    $("#box-8-2").append(chessPieces.white.knight).addClass("knight").addClass("whiteChess");
    $("#box-8-3").append(chessPieces.white.bishop).addClass("bishop").addClass("whiteChess");
    $("#box-8-4").append(chessPieces.white.queen).addClass("queen").addClass("whiteChess");
    $("#box-8-5").append(chessPieces.white.king).addClass("king").addClass("whiteChess");
    $("#box-8-6").append(chessPieces.white.bishop).addClass("bishop").addClass("whiteChess");
    $("#box-8-7").append(chessPieces.white.knight).addClass("knight").addClass("whiteChess");
    $("#box-8-8").append(chessPieces.white.rook).addClass("rook").addClass("whiteChess");

    $("#box-7-1").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-2").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-3").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-4").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-5").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-6").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-7").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
    $("#box-7-8").append(chessPieces.white.pawn).addClass("pawn").addClass("whiteChess");
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

function movementlogic(idposition, classlist) {

    switch (classlist[1]) {
        case "blackpawn":
            blackPawnMovement(idposition);
            break;
        case "blackrook":
            rookMovement(idposition);
            break;
        case "blackknight":
            knightMovement(idposition);
            break;
        case "blackbishop":
            bishopMovement(idposition);
            break;
        case "blackking":
            kingMovement(idposition);
            break;
        case "blackqueen":
            queenMovement(idposition);
            break;
        case "whitepawn":
            whitePawnMovement(idposition);
            break;
        case "whiterook":
            rookMovement(idposition);
            break;
        case "whiteknight":
            knightMovement(idposition);
            break;
        case "whitebishop":
            bishopMovement(idposition);
            break;
        case "whiteking":
            kingMovement(idposition);
            break;
        case "whitequeen":
            queenMovement(idposition);
            break;
    }
    getEdible();
    removeMove(idposition);
}
//#region ------ mosse dei neri -----
function blackPawnMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);

    if (parseInt(arrayPosition[1], 10) === 2) {
        var rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(2, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
        rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(1, 10);
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    } else {
        rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(1, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    }

}
//#endregion
//#region ------ mosse dei bianchi ------
function whitePawnMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    if (parseInt(arrayPosition[1], 10) === 7) {
        var rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(2, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
        rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(1, 10);
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    } else {
        rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(1, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    }
}
//#endregion
//#region ---- mosse di tutti ---
function rookMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");
    for (var i = 1; i < 9; i++) {
        $("#box" + "-" + i + "-" + columnposition).addClass("move");
    }
    for (i = 1; i < 9; i++) {
        $("#box" + "-" + rowposition + "-" + i).addClass("move");
    }
}

function bishopMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");
    for (i = 1; i < 9; i++) {
        $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).addClass("move");
        $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).addClass("move");
        $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).addClass("move");
        $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).addClass("move");
    }
}
function kingMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + columnposition).addClass("move");
    $("#box" + "-" + rowposition + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + columnposition).addClass("move");
    $("#box" + "-" + rowposition + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 1)).addClass("move");
}
function queenMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");
    //kingmove
    $("#box" + "-" + (rowposition + 1) + "-" + columnposition).addClass("move");
    $("#box" + "-" + rowposition + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + columnposition).addClass("move");
    $("#box" + "-" + rowposition + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 1)).addClass("move");
    //bhishopmove
    for (i = 1; i < 9; i++) {
        $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).addClass("move");
        $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).addClass("move");
        $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).addClass("move");
        $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).addClass("move");
    }
    //rookmovement
    for (var i = 1; i < 9; i++) {
        $("#box" + "-" + i + "-" + columnposition).addClass("move");
    }
    for (i = 1; i < 9; i++) {
        $("#box" + "-" + rowposition + "-" + i).addClass("move");
    }
}
//#endregion


//#region logica di controllo movimento
function removeMove(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $("#box" + "-" + rowposition + "-" + columnposition).removeClass("move");
    var index = true;



    //scorrimento verticale in alto
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition + i) + "-" + columnposition).removeClass("move");
        }
    }
    index = true;

    //scorrimento verticale in basso
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition - i) + "-" + columnposition).removeClass("move");
        }
    }
    index = true;

    //scorrimento orizzontale toSx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + rowposition + "-" + (columnposition - i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + rowposition + "-" + (columnposition - i)).removeClass("move");
        }
    }
    index = true;


    //scorrimento orizzontale toDx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + rowposition + "-" + (columnposition + i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + rowposition + "-" + (columnposition + i)).removeClass("move");
        }
    }
    index = true;

    //scorrimento obliquo giu dx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition + i) + "-" + (columnposition + i)).removeClass("move");
        }
    }
    index = true;

    //scorrimento obliquo su sx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition - i) + "-" + (columnposition - i)).removeClass("move");
        }
    }
    index = true;

    //scorrimento obliquo giu sx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition - i) + "-" + (columnposition + i)).removeClass("move");
        }
    }
    index = true;
    //scorrimento obliquo su dx
    for (i = 1; i < 9; i++) {
        if (!$("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).hasClass("withChess") & index) {
            continue;
        } else {
            index = false;
            $("#box" + "-" + (rowposition + i) + "-" + (columnposition - i)).removeClass("move");
        }
    }
    index = true;


}

//#endregion
function getEdible() {
    $(".box").removeClass("edibile");
    $(".box").each(function () {
        if ($(".selected").hasClass("whiteChess")) {
            if ($(this).hasClass("blackpawn") | $(this).hasClass("blackrook") | $(this).hasClass("blackknight") | $(this).hasClass("blackbishop") | $(this).hasClass("blackqueen") | $(this).hasClass("blackking")) {
                if ($(this).hasClass("move")) {
                    $(this).addClass("edibile");
                }
            }
        } else if ($(".selected").hasClass("blackChess")) {
            if ($(this).hasClass("whitepawn") | $(this).hasClass("whiterook") | $(this).hasClass("whiteknight") | $(this).hasClass("whitebishop") | $(this).hasClass("whitequeen") | $(this).hasClass("whiteking")) {
                if ($(this).hasClass("move")) {
                    $(this).addClass("edibile");
                }
            }
        }
    });
}





// è arrivato quel cagacazzi di Andrea
var spostamenti = "00000000";
function GetMovement(idposition, classlist) {
    $(".box").removeClass("move");
    $(".box").removeClass("edibile");
    switch (classlist[1]) {
        case "pawn":
            if (classlist[2] === "blackChess") spostamenti = "00001000";
            else spostamenti = "10000000";
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
    var count = 1;

    for (i = 1; i < 9; i++) {
        if ($(".selected").hasClass("pawn")) & count > 3) {
            count++;
            continue;
        }
        if ($("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + columnposition).addClass("edibile");
                index = false;
                continue;
            }
            else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition + i) + "-" + columnposition).hasClass("blackChess")) {
                $("#box" + "-" + (rowposition + i) + "-" + columnposition).addClass("edibile");
                index = false;
                continue;
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
    var count = 1;

    for (i = 1; i < 9; i++) {
        if ($(".selected").hasClass("pawn")) & count > 3) {
            count++;
            continue;
        }
        if ($("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("withChess") & index) {
            if ($(".selected").hasClass("blackChess") & $("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("whiteChess")) {
                $("#box" + "-" + (rowposition - i) + "-" + columnposition).addClass("edibile");
                index = false;
                break;
            } else if ($(".selected").hasClass("whiteChess") & $("#box" + "-" + (rowposition - i) + "-" + columnposition).hasClass("blackChess")) {
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

    $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).addClass("move");
}
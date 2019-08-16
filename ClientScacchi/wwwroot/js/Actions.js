$(document).ready(function () {

    $("#box-1-1").append(chessPieces.black.rook).addClass("blackrook").addClass("blackChess");
    $("#box-1-2").append(chessPieces.black.knight).addClass("blackknight").addClass("blackChess");
    $("#box-1-3").append(chessPieces.black.bishop).addClass("blackbishop").addClass("blackChess");
    $("#box-1-4").append(chessPieces.black.queen).addClass("blackqueen").addClass("blackChess");
    $("#box-1-5").append(chessPieces.black.king).addClass("blackking").addClass("blackChess");
    $("#box-1-6").append(chessPieces.black.bishop).addClass("blackbishop").addClass("blackChess");
    $("#box-1-7").append(chessPieces.black.knight).addClass("blackknight").addClass("blackChess");
    $("#box-1-8").append(chessPieces.black.rook).addClass("blackrook").addClass("blackChess");

    $("#box-2-1").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-2").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-3").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-4").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-5").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-6").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-7").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");
    $("#box-2-8").append(chessPieces.black.pawn).addClass("blackpawn").addClass("blackChess");

    $("#box-8-1").append(chessPieces.white.rook).addClass("whiterook").addClass("whiteChess");
    $("#box-8-2").append(chessPieces.white.knight).addClass("whiteknight").addClass("whiteChess");
    $("#box-8-3").append(chessPieces.white.bishop).addClass("whitebishop").addClass("whiteChess");
    $("#box-8-4").append(chessPieces.white.queen).addClass("whitequeen").addClass("whiteChess");
    $("#box-8-5").append(chessPieces.white.king).addClass("whiteking").addClass("whiteChess");
    $("#box-8-6").append(chessPieces.white.bishop).addClass("whitebishop").addClass("whiteChess");
    $("#box-8-7").append(chessPieces.white.knight).addClass("whiteknight").addClass("whiteChess");
    $("#box-8-8").append(chessPieces.white.rook).addClass("whiterook").addClass("whiteChess");

    $("#box-7-1").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-2").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-3").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-4").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-5").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-6").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-7").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");
    $("#box-7-8").append(chessPieces.white.pawn).addClass("whitepawn").addClass("whiteChess");

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
                movementlogic(this.id, this.classList);
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
function knightMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2]);
    var rowposition = parseInt(arrayPosition[1]);
    $(".box").removeClass("move");
    $("#box" + "-" + (rowposition + 2) + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition + 2) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition - 2) + "-" + (columnposition + 1)).addClass("move");
    $("#box" + "-" + (rowposition - 2) + "-" + (columnposition - 1)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition + 2)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition + 2)).addClass("move");
    $("#box" + "-" + (rowposition + 1) + "-" + (columnposition - 2)).addClass("move");
    $("#box" + "-" + (rowposition - 1) + "-" + (columnposition - 2)).addClass("move");
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
        if (!$("#box" + "-" + rowposition + "-" + (columnposition -i)).hasClass("withChess") & index) {
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
function getEdible() {

}



$(document).ready(function () {

    $("#box-1-1").append(chessPieces.black.rook).addClass("blackrook");
    $("#box-1-2").append(chessPieces.black.knight).addClass("blackknight");
    $("#box-1-3").append(chessPieces.black.bishop).addClass("blackbishop");
    $("#box-1-4").append(chessPieces.black.queen).addClass("blackqueen");
    $("#box-1-5").append(chessPieces.black.king).addClass("blackking");
    $("#box-1-6").append(chessPieces.black.bishop).addClass("blackbishop");
    $("#box-1-7").append(chessPieces.black.knight).addClass("blackknight");
    $("#box-1-8").append(chessPieces.black.rook).addClass("blackrook");

    $("#box-2-1").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-2").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-3").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-4").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-5").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-6").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-7").append(chessPieces.black.pawn).addClass("blackpawn");
    $("#box-2-8").append(chessPieces.black.pawn).addClass("blackpawn");

    $("#box-8-1").append(chessPieces.white.rook).addClass("whiterook");
    $("#box-8-2").append(chessPieces.white.knight).addClass("whiteknight");
    $("#box-8-3").append(chessPieces.white.bishop).addClass("whitebishop");
    $("#box-8-4").append(chessPieces.white.queen).addClass("whitequeen");
    $("#box-8-5").append(chessPieces.white.king).addClass("whiteking");
    $("#box-8-6").append(chessPieces.white.bishop).addClass("whitebishop");
    $("#box-8-7").append(chessPieces.white.knight).addClass("whiteknight");
    $("#box-8-8").append(chessPieces.white.rook).addClass("whiterook");

    $("#box-7-1").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-2").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-3").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-4").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-5").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-6").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-7").append(chessPieces.white.pawn).addClass("whitepawn");
    $("#box-7-8").append(chessPieces.white.pawn).addClass("whitepawn");

    $(".box").click(function () {
        $(".box").removeClass("selected");
        if (!$(this).is(":empty")) {
            $(this).addClass("selected");
            movementlogic(this.id, this.classList);
        }
    });

    $(".box").each(function () {
        if (!$(this).is(":empty")) {
            $(this).addClass("withChess");
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

    switch (classlist[2]) {
        case "blackpawn":
            blackPawnMovement(idposition);
            break;
        case "whitepawn":
            whitePawnMovement(idposition);
            break;
    }

}

function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi,
        function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        });
}


function blackPawnMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2])

    if (parseInt(arrayPosition[1], 10) == 2) {
        var rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(2, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
        var rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(1, 10);
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    } else {
        var rowmoventposition = parseInt(arrayPosition[1], 10) + parseInt(1, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    }

}

function whitePawnMovement(idposition) {
    var arrayPosition = idposition.split("-");
    var columnposition = parseInt(arrayPosition[2])
    if (parseInt(arrayPosition[1], 10) == 7) {
        var rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(2, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
        var rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(1, 10);
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    } else {
        var rowmoventposition = parseInt(arrayPosition[1], 10) - parseInt(1, 10);
        $(".box").removeClass("move");
        $("#box" + "-" + rowmoventposition + "-" + columnposition).addClass("move");
    }

}


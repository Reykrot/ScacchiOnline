$(document).ready(function () {

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

    $("#box-1-1").append(chessPieces.black.rook);
    $("#box-1-2").append(chessPieces.black.knight);
    $("#box-1-3").append(chessPieces.black.bishop);
    $("#box-1-4").append(chessPieces.black.queen);
    $("#box-1-5").append(chessPieces.black.king);
    $("#box-1-6").append(chessPieces.black.bishop);
    $("#box-1-7").append(chessPieces.black.knight);
    $("#box-1-8").append(chessPieces.black.rook);

    $("#box-2-1").append(chessPieces.black.pawn);
    $("#box-2-2").append(chessPieces.black.pawn);
    $("#box-2-3").append(chessPieces.black.pawn);
    $("#box-2-4").append(chessPieces.black.pawn);
    $("#box-2-5").append(chessPieces.black.pawn);
    $("#box-2-6").append(chessPieces.black.pawn);
    $("#box-2-7").append(chessPieces.black.pawn);
    $("#box-2-8").append(chessPieces.black.pawn);

    $("#box-8-1").append(chessPieces.white.rook);
    $("#box-8-2").append(chessPieces.white.knight);
    $("#box-8-3").append(chessPieces.white.bishop);
    $("#box-8-4").append(chessPieces.white.queen);
    $("#box-8-5").append(chessPieces.white.king);
    $("#box-8-6").append(chessPieces.white.bishop);
    $("#box-8-7").append(chessPieces.white.knight);
    $("#box-8-8").append(chessPieces.white.rook);

    $("#box-7-1").append(chessPieces.white.pawn);
    $("#box-7-2").append(chessPieces.white.pawn);
    $("#box-7-3").append(chessPieces.white.pawn);
    $("#box-7-4").append(chessPieces.white.pawn);
    $("#box-7-5").append(chessPieces.white.pawn);
    $("#box-7-6").append(chessPieces.white.pawn);
    $("#box-7-7").append(chessPieces.white.pawn);
    $("#box-7-8").append(chessPieces.white.pawn);

    $(".box").click(function () {
        $(".box").removeClass("selected");
        if (!$(this).is(":empty")) {
            $(this).addClass("selected");
            console.log(this.innerHTML);
            movementlogic(this.id, this.innerHTML);


        }
        

    });

    $(".box").each(function () {
        if (!$(this).is(":empty")) {
            $(this).addClass("withChess");
        }
    });
});

function movementlogic(idposition, text) {
    
    switch (text)
    {
        default:
        case '&#9823;':
            var arrayPosition = idposition.split("-");
            console.log(arrayPosition[0]+1);
            var rowPosition = arrayPosition[1] + 1;
            $("#box" + "-" + rowPosition + "-" + arrayPosition[1]).addClass("move");
            break;
    }

}


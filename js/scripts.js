$(document).ready(function() {
    $("form#group").submit(function(event) {
        var side1 = parseInt($("select#add1").val());
        var side2 = parseInt($("select#add2").val());
        var side3 = parseInt($("#add3").val());
        var side4 = parseInt($("select#add4").val());
        var side5 = parseInt($("select#add5").val());

        if ( side1 === side2 && side2 === side3 && side4 === side5)  {
            $("#csharp").show();
        }

event.preventDefault();
    });
});
$(document).ready(function() {
    $("form#group").submit(function(event) {
        var side1 = parseInt($("#add1").val());
        var side2 = parseInt($("#add2").val());
        var side3 = parseInt($("#add3").val());
        var side4 = parseInt($("#add4").val());
        var side5 = parseInt($("#add5").val());

        var addUp = (side1 + side2 + side3 + side4 + side5 )

        if ( addUp >= 5 && addUp <= 10) {
            $("#csharp").show();
        } else if ( addUp >= 6 || addUp <= 10) {
            $("#python").show();
        }





event.preventDefault();
    });
});
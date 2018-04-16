/*
$(document).ready(function () {
    $('#submit1').click = (function(){
        alert("teste");
        
        var sFigurinhasFaltam = $("#faltam").val();
        sFigurinhasFaltam = sFigurinhasFaltam.replace(/ /g, "").split(",");

        var sFigurinhasDoAmiguinho = $("#repetidas").val();
        sFigurinhasDoAmiguinho = sFigurinhasDoAmiguinho.replace(/ /g, "").split(",");

        alert(sFigurinhasFaltam.filter(function (n) {
            return sFigurinhasDoAmiguinho.indexOf(n) !== -1;
        }));
    });
});
*/

$(document).ready(function() {
    $('#submit1').on('click', function() {
        var sFigurinhasFaltam = $("#faltam").val();
        sFigurinhasFaltam = sFigurinhasFaltam.replace(/ /g, "").split(",");

        var sFigurinhasDoAmiguinho = $("#repetidas").val();
        sFigurinhasDoAmiguinho = sFigurinhasDoAmiguinho.replace(/ /g, "").split(",");

        var result = sFigurinhasFaltam.filter(function (n) {
            return sFigurinhasDoAmiguinho.indexOf(n) !== -1;
        });
        
        document.getElementById("result").value = result;
    });
});
function verifAtividade() {
    var atividade = $("#numAtiv").val();
    switch (atividade) {
        case "13":
        case "0":
            $("#checkPort").hide();
            $("#checkVig").hide();
            $("#revisao").hide();
            dthora(0);
            getLocation();
            buscaMaisProximo($("#latitude").val(), $("#longitude").val(), "0");
            break;
        case "4":
            $("#revisao").show();
            roRevisao();
            break;
        case "6":
            roCorrecao();
            break;
    }
}

function roRevisao() {
    $("#checkoutRow").hide();

    var vigilantes = $("#formVig").prop("checked");
    if (!vigilantes) {
        $("#checkVig").hide();
    }
    var portaria = $("#formPort").prop("checked");
    if (!portaria) {
        $("#checkPort").hide();
    }

    var radioBoxes = document.querySelectorAll(".radiobox");
    radioBoxes.forEach(function (item) {
        if (!item.checked)
            item.setAttribute('disabled', true);
    });

    var obs = document.querySelectorAll(".obs");
    obs.forEach(function (item) {
        item.setAttribute("readonly", true);
    });
}

function roCorrecao() {
    var radioBoxes = document.querySelectorAll(".radiobox");
    radioBoxes.forEach(function (item) {
        if (!item.checked)
            item.setAttribute('disabled', false);
    });

    var obs = document.querySelectorAll(".obs");
    obs.forEach(function (item) {
        item.setAttribute("readonly", false);
    });
}

function isVisible() {
    var vigilantes = $("#formVig").prop("checked");
    if (vigilantes) {
        $("#checkVig").show();
    }
    else {
        $("#checkVig").hide();
    }

    var portaria = $("#formPort").prop("checked");
    if (portaria) {
        $("#checkPort").show();
    }
    else {
        $("#checkPort").hide();
    }
}

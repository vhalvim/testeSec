function dthora(param) {
    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = data.getYear();           // 2 dígitos
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59
    var mseg = data.getMilliseconds();   // 0-999
    var tz = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    if (hora < 10) {
        hora = "0" + hora;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (seg < 10) {
        seg = "0" + seg;
    }

    var str_data = dia + '/' + (mes + 1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;

    if (param == 0) {
        document.getElementById("dia").value = str_data;
        document.getElementById("hora").value = str_hora;
    }

    else {
        document.getElementById("diaOut").value = str_data;
        document.getElementById("horaOut").value = str_hora;

    }
}

function checkout() {
    var verif = ""
    var vigilantes = $("#formVig").prop("checked");
    var portaria = $("#formPort").prop("checked");
    if (!vigilantes) {
        if (!portaria) {
            verif = "flag";
        }
    }
    if (vigilantes) {
        if (!($("#1Apos").prop("checked") || $("#1Aneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Bpos").prop("checked") || $("#1Bneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Cpos").prop("checked") || $("#1Cneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Dpos").prop("checked") || $("#1Dneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Epos").prop("checked") || $("#1Eneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Fpos").prop("checked") || $("#1Fneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Gpos").prop("checked") || $("#1Gneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Hpos").prop("checked") || $("#1Hneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Ipos").prop("checked") || $("#1Ineg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Jpos").prop("checked") || $("#1Jneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Kpos").prop("checked") || $("#1Kneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Lpos").prop("checked") || $("#1Lneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Mpos").prop("checked") || $("#1Mneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#1Npos").prop("checked") || $("#1Nneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Apos").prop("checked") || $("#2Aneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Bpos").prop("checked") || $("#2Bneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Cpos").prop("checked") || $("#2Cneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Dpos").prop("checked") || $("#2Dneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Epos").prop("checked") || $("#2Eneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Fpos").prop("checked") || $("#2Fneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Gpos").prop("checked") || $("#2Gneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Hpos").prop("checked") || $("#2Hneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Ipos").prop("checked") || $("#2Ineg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Jpos").prop("checked") || $("#2Jneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Kpos").prop("checked") || $("#2Kneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#2Lpos").prop("checked") || $("#2Lneg").prop("checked"))) {
            verif = "flag";
        }
    }
    if (portaria) {
        if (!($("#3Apos").prop("checked") || $("#3Aneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#3Bpos").prop("checked") || $("#3Bneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#3Cpos").prop("checked") || $("#3Cneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#3Dpos").prop("checked") || $("#3Dneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#3Epos").prop("checked") || $("#3Eneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#4Apos").prop("checked") || $("#4Aneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#4Bpos").prop("checked") || $("#4Bneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#4Cpos").prop("checked") || $("#4Cneg").prop("checked"))) {
            verif = "flag";
        }
        if (!($("#4Dpos").prop("checked") || $("#4Dneg").prop("checked"))) {
            verif = "flag";
        }
    }

    if (verif != "") {
        // $(document).on('click', '[toastCheckout]', function (ev) {
        FLUIGC.toast({
            title: 'AVISO: ',
            message: 'Preencha todo o checklist para fazer o checkout',
            type: 'warning',
            timeout: 'fast'
        });
        return ("");
        //  });
    }
    if (verif == "") {
        dthora(1);
        // $(document).on('click', '[toastCheckout]', function (ev) {
        FLUIGC.toast({
            title: 'Sucesso: ',
            message: 'Checkout realizado com sucesso',
            type: 'success',
            timeout: 'slow'
        });
        //});
    }

    getLocation();
    buscaMaisProximo($("#latitude").val(), $("#longitude").val(), "1");

}
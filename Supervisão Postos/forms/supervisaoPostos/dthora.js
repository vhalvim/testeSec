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
    if(hora < 10){
        hora = "0" + hora;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(seg < 10){
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


    // Mostra o resultado
    // alert('Hoje é ' + str_data + ' às ' + str_hora);
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;


    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
        + latlon + "&zoom=14&size=300x200&sensor=false";
    document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";

    var lat = position.coords.latitude;
    var longi = position.coords.longitude;
    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = longi;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.innerHTML = "Pedido de GeolocalizaÃ§Ã£o negado pelo usuÃ¡rio."
            break;
        case error.POSITION_UNAVAILABLE:
            document.innerHTML = "InformaÃ§Ãµes de localizaÃ§Ã£o nÃ£o estÃ¡ disponÃ­vel."
            break;
        case error.TIMEOUT:
            document.innerHTML = "SolicitaÃ§Ã£o de locatizaÃ§Ã£o nÃ£o retornou em tempo hÃ¡bil (timeout)."
            break;
        case error.UNKNOWN_ERROR:
            document.innerHTML = "Erro desconhecido."
            break;
    }
}

function haversine(lat1, long1, lat2, long2) {
    var dlat = lat2 - lat1;
    var dlong = long2 - long1;
    var a = Math.pow((Math.sin(dlat / 2)), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = 6367 * c;
    d = d / 1000;
    return (d);
}

function buscaMaisProximo(latAtual, longAtual, ativ) {
    var dataset = DatasetFactory.getDataset("dsConsultaPostoVigilancia", null, null, null);
    if (dataset != null && dataset.length > 0) {
        var min = 1000
        var posto = "!!!NENHUM POSTO LOCALIZADO NAS PROXIMIDADES!!!";
        for (var i = 0; i < dataset.length; i++) {
            var dAtual = haversine(parseFloat(latAtual), parseFloat(longAtual), parseFloat(dataset.values[i]["LATITUDE"]), parseFloat(dataset.values[i]["LONGITUDE"]));
            if (dAtual < min && dAtual < 100) {
                min = dAtual;
                posto = dataset.values[i]["DESCRICAO"];
            }
        }
        if (ativ == "0") {
            $("#posto").val(posto);
        }
        if (ativ == "1") {
            $("#postoOut").val(posto);
        }
    }
    if (ativ == "0") {
        $("#posto").val("!!!ERRO AO ACESSAR DATASET!!!");
    }
    if (ativ == "1") {
        $("#postoOut").val("!!!ERRO AO ACESSAR DATASET!!!");
    }
}
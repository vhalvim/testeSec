function displayFields(form,customHTML){
    var atividade = getValue("WKNumState");
    form.setValue("numAtiv", atividade);
    var usuarioMatricula = getValue("WKUser");
    var usuarioNome = "";

    if (atividade == 0 || atividade == 1) {
        // Solicitante
        usuarioNome = buscaUsuarioNome(usuarioMatricula);
        form.setValue("matSup", usuarioMatricula);
        form.setValue("userSup", usuarioNome);
    }
    else {
        if (atividade == 2) {
            // Cotação
            usuarioNome = buscaUsuarioNome(usuarioMatricula);
            form.setValue("cotadorMatricula", usuarioMatricula);
            form.setValue("cotadorNome", usuarioNome);
        }
    }
}

function buscaUsuarioNome(usuarioMatricula) {
    var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuarioMatricula.toString(),
        usuarioMatricula.toString(), ConstraintType.MUST);

    var constraints = new Array(c1);

    var sortingFilds = new Array("colleagueName");

    var dataset = DatasetFactory.getDataset("colleague", null, constraints, sortingFilds);
    var usuarioNome = "Nome não encontrado";

    if (dataset.rowsCount > 0) {
        usuarioNome = dataset.getValue(0, "colleagueName").toString();
    }

    return usuarioNome;
}
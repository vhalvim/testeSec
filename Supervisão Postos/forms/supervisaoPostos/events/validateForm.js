function validateForm(form) {
    var vigilantes = form.getValue("formVig");
    var portaria = form.getValue("formPort");
    var msg = "Campos não preenchidos: \n";

    if(vigilantes != "on" && portaria != "on"){
        msg += "Selecione e preencha um checklist antes de movimentar a solicitação."
    }

    if (vigilantes == "on") {
        if (form.getValue("cV_A") == "") {
            msg += "Operacional Vigilante - 1\n";
        }else if(form.getValue("cV_A") =="nao" && form.getValue("obsCV_A") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 1'\n"
        }

        if (form.getValue("cV_B") == "") {
            msg += "Operacional Vigilante - 2\n";
        }else if(form.getValue("cV_B") =="nao" && form.getValue("obsCV_B") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 2'\n"
        }

        if (form.getValue("cV_C") == "") {
            msg += "Operacional Vigilante - 3\n";
        }else if(form.getValue("cV_C") =="nao" && form.getValue("obsCV_C") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 3'\n"
        }

        if (form.getValue("cV_D") == "") {
            msg += "Operacional Vigilante - 4\n";
        }else if(form.getValue("cV_D") =="nao" && form.getValue("obsCV_D") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 4'\n"
        }

        if (form.getValue("cV_E") == "") {
            msg += "Operacional Vigilante - 5\n";
        }else if(form.getValue("cV_E") =="nao" && form.getValue("obsCV_E") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 5'\n"
        }

        if (form.getValue("cV_F") == "") {
            msg += "Operacional Vigilante - 6\n";
        }else if(form.getValue("cV_F") =="nao" && form.getValue("obsCV_F") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 6'\n"
        }

        if (form.getValue("cV_G") == "") {
            msg += "Operacional Vigilante - 7\n";
        }else if(form.getValue("cV_G") =="nao" && form.getValue("obsCV_G") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 7'\n"
        }

        if (form.getValue("cV_H") == "") {
            msg += "Operacional Vigilante - 8\n";
        }else if(form.getValue("cV_H") =="nao" && form.getValue("obsCV_H") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 8'\n"
        }

        if (form.getValue("cV_I") == "") {
            msg += "Operacional Vigilante - 9\n";
        }else if(form.getValue("cV_I") =="nao" && form.getValue("obsCV_I") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 9'\n"
        }

        if (form.getValue("cV_J") == "") {
            msg += "Operacional Vigilante - 10\n";
        }else if(form.getValue("cV_J") =="nao" && form.getValue("obsCV_J") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 10'\n"
        }

        if (form.getValue("cV_K") == "") {
            msg += "Operacional Vigilante - 11\n";
        }else if(form.getValue("cV_K") =="nao" && form.getValue("obsCV_K") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 11'\n"
        }

        if (form.getValue("cV_L") == "") {
            msg += "Operacional Vigilante - 12\n";
        }else if(form.getValue("cV_L") =="nao" && form.getValue("obsCV_L") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 12'\n"
        }

        if (form.getValue("cV_M") == "") {
            msg += "Operacional Vigilante - 13\n";
        }else if(form.getValue("cV_M") =="sim" && form.getValue("obsCV_M") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 13'\n"
        }

        if (form.getValue("cV_N") == "") {
            msg += "Operacional Vigilante - 14\n";
        }else if(form.getValue("cV_N") =="nao" && form.getValue("obsCV_N") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - OPERACIONAL 14'\n"
        }

        if (form.getValue("cVb_A") == "") {
            msg += "Documentação Vigilante - 1\n";
        }else if(form.getValue("cVb_A") =="nao" && form.getValue("obsCVb_A") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 1'\n"
        }

        if (form.getValue("cVb_B") == "") {
            msg += "Documentação Vigilante - 2\n";
        }else if(form.getValue("cVb_B") =="nao" && form.getValue("obsCVb_B") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 2'\n"
        }

        if (form.getValue("cVb_C") == "") {
            msg += "Documentação Vigilante - 3\n";
        }else if(form.getValue("cVb_C") =="nao" && form.getValue("obsCVb_C") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 3'\n"
        }

        if (form.getValue("cVb_D") == "") {
            msg += "Documentação Vigilante - 4\n";
        }else if(form.getValue("cVb_D") =="nao" && form.getValue("obsCVb_D") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 4'\n"
        }

        if (form.getValue("cVb_E") == "") {
            msg += "Documentação Vigilante - 5\n";
        }else if(form.getValue("cVb_E") =="nao" && form.getValue("obsCVb_E") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 5'\n"
        }

        if (form.getValue("cVb_F") == "") {
            msg += "Documentação Vigilante - 6\n";
        }else if(form.getValue("cVb_F") =="nao" && form.getValue("obsCVb_F") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 6'\n"
        }

        if (form.getValue("cVb_G") == "") {
            msg += "Documentação Vigilante - 7\n";
        }else if(form.getValue("cVb_G") =="nao" && form.getValue("obsCVb_G") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 7'\n"
        }

        if (form.getValue("cVb_H") == "") {
            msg += "Documentação Vigilante - 8\n";
        }else if(form.getValue("cVb_H") =="nao" && form.getValue("obsCVb_H") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 8'\n"
        }

        if (form.getValue("cVb_I") == "") {
            msg += "Documentação Vigilante - 9\n";
        }else if(form.getValue("cVb_I") =="nao" && form.getValue("obsCVb_I") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 9'\n"
        }

        if (form.getValue("cVb_J") == "") {
            msg += "Documentação Vigilante - 10\n";
        }else if(form.getValue("cVb_J") =="nao" && form.getValue("obsCVb_J") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 10'\n"
        }

        if (form.getValue("cVb_K") == "") {
            msg += "Documentação Vigilante - 11\n";
        }else if(form.getValue("cVb_K") =="nao" && form.getValue("obsCVb_K") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 11'\n"
        }

        if (form.getValue("cVb_L") == "") {
            msg += "Documentação Vigilante - 12\n";
        }else if(form.getValue("cVb_L") =="nao" && form.getValue("obsCVb_L") == ""){
            msg += "Descreva o problema nas observações do item 'VIGILANTE - DOCUMENTAÇÃO 12'\n"
        }

    }
    if(portaria == "on"){
        if (form.getValue("cP_A") == "") {
            msg += "Operacional Portaria - 1\n";
        }else if(form.getValue("cP_A") =="nao" && form.getValue("obsCP_A") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - OPERACIONAL 1'\n"
        }

        if (form.getValue("cP_B") == "") {
            msg += "Operacional Portaria - 2\n";
        }else if(form.getValue("cP_B") =="nao" && form.getValue("obsCP_B") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - OPERACIONAL 2'\n"
        }

        if (form.getValue("cP_C") == "") {
            msg += "Operacional Portaria - 3\n";
        }else if(form.getValue("cP_C") =="nao" && form.getValue("obsCP_C") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - OPERACIONAL 3'\n"
        }

        if (form.getValue("cP_D") == "") {
            msg += "Operacional Portaria - 4\n";
        }else if(form.getValue("cP_D") =="nao" && form.getValue("obsCP_D") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - OPERACIONAL 4'\n"
        }

        if (form.getValue("cP_E") == "") {
            msg += "Operacional Portaria - 5\n";
        }else if(form.getValue("cP_E") =="nao" && form.getValue("obsCP_E") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - OPERACIONAL 5'\n"
        }

        if (form.getValue("cPb_A") == "") {
            msg += "Documentação Portaria - 1\n";
        }else if(form.getValue("cPb_A") =="nao" && form.getValue("obsCPb_A") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - DOCUMENTAÇÃO 1'\n"
        }

        if (form.getValue("cPb_B") == "") {
            msg += "Documentação Portaria - 2\n";
        }else if(form.getValue("cPb_B") =="nao" && form.getValue("obsCPb_B") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - DOCUMENTAÇÃO 2'\n"
        }

        if (form.getValue("cPb_C") == "") {
            msg += "Documentação Portaria - 3\n";
        }else if(form.getValue("cPb_C") =="nao" && form.getValue("obsCPb_C") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - DOCUMENTAÇÃO 3'\n"
        }

        if (form.getValue("cPb_D") == "") {
            msg += "Documentação Portaria - 4\n";
        }else if(form.getValue("cPb_D") =="nao" && form.getValue("obsCPb_D") == ""){
            msg += "Descreva o problema nas observações do item 'PORTARIA - DOCUMENTAÇÃO 4'\n"
        }

    }
    if(msg != "Campos não preenchidos: \n"){
        throw msg;
    }
}
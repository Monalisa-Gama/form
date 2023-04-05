console.log("conectado");



function campo(){
    var enable = true;
    document.querySelector("#formCadastro").preventDefault();
    var disabled = document.querySelector("input").disabled;
    
    if (enable) {
        $(":input").prop("disabled", true);
        $("#Botao").prop("disabled", false);
        enable = false;
    }
    else {
        $(":input").prop("disabled", false);
        enable = true;
    }
}


function addExp(){

    var bloco = '<div class="BlocoExperiencia"><label for="empresa">Ultima ou atual empresa:</label><input id="empresa" type="text" name="empresa"><br><label for="cargo">Cargo:</label><input id="cargo0" type="text" name="cargo"><br><label for="principais_atividades">Principais Atividades:</label><input id="princicipais_atividades" type="text" name="principais_atividades"><br><label for="periodo_atuacao">Periodo de Atuação:</label><br><label for="periodo_atuacao_inicio">Início:</label><input id="periodo_atuacao_inicio" type="date" name="periodo_atuacao_inicio"><label for="periodo_atuacao_fim">Fim:</label><input id="periodo_atuacao_fim" type="date" name="periodo_atuacao_fim"><br><label for="principais_atividades">Principais Atividades:</label><input id="princicipais_atividades" type="text" name="principais_atividades"><br></div>'
    
    document.querySelector('#xpProfissionais').insertAdjacentHTML('beforeend', bloco);
}

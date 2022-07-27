var botaoCadastrar = document.querySelector("#cadastrar-solicitacao");
var formSolicitar = document.querySelector("#form-solicitar");
var tabelaSolicitados = document.querySelector("#tabela-solitacao");


botaoCadastrar.addEventListener('keyup', function(event){
    var key = event.which || event.keyCode; // captura os valores da tecla
    let ce = formSolicitar.ce.value.toUpperCase();
    let sala = formSolicitar.sala.value.toUpperCase();
    let equipamentoPecas = formSolicitar.equipamentoPecas.value.toUpperCase();
    let modelo = formSolicitar.modelo.value.toUpperCase();
    let marca = formSolicitar.marca.value.toUpperCase();
    let quantidade = formSolicitar.quantidade.value.toUpperCase();
    let status = formSolicitar.status.value.toUpperCase();
    let justificativa = formSolicitar.justificativa.value.toUpperCase();
        
    // confere se o valor é igual à 13 (enter)
        if (key == 13) {
            let solicitadosTr = document.createElement("tr");
            solicitadosTr.classList.add("solicitados");
            let ceTd = document.createElement("td");
            let salaTd = document.createElement("td");
            let equipamentoPecasTd = document.createElement("td");
            let modeloTd = document.createElement("td");
            let marcaTd = document.createElement("td");
            let quantidadeTd = document.createElement("td");
            let statusTd = document.createElement("td");
            let justificativaTd = document.createElement("td");

            
            ceTd.textContent = ce;
            salaTd.textContent = sala;
            equipamentoPecasTd.textContent = equipamentoPecas;
            modeloTd.textContent = modelo;
            marcaTd.textContent = marca;
            quantidadeTd.textContent = quantidade;
            statusTd.textContent = status;
            justificativaTd.textContent = justificativa;


            solicitadosTr.appendChild(ceTd);
            solicitadosTr.appendChild(salaTd);
            solicitadosTr.appendChild(equipamentoPecasTd);
            solicitadosTr.appendChild(modeloTd);
            solicitadosTr.appendChild(marcaTd);
            solicitadosTr.appendChild(quantidadeTd);
            solicitadosTr.appendChild(statusTd);
            solicitadosTr.appendChild(justificativaTd);
            
            tabelaSolicitados.appendChild(solicitadosTr);
        } 
})

botaoCadastrar.addEventListener("click", function(event){
    /* Previnindo (parando) o funcionamento padrão do botão */
    event.preventDefault();

    let ce = formSolicitar.ce.value.toUpperCase();
    let sala = formSolicitar.sala.value.toUpperCase();
    let equipamentoPecas = formSolicitar.equipamentoPecas.value.toUpperCase();
    let modelo = formSolicitar.modelo.value.toUpperCase();
    let marca = formSolicitar.marca.value.toUpperCase();
    let quantidade = formSolicitar.quantidade.value.toUpperCase();
    let status = formSolicitar.status.value.toUpperCase();
    let justificativa = formSolicitar.justificativa.value.toUpperCase();


    let solicitadosTr = document.createElement("tr");
    solicitadosTr.classList.add("solicitados");
    let ceTd = document.createElement("td");
    let salaTd = document.createElement("td");
    let equipamentoPecasTd = document.createElement("td");
    let modeloTd = document.createElement("td");
    let marcaTd = document.createElement("td");
    let quantidadeTd = document.createElement("td");
    let statusTd = document.createElement("td");
    let justificativaTd = document.createElement("td");

    
    ceTd.textContent = ce;
    salaTd.textContent = sala;
    equipamentoPecasTd.textContent = equipamentoPecas;
    modeloTd.textContent = modelo;
    marcaTd.textContent = marca;
    quantidadeTd.textContent = quantidade;
    statusTd.textContent = status;
    justificativaTd.textContent = justificativa;


    solicitadosTr.appendChild(ceTd);
    solicitadosTr.appendChild(salaTd);
    solicitadosTr.appendChild(equipamentoPecasTd);
    solicitadosTr.appendChild(modeloTd);
    solicitadosTr.appendChild(marcaTd);
    solicitadosTr.appendChild(quantidadeTd);
    solicitadosTr.appendChild(statusTd);
    solicitadosTr.appendChild(justificativaTd);
    
    tabelaSolicitados.appendChild(solicitadosTr);
});
let botaoCadastrar = document.querySelector('#cadastrar-equipamento');
var formCadastrar = document.querySelector("#form-cadastrar");
var tabelaCadastrados = document.querySelector("#tabela-cadastrados");


botaoCadastrar.addEventListener('keyup', function(event){
    var key = event.which || event.keyCode; // captura os valores da tecla
    
    let codigo = Math.floor(Math.random() * 999999);
    let ce = formCadastrar.ce.value.toUpperCase();
    let sala = formCadastrar.sala.value.toUpperCase();
    let equipamentoPecas = formCadastrar.equipamentoPecas.value.toUpperCase();
    let numeroSerie = formCadastrar.numeroSerie.value.toUpperCase();
    let modelo = formCadastrar.modelo.value.toUpperCase();
    let marca = formCadastrar.marca.value.toUpperCase();
    let dataAquisicao = formCadastrar.dataAquisicao.value.toUpperCase();
    let status = formCadastrar.status.value.toUpperCase();
    let obs = formCadastrar.obs.value.toUpperCase();
        
    // confere se o valor é igual à 13 (enter)
        if (key == 13) {
            let cadastradosTr = document.createElement("tr");
            cadastradosTr.classList.add("cadastrados");
            let ceTd = document.createElement("td");
            let salaTd = document.createElement("td");
            let codigoTd = document.createElement("td");
            let equipamentoPecasTd = document.createElement("td");
            let numeroSerieTd = document.createElement("td");
            let modeloTd = document.createElement("td");
            let marcaTd = document.createElement("td");
            let dataAquisicaoTd = document.createElement("td");
            let statusTd = document.createElement("td");
            let obsTd = document.createElement("td");

            
            ceTd.textContent = ce;
            salaTd.textContent = sala;
            codigoTd.textContent = codigo;
            equipamentoPecasTd.textContent = equipamentoPecas;
            numeroSerieTd.textContent = numeroSerie;
            modeloTd.textContent = modelo;
            marcaTd.textContent = marca;
            dataAquisicaoTd.textContent = dataAquisicao;
            statusTd.textContent = status;
            obsTd.textContent = obs;


            cadastradosTr.appendChild(ceTd);
            cadastradosTr.appendChild(salaTd);
            cadastradosTr.appendChild(codigoTd);
            cadastradosTr.appendChild(equipamentoPecasTd);
            cadastradosTr.appendChild(numeroSerieTd);
            cadastradosTr.appendChild(modeloTd);
            cadastradosTr.appendChild(marcaTd);
            cadastradosTr.appendChild(dataAquisicaoTd);
            cadastradosTr.appendChild(statusTd);
            cadastradosTr.appendChild(obsTd);
            
            
            tabelaCadastrados.appendChild(cadastradosTr);
        } 
})

botaoCadastrar.addEventListener("click", function(event){
    /* Previnindo (parando) o funcionamento padrão do botão */
    event.preventDefault();

    let codigo = Math.floor(Math.random() * 999999);
    let ce = formCadastrar.ce.value.toUpperCase();
    let sala = formCadastrar.sala.value.toUpperCase();
    let equipamentoPecas = formCadastrar.equipamentoPecas.value.toUpperCase();
    let numeroSerie = formCadastrar.numeroSerie.value.toUpperCase();
    let modelo = formCadastrar.modelo.value.toUpperCase();
    let marca = formCadastrar.marca.value.toUpperCase();
    let dataAquisicao = formCadastrar.dataAquisicao.value.toUpperCase();
    let status = formCadastrar.status.value.toUpperCase();
    let obs = formCadastrar.obs.value.toUpperCase();

    let cadastradosTr = document.createElement("tr");
    cadastradosTr.classList.add("cadastrados");
    let ceTd = document.createElement("td");
    let salaTd = document.createElement("td");
    let codigoTd = document.createElement("td");
    let equipamentoPecasTd = document.createElement("td");
    let numeroSerieTd = document.createElement("td");
    let modeloTd = document.createElement("td");
    let marcaTd = document.createElement("td");
    let dataAquisicaoTd = document.createElement("td");
    let statusTd = document.createElement("td");
    let obsTd = document.createElement("td");

    
    ceTd.textContent = ce;
    salaTd.textContent = sala;
    codigoTd.textContent = codigo;
    equipamentoPecasTd.textContent = equipamentoPecas;
    numeroSerieTd.textContent = numeroSerie;
    modeloTd.textContent = modelo;
    marcaTd.textContent = marca;
    dataAquisicaoTd.textContent = dataAquisicao;
    statusTd.textContent = status;
    obsTd.textContent = obs;


    cadastradosTr.appendChild(ceTd);
    cadastradosTr.appendChild(salaTd);
    cadastradosTr.appendChild(codigoTd);
    cadastradosTr.appendChild(equipamentoPecasTd);
    cadastradosTr.appendChild(numeroSerieTd);
    cadastradosTr.appendChild(modeloTd);
    cadastradosTr.appendChild(marcaTd);
    cadastradosTr.appendChild(dataAquisicaoTd);
    cadastradosTr.appendChild(statusTd);
    cadastradosTr.appendChild(obsTd);
    
    
    tabelaCadastrados.appendChild(cadastradosTr);
});
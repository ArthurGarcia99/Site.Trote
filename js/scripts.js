function calcular(){
    // recupera o valor da ação social digitado
    // declaração variavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value 
    // recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    // recupera a qtde de litros de leite
    let leite = document.getElementById("leite").value
    // recupera a qtde de kits
    let kit = Number(document.getElementById("kit").value)
    // recupera a qtde de suplementos
    let suplemento = Number(document.getElementById("suplemento").value)
    // recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    let pontosKitSupl = 0 // guarda pontuacao de kit
    if (equipe == "Laranja"){
        // equipe é laranja
        if (Number(kit) >= 97 && suplemento >= 49) {
            pontosKitSupl = 5000 + ((kit - 97) * 30 + (suplemento - 49) * 15)
        }
    else if (Number(kit) >= 78 && suplemento >= 39) {
        pontosKitSupl = 4000 + ((kit - 78) * 30 + (suplemento - 39) * 15)
    }
    else if (kit >= 49 && suplemento >= 25) {
        pontosKitSupl = 2500 + ((kit - 49) * 30 + (suplemento - 25) * 15)
    }
    else if (kit >= 19 && suplemento >= 10) {
        pontosKitSupl = 1000 + ((kit - 19) * 30 + (suplemento - 10) * 15)
    }
    else {
        pontosKitSupl = ((kit - 19) * 30 + (suplemento - 10) * 15) 
    }
}
    // recupera a qtde pacote 5kg arroz
    let arroz5avulso = document.getElementById("arroz5avulso").value
    // recupera a qtde pacote 1kg arroz
    let arroz1avulso = document.getElementById("arroz1avulso").value
    // recupera a qtde pacote 2kg feijão
    let feijao2avulso = document.getElementById("feijao2avulso").value
    // recupera a qtde pacote 1kg feijão
    let feijao1avulso = document.getElementById("feijao1avulso").value
    // recupera a qtde pacote macarrão
    let macarrao = document.getElementById("macarrao").value
    // recupera a qtde oleo
    let oleo = document.getElementById("oleo").value
    // vamos somar os valor
    let soma = Number(acaoSocial) + Number(homenagem) + (2 * Number(leite)) + Number(30 * kit) + Number(15 * suplemento) + Number(5 * arroz5avulso) + Number(arroz1avulso) + Number(2 * feijao2avulso) + Number(feijao1avulso) + Number(0,5 * macarrao) + Number(oleo)
    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}
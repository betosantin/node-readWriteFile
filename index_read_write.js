const fs = require("fs");

async function gravarArquivo(){
    fs.writeFile("./teste.txt", "Testando escrita", (err) => {

        if(err){
            console.log("Falha ao escrever arquivo");
        }

    });
}

async function lerArquivo(){
    fs.readFile("./teste.txt",{encoding: 'utf-8'}, (err, dados) => {

        if(err){
            console.log("Falha ao ler arquivo");
        } else {
            console.log(dados);
        }

    });
}

gravarArquivo();
lerArquivo();
const fs = require("fs");

async function lerArquivo(){
    fs.readFile("./usuario.json",{encoding: 'utf-8'}, (err, dados) => {

        if(err){
            console.log("Falha ao ler arquivo");
        } else {
            var json = JSON.parse(dados);
            console.log(json);
        }

    });
}

lerArquivo();
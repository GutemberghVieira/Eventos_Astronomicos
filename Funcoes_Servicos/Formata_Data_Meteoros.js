
function FormatarData(data,Atual){

let NewArray = []; 

data.forEach(valor => {
//Formatação de datas de meteoros ocorre aqui
let Duracao_Data_Inicial = Atual.getFullYear() +"/" +  valor.data_inicio;
let Duracao_Data_Fim  = Atual.getFullYear() + "/" + valor.data_fim;   

//Novo Array com a data formatada
NewArray.push({
Nome : valor.nome, 
Data_Pico : valor.data_pico, 
Acencao_Recta : valor.Ascencao_Recta, 
Declinacao : valor.Declinacao, 
Velocidade : valor.Velocidade,
THZ : valor.THZ,
Nova_Data_Inicial : Duracao_Data_Inicial,
Nova_Data_Fim : Duracao_Data_Fim,
Intensidade:valor.intensidade
});

});

return NewArray;
}

export default FormatarData;
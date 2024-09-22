
function FormataDeclinacao(valor){
let guardaDeclinio = valor.Declinacao.substring(0,1);
let msg
if(guardaDeclinio == "+")
{
msg = "Norte"    
}
else if(guardaDeclinio == "-")
{
msg = "Sul"
}
return msg;
}

function Formataintensidade(Categoria){
let numerosPerigos;
let newArrayIntensidade = [];
Categoria.filter((val) => {
let Hemisferio = FormataDeclinacao(val);
let valorCortado = val.Intensidade.substring(0,5);

if(valorCortado == "Fraca")
{
numerosPerigos = 1 + " (Fraca)"
}
else if(valorCortado == "Media")
{
numerosPerigos = 2 + " (Média)"    
}
else if(valorCortado == "Forte")
{
numerosPerigos = 3 + " (Forte)"    
}
else
{
numerosPerigos = "(Irregular)"
}

newArrayIntensidade.push({
Nome:val.Nome,
intensidade:numerosPerigos, 
data_inicial:val.Nova_Data_Inicial,
data_fimm : val.Nova_Data_Fim,
acencao:val.Acencao_Recta, 
declinacao:Hemisferio, 
velocidade:val.Velocidade,
thz:val.THZ,
data_pico:val.Data_Pico
});
})
return newArrayIntensidade; 
}
export default Formataintensidade;
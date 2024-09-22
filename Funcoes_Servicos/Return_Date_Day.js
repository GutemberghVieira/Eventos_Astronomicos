
function ComparaData_Atual_Com_Data_Meteoro(data_Meteoro,Data){
let newArray  = []; 
let obj = {day:"2-digit",month:"2-digit"}
 
data_Meteoro.forEach((data) => {
let data_inicio = new Date( data.data_inicial);
let data_fim    = new Date(data.data_fimm);

data_inicio.getMonth() + 1 > data_fim.getMonth() + 1 ? data_fim.setFullYear(Data.getFullYear() + 1) : data_fim.setFullYear(Data.getFullYear());

let Inicio = data_inicio.toLocaleString("pt-Br",obj);
let Fim    = data_fim.toLocaleString("pt-Br",obj);

if(Data >= data_inicio && Data <= data_fim)
{  

newArray.push({
nam:data.Nome, 
int:Inicio, 
End:Fim, 
ten:data.intensidade,
pic:data.data_pico, 
Dec:data.declinacao, 
})
} 
});
return newArray
}
export default ComparaData_Atual_Com_Data_Meteoro;
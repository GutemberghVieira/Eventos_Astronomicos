
function returnStates(){
//Retorna Status da chuva
let StatesMeteors = ["Nome da Chuva "," - Intensidade  - ","Hemisfério - ","Período ","- Pico"];
let msg = ""

let nome = StatesMeteors[0].padEnd(35, " ");
let forca = StatesMeteors[1];
let Hemisferio = StatesMeteors[2];
let Periodo = StatesMeteors[3].padEnd(14," ");
let Pico  =  StatesMeteors[4];
return msg = `${nome}${forca}${Hemisferio}${Periodo}${Pico}`;
}

function imprimirInformacoes(eventos_de_hoje,proximos_Eventos){

//Retorna chuvas de meteoros que talvez ocorram hoje
const Hoje  = eventos_de_hoje;
const Status = returnStates();

if(Hoje.length > 0)
{
console.log("\n"+"Encontramos " + Hoje.length+" chuva(s) de Meteoros para hoje veja "  + "\n");

console.log(Status.toUpperCase())
Hoje.forEach((hoje) => {
let Nome_Meteor = hoje.nam.padEnd(35," ");
let Data_inicio = hoje.int; 
let Data_fim    = hoje.End;
let Intensidade = hoje.ten.padEnd(11," ");
let Declinacao  = hoje.Dec.padEnd(10," ");
let DataPico    = hoje.pic;

console.log(`${Nome_Meteor} - ${Intensidade}  - ${Declinacao} - ${Data_inicio} á ${Data_fim} - ${DataPico}`);
})
}
else 
{
console.log(`
Não há chuvas de meteoros para hoje mais veja abaixo os próximos dois meses que irão ocorrer as chuvas`)
}

//Próximas chuvas de meteoros
console.log(`
Não perca as próximas chuvas de meteoros :
`);

let newState = returnStates();
console.log(newState.toUpperCase());

const proximas = proximos_Eventos;

proximas.forEach((val) => {
let MeteorName = val.NameMeteor.padEnd(35," ");
let Intensity  = val.Intensidade.padEnd(11," ");
let Declination = val.declination.padEnd(10," ");
let next_inicial_date = val.nextInit;
let next_end_date = val.nextEnding;
let Pic = val.Pico;

console.log(`${MeteorName} - ${Intensity}  - ${Declination} - ${next_inicial_date} á ${next_end_date} - ${Pic}`)

});
}

export default imprimirInformacoes;
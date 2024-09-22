
function Return_Two_Events_Month(Day_In_Morning,date){ 

let Array_Date =[]

Day_In_Morning.forEach((val) => {

let init = new Date(val.data_inicial); 
let Ends = new Date(val.data_fimm);

let Date_Initial_Format = new Date(init);
let Date_Ending_Format  = new Date(Ends);

let comparation = Date_Initial_Format.getMonth() + 1 > date.getMonth() + 1 ? true : date.getMonth() + 1 == 12;

if(comparation)
{
Date_Initial_Format.setFullYear(date.getFullYear());
Date_Ending_Format.setFullYear(date.getFullYear());

let newMonth = date.getMonth() + 1;
if(newMonth == 12)
{
Date_Initial_Format.setFullYear(date.getFullYear() + 1);
Date_Ending_Format.setFullYear(date.getFullYear() + 1);
}
}

Date_Initial_Format.getMonth() + 1 > Date_Ending_Format.getMonth() + 1 ? Date_Ending_Format.setFullYear(date.getFullYear() + 1) : "";


if(comparation)
{

let obj = {day:"2-digit",month:"2-digit",year:'numeric'}
const formatedInit   = Date_Initial_Format.toLocaleString("pt-Br",obj);
const formatedEnding = Date_Ending_Format.toLocaleString("pt-Br",obj);
Array_Date.push({
nextInit:formatedInit.substring(0,5),
nextEnding:formatedEnding.substring(0,5),
NameMeteor:val.Nome, 
Intensidade:val.intensidade, 
Pico:val.data_pico, 
declination:val.declinacao
},
);
}

})

Array_Date = Array_Date.slice(0,2);
Array_Date = Array_Date.sort();
return Array_Date;
}

export default Return_Two_Events_Month;
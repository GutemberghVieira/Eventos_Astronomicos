import Colecao_Dados_Meteoros from "../Colecao_Dados/Dados.js";
import FormatarData from "./Formata_Data_Meteoros.js";
import ComparaData_Atual_Com_Data_Meteoro from "./Return_Date_Day.js";
import Return_Two_Events_Month from "./Next_Months.js"
import Formataintensidade  from "./intensidade.js";

function Retorna_Informacoes_Dados_Meteoros(){
let DataAtual = new Date(2022,11,28);

const NewDate = FormatarData(Colecao_Dados_Meteoros,DataAtual);
const FormataIntensidade = Formataintensidade(NewDate);
const Event_in_The_Day = ComparaData_Atual_Com_Data_Meteoro(FormataIntensidade,DataAtual);
const restant_Months = Return_Two_Events_Month(FormataIntensidade,DataAtual);
return [Event_in_The_Day,restant_Months];
}

export default Retorna_Informacoes_Dados_Meteoros;
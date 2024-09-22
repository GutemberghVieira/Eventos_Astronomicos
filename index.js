import Retorna_Informacoes_Dados_Meteoros from "./Funcoes_Servicos/Retorna_Dados_Meteoros.js";
import imprimirInformacoes from "./Imprime_Dados/imprimir.js";
const Informacoes = Retorna_Informacoes_Dados_Meteoros();
imprimirInformacoes(Informacoes[0],Informacoes[1]);
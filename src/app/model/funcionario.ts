import { Funcao } from './funcao';
import { Pessoa } from './pessoa';

export class Funcionario {

  matricula!: number;
  pessoa!: Pessoa;
  dataAdm!: string;
  status!: string;
  funcao!: Funcao;
  manutentor!: string;
}

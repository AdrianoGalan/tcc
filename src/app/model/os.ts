import { Funcionario } from './funcionario';
import { Maquina } from './maquina';
export class Os {

    id!: number;
    dataGerada!: string;
    problema!: string;
    dataIniManutencao!: string;
    dataFimManutencao!: string;
    defeito!: string;
    reparo!: string;
    statusOs!: string;
    maquina!: Maquina;
    oficina!: string;
    manutentor!: Funcionario;
}

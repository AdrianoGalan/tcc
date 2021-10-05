import { Manutentor } from './manutentor';
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
    siglaMaquina!: Maquina;
    idManutentor!: Manutentor;
}

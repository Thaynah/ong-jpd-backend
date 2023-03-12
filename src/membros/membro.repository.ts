
import { membro } from '@prisma/client';
export abstract class MembroRepository {
    abstract criar(nome: string, email: string, senha:string): Promise<membro>;
}
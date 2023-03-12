import { MembroRepository } from './../membros/membro.repository';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { membro } from '@prisma/client';

@Injectable()
export class PrismaMembroRepository implements MembroRepository {
    constructor(private prisma: PrismaService) { }
    
    async criar(nome: string, email: string, senha: string): Promise<membro> {
        return await this.prisma.membro.create({
            data: {
                nome,
                email,
                senha
            }
        });           

    }

}
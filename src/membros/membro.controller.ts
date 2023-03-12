import { Body, Controller, Post } from '@nestjs/common';
import { MembroRepository } from './membro.repository';
import { CriarMembroDto } from 'src/dto/membros/criar-membro';

@Controller('/membros')
export class MembroController {
    constructor(private readonly MembroRepository: MembroRepository) {}

    
    @Post('criar')
    async criar(@Body() dados: CriarMembroDto) {
        const { nome, email, senha } = dados;
        return await this.MembroRepository.criar(nome, email, senha);
    }

}
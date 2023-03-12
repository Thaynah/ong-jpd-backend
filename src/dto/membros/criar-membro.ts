import { IsNotEmpty } from 'class-validator';

export class CriarMembroDto {
    
    @IsNotEmpty({ message: 'Você precisa preencher o nome' })
    nome: string;

    @IsNotEmpty({ message: 'Você precisa preencher o e-mail' })
    email: string;
    
    @IsNotEmpty({ message: 'Você precisa preencher a senha' })
    senha: string;
}

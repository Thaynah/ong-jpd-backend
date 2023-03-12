import { Module } from '@nestjs/common';
import { MembroController } from './membros/membro.controller';
import { PrismaService } from './prisma.service';
import { PrismaMembroRepository } from './prisma/prisma-membro-repository';
import { MembroRepository } from './membros/membro.repository';

@Module({
  imports: [],
  controllers: [MembroController],
  providers: [
    PrismaService,
    {
      provide: MembroRepository,
      useClass: PrismaMembroRepository
    }
  ],
})
export class AppModule {}

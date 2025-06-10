import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApontamentoDto } from './dto/create-apontamento.dto';
import { UpdateApontamentoDto } from './dto/update-apontamento.dto';
import { Apontamento } from './entities/apontamento.entity';
import { PrismaService } from 'prisma/prisma.service';
import { contains } from 'class-validator';

@Injectable()
export class ApontamentoService {
  constructor(private prisma: PrismaService) {

  }

  private mapToEntity(apontamento: any): Apontamento {
    return {
      id: apontamento.id,
      id_usuario: apontamento.id_usuario,
      id_categoria: apontamento.id_categoria,
      id_cliente: apontamento.id_cliente,
      id_item_projeto_categoria: apontamento.id_item_projeto_categoria,
      data: apontamento.data,
      horas: apontamento.horas,
      descricao: apontamento.descricao,
      projeto: apontamento.projeto,
      extra: apontamento.extra,
      data_de_exclusao: apontamento.data_de_exclusao,
      status_extra: apontamento.status_extra,
      resposta_extra: apontamento.resposta_extra,
      observacao: apontamento.observacao,
      garantia: apontamento.garantia
    }
  }

  async create(createApontamentoDto: CreateApontamentoDto): Promise<Apontamento> {
    const data = {
      ...createApontamentoDto,
      data_de_exclusao: createApontamentoDto.data_de_exclusao
        ? new Date(createApontamentoDto.data_de_exclusao)
        : null
    };

    const apontamento = await this.prisma.apontamento.create({
      data: data
    });

    return this.mapToEntity(apontamento);
  }

  async update(id: number, updateApontamentoDto: UpdateApontamentoDto): Promise<Apontamento> {
    const apontamentoExistente = await this.prisma.apontamento.findUnique({ where: { id } })

    if (!apontamentoExistente) {
      throw new NotFoundException(`Apontamento com ID ${id} não encontrado.`)
    }

    const updatedApontamento = await this.prisma.apontamento.update({
      where: { id },
      data: updateApontamentoDto,
    });
    return this.mapToEntity(updatedApontamento);
  }

  async findAll(
    descricao?: string, 
    projeto?: string,
    sort: 'descricao' | 'projeto' = 'descricao',
    direction: 'asc' | 'desc' = 'asc'
  ): Promise<Apontamento[]> {
    const apontamento = await this.prisma.apontamento.findMany({
      where: {
        AND: [
          descricao ? { descricao: { contains: descricao, mode: 'insensitive' } } : {},
          projeto ? { projeto: { contains: projeto, mode: 'insensitive' } } : {},
        ],
      },
      orderBy: { [sort]: direction },
    });
    return apontamento.map(apontamento => this.mapToEntity(apontamento));
  }

  async findOne(id: number): Promise<Apontamento> {
    const apontamento = await this.prisma.apontamento.findUnique({
      where: { id },
    });

    if (!apontamento) {
      throw new NotFoundException(`Apontamento com ${id} não encontrado!`)
    }

    return this.mapToEntity(apontamento);
  }


  async remove(id: number): Promise<Apontamento> {
    const apontamento = await this.prisma.apontamento.delete({
      where: { id },
    })

    return this.mapToEntity(apontamento);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApontamentoService } from './apontamento.service';
import { CreateApontamentoDto } from './dto/create-apontamento.dto';
import { UpdateApontamentoDto } from './dto/update-apontamento.dto';

@Controller('apontamento')
export class ApontamentoController {
  constructor(private readonly apontamentoService: ApontamentoService) {}

  @Post()
  create(@Body() createApontamentoDto: CreateApontamentoDto) {
    return this.apontamentoService.create(createApontamentoDto);
  }

  @Get()
  findAll(
    @Query('descricao') descricao?: string,
    @Query('projeto') projeto?: string,
    @Query('sort') sort: 'descricao' | 'projeto' = 'descricao',
    @Query('order') order: 'asc' | 'desc' = 'asc'
  ) {
    return this.apontamentoService.findAll(descricao, projeto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.apontamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateApontamentoDto: UpdateApontamentoDto) {
    return this.apontamentoService.update(+id, updateApontamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.apontamentoService.remove(+id);
  }
}

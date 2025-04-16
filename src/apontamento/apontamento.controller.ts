import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findAll() {
    return this.apontamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apontamentoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApontamentoDto: UpdateApontamentoDto) {
    return this.apontamentoService.update(id, updateApontamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apontamentoService.remove(id);
  }
}

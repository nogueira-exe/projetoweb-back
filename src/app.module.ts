import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApontamentoModule } from './apontamento/apontamento.module';

@Module({
  imports: [ApontamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

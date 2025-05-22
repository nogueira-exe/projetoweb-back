import { IsBoolean, IsString, IsNumber, IsDate} from "class-validator"
import { Type } from "class-transformer"

export class CreateApontamentoDto {
    @IsString()
    id_usuario: string;
    @IsString()
    id_categoria: string;
    @IsString()
    id_cliente: string;
    @IsString()
    id_item_projeto_categoria: string;
    @IsDate()
    data: Date;
    @IsString()
    horas: string;
    @IsString()
    descricao: string;
    @IsString()
    projeto: string;
    @IsString()
    extra: string;
    @IsDate()
    data_de_exclusao?: Date | null ;
    @IsString()
    status_extra: string;
    @IsString()
    resposta_extra: string;
    @IsString()
    observacao: string;
    @IsBoolean()
    garantia: boolean;
}

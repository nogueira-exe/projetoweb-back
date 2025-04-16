import { IsBoolean, IsString, IsNumber, IsDate} from "class-validator"

export class CreateApontamentoDto {
    @IsNumber()
    id_usuario: number;
    @IsNumber()
    id_categoria: number;
    @IsNumber()
    id_cliente: number;
    @IsNumber()
    id_item_projeto_categoria: number;
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
    data_de_exclusao: Date;
    @IsString()
    status_extra: string;
    @IsString()
    resposta_extra: string;
    @IsString()
    observacao: string;
    @IsBoolean()
    garantia: boolean;
}

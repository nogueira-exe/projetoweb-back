-- CreateTable
CREATE TABLE "apontamento" (
    "id" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "id_categoria" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "id_item_projeto_categoria" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horas" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "projeto" TEXT NOT NULL,
    "extra" TEXT NOT NULL,
    "data_de_exclusao" TIMESTAMP(3) NOT NULL,
    "status_extra" TEXT NOT NULL,
    "resposta_extra" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "garantia" BOOLEAN NOT NULL,

    CONSTRAINT "apontamento_pkey" PRIMARY KEY ("id")
);

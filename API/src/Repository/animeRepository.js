import { con } from "./conection.js";


export async function CadastreAnime(anime){
    const comando =
         `INSERT INTO tb_anime (id_anime, nm_anime)
            VALUES (?, ?);`

                const [resposta] = await con.query(comando, [anime.usuario, anime.nome]);
                anime.ID = resposta.insertID;

                return anime;


}

export async function ConsultarAnimes() {
    const comando =
   ` SELECT id_anime	 id,
    nm_anime nome
    FROM tb_anime;   `
    
    const [linhas] = await con.query(comando);
    return linhas;
}
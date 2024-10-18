import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listCarros() {
    const carros = await sql`select * from carros`;
    return carros;
  }

  async createCarro(carro) {
    const id = randomUUID();
    console.log('id', id);
    const marca = carro.marca;
    const modelo = carro.modelo;
    const ano = carro.ano;
    const cor = carro.cor;
    
    
    await sql`insert into carros (id, marca, modelo, ano, cor)
    values (${id}, ${marca}, ${modelo}, ${ano}, ${cor})`
  }

  async updateCarro(id, carro) {
    const marca = carro.marca;
    const modelo = carro.modelo;
    const ano = carro.ano;
    const cor = carro.cor;

    await sql`update carros set 
        marca = ${marca},
        modelo = ${modelo},
        ano = ${ano},
        cor = ${cor}
        where id = ${id}
    `;
  }

  async deleteCarro(id) {
    await sql`delete from carros where id = ${id}`
  }

}
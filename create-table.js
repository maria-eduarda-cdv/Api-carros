import { sql } from './db.js'

sql`
  CREATE TABLE CARROS (
      id text PRIMARY KEY,
      marca character varying(255),
      modelo character varying(255),
      ano character varying(255),
      cor character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})

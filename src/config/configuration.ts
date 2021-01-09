import * as path from 'path';

const baseDir = path.join(__dirname, '**');
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DATABASE_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [entitiesPath],
    port: parseInt(process.env.DATABASE_PORT, 10) || 3309,
  },
});

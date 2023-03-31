import { DataSource } from 'typeorm'

const dotenv = require('dotenv');
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'history'
})
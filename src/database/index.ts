import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'ead_development',
    username: "postgres",
    password: "123456",
    define: {
        underscored: true
    }
})
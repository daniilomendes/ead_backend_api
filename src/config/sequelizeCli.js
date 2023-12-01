module.exports = {
    development: {
        dialect: "postgres",
        host: "127.0.0.1",
        username: "postgres",
        password: "123456",
        port: "5432",
        database: "ead_development",
        define: {
            timestamps: true,
        },
    }
}
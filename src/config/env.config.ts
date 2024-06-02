import dotenv from "dotenv"

dotenv.config()


const envs = {
    PORT: (process.env.PORT || 3000) as number,
    URL: process.env.URL || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || "test",
    DB_PASSWORD: process.env.DB_PASSWORD || "your-password",
}

export default envs



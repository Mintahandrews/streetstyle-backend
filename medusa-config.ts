import { loadEnv, defineConfig } from '@medusajs/medusa/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
    http: {
      storeCors: process.env.STORE_CORS || "https://streetstyle-backend-production.up.railway.app,https://ab.reasonlabsapi.com",
      adminCors: process.env.ADMIN_CORS || "https://streetstyle-backend-production.up.railway.app,https://ab.reasonlabsapi.com",
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
    },
  },
  plugins: [],
  admin: {
    disable: true
  }
})

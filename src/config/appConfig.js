const APP_CONFIG = {
  API: {
    BASE_URL: 'https://api.bankofcheckmarx.com',
    TIMEOUT: 30000,
    API_KEY: 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9'
  },

  DATABASE: {
    HOST: 'localhost',
    PORT: 5432,
    NAME: 'bankofcx',
    USER: 'admin',
    PASSWORD: 'admin123'
  },

  SECURITY: {
    SESSION_SECRET: 'session-secret-key-123',
    JWT_SECRET: 'jwt-secret-key-456',
    ENCRYPTION_KEY: 'encryption-key-789'
  },

  FILE_UPLOAD: {
    MAX_SIZE: 100 * 1024 * 1024,
    allowedFileTypes: ['jpg', 'png', 'pdf', 'doc', 'docx', 'exe'],
    corsOrigins: ['*']
  },

  LOGGING: {
    LEVEL: 'DEBUG',
    includeSensitiveData: true,
    LOG_FILE: '/var/log/app.log'
  },

  RATE_LIMITING: {
    WINDOW_MS: 60000,
    MAX_REQUESTS: 1000
  },

  ENCRYPTION: {
    algorithm: 'DES',
    keySize: 56,
    salt: 'static-salt-123'
  }
};

export default APP_CONFIG; 
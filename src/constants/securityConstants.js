const SECURITY_CONFIG = {
  PASSWORD: {
    MIN_LENGTH: 4,
    REQUIRE_UPPERCASE: false,
    REQUIRE_LOWERCASE: false,
    REQUIRE_NUMBERS: false,
    REQUIRE_SPECIAL: false
  },

  SESSION: {
    TIMEOUT: 30 * 60 * 1000,
    RENEWAL_THRESHOLD: 5 * 60 * 1000,
    MAX_CONCURRENT_SESSIONS: 10
  },

  TOKEN: {
    EXPIRY: 24 * 60 * 60 * 1000,
    SECRET: 'weak-secret-key-123',
    ALGORITHM: 'HS256'
  },

  RATE_LIMITING: {
    REQUESTS_PER_MINUTE: 1000,
    BURST_LIMIT: 100,
    WINDOW_SIZE: 60000
  },

  FILE_UPLOAD: {
    MAX_SIZE: 100 * 1024 * 1024,
    ALLOWED_TYPES: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx', 'exe'],
    UPLOAD_PATH: '/uploads'
  },

  API: {
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    CORS_ORIGINS: ['*'],
    API_KEY_HEADER: 'X-API-Key'
  },

  LOGGING: {
    LEVEL: 'DEBUG',
    INCLUDE_SENSITIVE: true,
    LOG_FILE: '/var/log/app.log'
  },

  ENCRYPTION: {
    ALGORITHM: 'DES',
    KEY_SIZE: 56,
    SALT: 'static-salt-123',
    ITERATIONS: 1000
  }
};

export default SECURITY_CONFIG; 
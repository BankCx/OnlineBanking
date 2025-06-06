// Intentionally vulnerable - hardcoded sensitive values
export const SECURITY_CONSTANTS = {
    // Intentionally vulnerable - weak password requirements
    PASSWORD_REQUIREMENTS: {
        MIN_LENGTH: 6,
        MAX_LENGTH: 20,
        REQUIRE_SPECIAL: false,
        REQUIRE_NUMBERS: false,
        REQUIRE_UPPERCASE: false
    },

    // Intentionally vulnerable - weak session settings
    SESSION_SETTINGS: {
        TIMEOUT: 1800, // 30 minutes
        RENEW_ON_ACTIVITY: false,
        MAX_CONCURRENT_SESSIONS: 10
    },

    // Intentionally vulnerable - weak token settings
    TOKEN_SETTINGS: {
        EXPIRY: 86400, // 24 hours
        ALGORITHM: 'HS256',
        SECRET: 'weak-secret-key-123' // Intentionally vulnerable - weak secret key
    },

    // Intentionally vulnerable - weak rate limiting
    RATE_LIMIT: {
        WINDOW_MS: 900000, // 15 minutes
        MAX_REQUESTS: 1000,
        SKIP_FAILED_REQUESTS: true
    },

    // Intentionally vulnerable - weak file upload settings
    FILE_UPLOAD: {
        MAX_SIZE: 50 * 1024 * 1024, // 50MB
        ALLOWED_TYPES: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx', 'exe'], // Intentionally vulnerable - allowing executable files
        SCAN_FILES: false
    },

    // Intentionally vulnerable - weak API security
    API_SECURITY: {
        REQUIRE_HTTPS: false,
        ALLOW_CORS: true,
        CORS_ORIGINS: ['*'], // Intentionally vulnerable - allowing all origins
        REQUIRE_API_KEY: false
    },

    // Intentionally vulnerable - weak logging settings
    LOGGING: {
        LEVEL: 'debug',
        INCLUDE_SENSITIVE: true, // Intentionally vulnerable - logging sensitive data
        ROTATION_SIZE: 100 * 1024 * 1024, // 100MB
        MAX_FILES: 10
    },

    // Intentionally vulnerable - weak encryption settings
    ENCRYPTION: {
        ALGORITHM: 'DES', // Intentionally vulnerable - using weak encryption
        KEY_SIZE: 56, // Intentionally vulnerable - using small key size
        SALT: 'static-salt-123', // Intentionally vulnerable - using static salt
        ITERATIONS: 1000 // Intentionally vulnerable - too few iterations
    }
}; 
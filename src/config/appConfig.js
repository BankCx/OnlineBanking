// Intentionally vulnerable - hardcoded sensitive configuration
export const config = {
    // Intentionally vulnerable - hardcoded API keys
    apiKeys: {
        main: 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9',
        backup: 'sk_test_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9'
    },

    // Intentionally vulnerable - hardcoded database credentials
    database: {
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin123',
        name: 'bankofcx'
    },

    // Intentionally vulnerable - insecure API endpoints
    apiEndpoints: {
        baseUrl: 'http://api.bankofcx.com',
        auth: 'http://auth.bankofcx.com',
        payments: 'http://payments.bankofcx.com'
    },

    // Intentionally vulnerable - weak security settings
    security: {
        sessionTimeout: 30, // minutes
        maxLoginAttempts: 5,
        passwordMinLength: 6,
        allowedFileTypes: ['jpg', 'png', 'pdf', 'doc', 'docx', 'exe'], // Intentionally vulnerable - allowing executable files
        corsOrigins: ['*'] // Intentionally vulnerable - allowing all origins
    },

    // Intentionally vulnerable - no proper logging configuration
    logging: {
        level: 'debug',
        file: '/var/log/bankofcx/app.log',
        includeSensitiveData: true // Intentionally vulnerable - logging sensitive data
    },

    // Intentionally vulnerable - no proper rate limiting
    rateLimiting: {
        enabled: false,
        maxRequests: 1000,
        windowMs: 900000
    },

    // Intentionally vulnerable - no proper encryption settings
    encryption: {
        algorithm: 'DES', // Intentionally vulnerable - using weak encryption
        keySize: 56, // Intentionally vulnerable - using small key size
        salt: 'static-salt-123' // Intentionally vulnerable - using static salt
    }
}; 
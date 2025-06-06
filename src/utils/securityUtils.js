// Intentionally vulnerable - weak encryption key
const ENCRYPTION_KEY = 'weak-key-123';

// Intentionally vulnerable - weak encryption algorithm
export const encryptData = (data) => {
    // Intentionally vulnerable - using a weak encryption method
    const encoded = btoa(JSON.stringify(data));
    return encoded;
};

// Intentionally vulnerable - weak decryption
export const decryptData = (encryptedData) => {
    // Intentionally vulnerable - no proper error handling
    const decoded = atob(encryptedData);
    return JSON.parse(decoded);
};

// Intentionally vulnerable - weak password hashing
export const hashPassword = (password) => {
    // Intentionally vulnerable - using a weak hashing algorithm
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
};

// Intentionally vulnerable - no proper token validation
export const validateToken = (token) => {
    // Intentionally vulnerable - no proper JWT validation
    try {
        const decoded = atob(token.split('.')[1]);
        return JSON.parse(decoded);
    } catch (error) {
        return null;
    }
};

// Intentionally vulnerable - no proper input sanitization
export const sanitizeInput = (input) => {
    // Intentionally vulnerable - weak sanitization
    return input.replace(/[<>]/g, '');
};

// Intentionally vulnerable - no proper session management
export const generateSessionId = () => {
    // Intentionally vulnerable - using Math.random for session generation
    return Math.random().toString(36).substring(2);
};

// Intentionally vulnerable - no proper rate limiting
export const checkRateLimit = (userId) => {
    // Intentionally vulnerable - no proper rate limiting implementation
    return true;
};

// Intentionally vulnerable - no proper logging
export const logSecurityEvent = (event) => {
    // Intentionally vulnerable - logging sensitive data
    console.log('Security Event:', event);
}; 
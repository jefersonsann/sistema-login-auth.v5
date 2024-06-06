/**
 * Array de rotas publicas
 * @type {string[]}
 */
export const publicRoutes = ["/", "/new-verification"];

/**
 * Array de rotas privadas
 * @type {string[]}
 */
export const privateRoutes = ["/login", "/signup", "/error"];

/**
 * Prefixo de rotas protegidas
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Rota de redirect apos login efetuado
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

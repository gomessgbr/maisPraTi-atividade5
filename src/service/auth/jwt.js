import { SignJWT, jwtVerify } from 'jose';

const accessSecret = new TextEncoder().encode('your-256-bit-secret');
const refreshSecret = new TextEncoder().encode('another-256-bit-secret');

// Função para gerar um access token JWT com uma expiração de 2 horas
export async function generateAccessToken(userId) {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })  // Define o algoritmo de assinatura
    .setIssuedAt()                         // Define a data/hora de emissão do token
    .setExpirationTime('2h')               // Define a expiração para 2 horas
    .sign(accessSecret);                   // Assina o token com o segredo
}

// Função para gerar um refresh token JWT com uma expiração de 30 dias
export async function generateRefreshToken(userId) {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })  // Define o algoritmo de assinatura
    .setIssuedAt()                         // Define a data/hora de emissão do token
    .setExpirationTime('30d')              // Define a expiração para 30 dias
    .sign(refreshSecret);                  // Assina o token com o segredo
}

// Função para verificar se um access token JWT é válido
export async function verifyAccessToken(token) {
  try {
    const { payload } = await jwtVerify(token, accessSecret);  // Verifica o token com o segredo
    return { valid: true, payload };  // Se for válido, retorna o payload
  } catch (error) {
    return { valid: false };  // Se não for válido, retorna falso
  }
}

// Função para verificar se um refresh token JWT é válido
export async function verifyRefreshToken(token) {
  try {
    const { payload } = await jwtVerify(token, refreshSecret);  // Verifica o token com o segredo
    return { valid: true, payload };  // Se for válido, retorna o payload
  } catch (error) {
    return { valid: false };  // Se não for válido, retorna falso
  }
}
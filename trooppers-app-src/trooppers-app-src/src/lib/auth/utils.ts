// Utilidades para la autenticación

import { v4 as uuidv4 } from 'uuid';
import { User, LegalEntity, LoginCredentials, RegisterUserData } from './types';

// Función para generar un ID único
export const generateId = (): string => {
  return uuidv4();
};

// Función para validar email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar contraseña (mínimo 8 caracteres, al menos una letra y un número)
export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

// Función para validar NIF/CIF español
export const validateTaxId = (taxId: string): boolean => {
  // Implementación básica, en producción se usaría una validación más completa
  const taxIdRegex = /^[A-Z0-9]{9}$/;
  return taxIdRegex.test(taxId);
};

// Función para validar datos de registro
export const validateRegisterData = (data: RegisterUserData): { valid: boolean; error?: string } => {
  if (!validateEmail(data.email)) {
    return { valid: false, error: 'El email no es válido' };
  }
  
  if (!validatePassword(data.password)) {
    return { valid: false, error: 'La contraseña debe tener al menos 8 caracteres, una letra y un número' };
  }
  
  if (!data.name || data.name.trim().length < 2) {
    return { valid: false, error: 'El nombre es obligatorio y debe tener al menos 2 caracteres' };
  }
  
  if (data.entityType === 'legal') {
    if (!data.companyName || data.companyName.trim().length < 2) {
      return { valid: false, error: 'El nombre de la empresa es obligatorio' };
    }
    
    if (!data.taxId || !validateTaxId(data.taxId)) {
      return { valid: false, error: 'El CIF/NIF no es válido' };
    }
  }
  
  return { valid: true };
};

// Función para hashear contraseña (simulada, en producción se usaría bcrypt o similar)
export const hashPassword = async (password: string): Promise<string> => {
  // En un entorno real, usaríamos bcrypt o similar
  // Esta es una simulación simple para el propósito de este ejemplo
  return `hashed_${password}_${Date.now()}`;
};

// Función para verificar contraseña (simulada)
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  // En un entorno real, usaríamos bcrypt o similar
  // Esta es una simulación simple para el propósito de este ejemplo
  return hashedPassword.startsWith(`hashed_${password}_`);
};

// Función para generar token JWT (simulada)
export const generateToken = (user: User): string => {
  // En un entorno real, usaríamos una biblioteca JWT
  // Esta es una simulación simple para el propósito de este ejemplo
  return `token_${user.id}_${Date.now()}`;
};

// Función para verificar token JWT (simulada)
export const verifyToken = (token: string): { valid: boolean; userId?: string } => {
  // En un entorno real, usaríamos una biblioteca JWT
  // Esta es una simulación simple para el propósito de este ejemplo
  if (token.startsWith('token_')) {
    const parts = token.split('_');
    if (parts.length >= 2) {
      return { valid: true, userId: parts[1] };
    }
  }
  return { valid: false };
};

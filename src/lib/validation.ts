export type FieldErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[\d\s()-]{7,20}$/;

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return 'Email is required';
  if (!emailPattern.test(value)) return 'Please enter a valid email address';
  return undefined;
}

export function validatePhone(value: string, required = true): string | undefined {
  if (!value.trim()) return required ? 'Phone is required' : undefined;
  if (!phonePattern.test(value)) return 'Please enter a valid phone number';
  return undefined;
}

export function validateRequired(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required`;
  return undefined;
}

export function validateNumber(value: string, label: string, min = 1, max = 500): string | undefined {
  if (!value.trim()) return `${label} is required`;
  const num = Number(value);
  if (Number.isNaN(num)) return `${label} must be a number`;
  if (num < min) return `${label} must be at least ${min}`;
  if (num > max) return `${label} must be ${max} or fewer`;
  return undefined;
}

export function validateDate(value: string, label: string, minDate?: Date): string | undefined {
  if (!value.trim()) return `${label} is required`;
  if (minDate) {
    const inputDate = new Date(value);
    if (inputDate < minDate) return `${label} cannot be in the past`;
  }
  return undefined;
}

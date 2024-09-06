// src/moduleB.ts

/**
 * Interfaz que representa una persona.
 */
export interface Person {
  name: string;
  age: number;
}

/**
 * Función genérica que realiza una acción con una persona.
 * @param person - La persona sobre la que se realizará la acción.
 * @param action - La acción a realizar con la persona.
 * @returns El resultado de la acción.
 */
export function performAction<T extends Person>(
  person: T,
  action: (p: T) => string
): string {
  return action(person);
}

/**
 * Función de acción que saluda a una persona.
 * @param person - La persona a saludar.
 * @returns Un saludo personalizado.
 */
export function greetPerson(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

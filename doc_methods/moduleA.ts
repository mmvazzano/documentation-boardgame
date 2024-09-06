// src/moduleA.ts

/**
 * Clase que representa un rectángulo.
 */
export class Rectangle {
  width: number;
  height: number;

  /**
   * Crea una instancia de Rectangle.
   * @param width - El ancho del rectángulo.
   * @param height - La altura del rectángulo.
   */
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  /**
   * Calcula el área del rectángulo.
   * @returns El área del rectángulo.
   */
  area(): number {
    return this.width * this.height;
  }

  /**
   * Calcula el perímetro del rectángulo.
   * @returns El perímetro del rectángulo.
   */
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

/**
 * Función que calcula el área de un rectángulo dado su ancho y altura.
 * @param width - El ancho del rectángulo.
 * @param height - La altura del rectángulo.
 * @returns El área del rectángulo.
 */
export function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

import { writable } from 'svelte/store';

export const name = writable(''); // Estado global para el nombre
export const level = writable(0); // Estado global del nivel seleccionado
export const playGame = writable(false); // Estado global para el juego en marcha
export const points = writable(0); // Estado global para los puntos

export function setName(value) {
  name.set(value.trim()); // Función para establecer el valor limpiamente
}

export function toggleGame(value) {
  playGame.set(value); // Función para alternar el estado del juego
}

export function setLevelSelected(value) {
  level.set(value); // Función para establecer el valor del nivel
}

export function incrementPoints(value) {
  points.update((currentPoints) => currentPoints + value); // Función para incrementar los puntos
}

export function resetGame() {
  playGame.set(false); // Función para detener el juego
  points.set(0); // Función para resetear los puntos
}
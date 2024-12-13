# Tap the Mole

**Tap the Mole** es una aplicación móvil web progresiva basada en el clásico juego de "Toca al topo". Diseñada para ser interactiva y accesible, la aplicación incluye funcionalidades básicas como selección de nivel, validación de usuario y la capacidad de jugar offline.

---

## **Características**

- 🎮 **Juego interactivo**: Golpea al topo que aparece aleatoriamente para ganar puntos.
- 🔄 **Selección de niveles**:
  - **Fácil**: 1000 ms, 10 puntos por topo.
  - **Medio**: 750 ms, 20 puntos por topo.
  - **Difícil**: 500 ms, 30 puntos por topo.
- ✨ **PWA (Progressive Web App)**: Funciona sin conexión tras la primera carga.
- 🚀 **Desplegado públicamente**: Disponible online para cualquier dispositivo.
- 📱 **Optimizado para móviles**: Experiencia fluida y responsiva.

---

## **Requisitos**

- Node.js >= 16
- Navegador compatible con aplicaciones web modernas.

---

## **Cómo instalar y ejecutar localmente**

1. **Clonar el repositorio**:
  ```bash
    git clone https://github.com/vicaschez/bbva-tap-the-mole.git
    cd bbva-tap-the-mole
  ```

2.	**Instalar dependencias:**
  ```bash
    npm install
  ```

3.	**Ejecutar en desarrollo:**

  ```bash
    npm run dev
  ```

Abre el navegador en http://localhost:5173.

4.	**Construir para producción:**
  ```bash
    npm run build
  ```

Los archivos estáticos estarán disponibles en la carpeta dist.

5.	**Vista previa de producción:**
  ```bash
    npm run preview
  ```

---

## **Despliegue**

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1.	**Configura la base en vite.config.js:**
  ```bash
    base: '/bbva-tap-the-mole/',
  ```

2.	**Ejecuta el despliegue:**
  ```bash
    npm run deploy
  ```

3.	La aplicación estará disponible en: https://vicaschez.github.io/bbva-tap-the-mole/.

---

## **Tests**

Este proyecto incluye pruebas unitarias para las vistas y componentes:
1.	**Ejecutar pruebas:**
  ```bash
    npm run test
  ```

2.	**Modo watch para pruebas continuas:**
  ```bash
    npm run test:watch
  ```

---

## **Características adicionales**

	•	*Arquitectura basada en Svelte:* Componentes reutilizables y fáciles de mantener.
	•	*Vite PWA:* Implementación optimizada para Progressive Web Apps.
	•	*Tests unitarios con Vitest y Testing Library:* Alta cobertura de las funcionalidades clave.
	•	*Configuración de Preprocesadores:* sass-embedded integrado para estilos avanzados.

---

## **Mejoras implementadas**

	•	*Soporte offline:* Configurado con vite-plugin-pwa.
	•	*Transiciones animadas:* Experiencia de usuario mejorada.
	•	*Estructura modular:* Código limpio y claro.
	•	*Despliegue continuo:* Configurado con gh-pages.


---

## **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
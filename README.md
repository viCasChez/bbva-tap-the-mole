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
- 🧩 **Componentes reutilizables**: Basados en Svelte y LitElement para un diseño modular.
- 🌐 **Soporte offline**: Configurado con `vite-plugin-pwa` para acceso sin conexión.
- 🛠️ **Despliegue continuo**: Configurado con `gh-pages` para actualizaciones rápidas.
- 🧪 **Cobertura de test**: Tests unitarios con Vitest y Testing Library.

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

## **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
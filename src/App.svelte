<script>
  import { BASE_URL } from './config.js';
  import Home from './routes/Home.svelte';
  import Game from './routes/Game.svelte';
  import { name } from './store'; // Tienda para el nombre
  import { get } from 'svelte/store';

  let currentRoute = window.location.pathname;
  const urlHome = `${BASE_URL}/`;
  const urlGame = `${BASE_URL}/game`;

  // Verificación inicial de la ruta
  if (currentRoute === urlGame && !get(name)) {
    // Redirige a la página principal si no hay nombre
    currentRoute = urlHome;
    history.replaceState({}, '', urlHome); // Actualiza la URL en el navegador
  }

  // Función para manejar la navegación
  function navigate(route) {
    if (route === urlGame && !get(name)) {
      currentRoute = urlHome; // Redirige a Home si no hay nombre
      history.pushState({}, '', urlHome); // Actualiza la URL
    } else {
      currentRoute = route; // Cambia la ruta actual
      history.pushState({}, '', route); // Actualiza la URL
    }
  }

  // Escucha cambios en el historial del navegador (botones atrás/adelante)
  window.onpopstate = () => {
    if (window.location.pathname === urlGame && !get(name)) {
      // Redirige a Home si no hay nombre
      currentRoute = urlHome;
      history.replaceState({}, '', urlHome);
    } else {
      currentRoute = window.location.pathname;
    }
  };

  // Mapea la ruta actual al componente correspondiente
  $: Component = currentRoute === urlGame ? Game : Home;
</script>

<main>
  <!-- Renderiza dinámicamente el componente según la ruta -->
  <svelte:component this={Component} {navigate} />
</main>
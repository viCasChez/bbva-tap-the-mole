<script>
  import Home from './routes/Home.svelte';
  import Game from './routes/Game.svelte';
  import { name } from './store'; // Tienda para el nombre
  import { get } from 'svelte/store';

  let currentRoute = window.location.pathname;

  // Verificación inicial de la ruta
  if (currentRoute === '/game' && !get(name)) {
    // Redirige a la página principal si no hay nombre
    currentRoute = '/';
    history.replaceState({}, '', '/'); // Actualiza la URL en el navegador
  }

  // Función para manejar la navegación
  function navigate(route) {
    if (route === '/game' && !get(name)) {
      currentRoute = '/'; // Redirige a Home si no hay nombre
      history.pushState({}, '', '/'); // Actualiza la URL
    } else {
      currentRoute = route; // Cambia la ruta actual
      history.pushState({}, '', route); // Actualiza la URL
    }
  }

  // Escucha cambios en el historial del navegador (botones atrás/adelante)
  window.onpopstate = () => {
    if (window.location.pathname === '/game' && !get(name)) {
      // Redirige a Home si no hay nombre
      currentRoute = '/';
      history.replaceState({}, '', '/');
    } else {
      currentRoute = window.location.pathname;
    }
  };

  // Mapea la ruta actual al componente correspondiente
  $: Component = currentRoute === '/game' ? Game : Home;
</script>

<main>
  <!-- Renderiza dinámicamente el componente según la ruta -->
  <svelte:component this={Component} {navigate} />
</main>
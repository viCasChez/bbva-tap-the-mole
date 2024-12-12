<script>
  import '../components/Home.js'; // Importa el componente LitElement
  import { setName } from '../store'; // Importa la función para actualizar la store
  export let navigate;

  function handleNameSubmitted(event) {
    const name = event.detail.name;
    if (name.trim()) {
      setName(name); // Actualiza la store con el nombre ingresado
      navigate('/game'); // Navega a la vista del juego
    }
  }
</script>

<home-form on:name-submitted={handleNameSubmitted}></home-form>

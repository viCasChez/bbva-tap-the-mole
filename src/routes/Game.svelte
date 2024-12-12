<script>
  import { get } from 'svelte/store';
  import { name, points, level, playGame, incrementPoints, setLevelSelected, toggleGame } from '../store';
  import '../components/Game.js';
  import '../components/Levels.js';
  import '../components/Buttons.js';
  import '../styles/game.css';

  export let navigate;

  function gameExit() {
    navigate('/home'); // Navega a la home
  }

  function updatePoints() {
    const points = buttonLevels[get(level)].points;
    incrementPoints(points);
  }

  function updateLevel(event) {
    setLevelSelected(event.detail.level);
  }

  function updateGame(event) {
    toggleGame(event.detail.playGame);
  }

  const buttonLevels = [
    { text: 'Low', class: 'low', points: 10, secondsWait: 1000, },
    { text: 'Medium', class: 'medium', points: 20, secondsWait: 750, },
    { text: 'High', class: 'high', points: 30, secondsWait: 500,}
  ];

  $: secondsWait = buttonLevels[$level].secondsWait;

</script>

<div class="game">
  <h1>Welcome, {$name}!!!</h1>
  <p>Points: <span>{$points}</span></p>

  <levels-element buttonLevels={buttonLevels} levelSelected={$level} on:update-level={updateLevel}></levels-element>
  <game-view playGame={$playGame} secondsWait={secondsWait} on:update-points={updatePoints} on:update-game={updateGame}></game-view>
  <buttons-element playGame={$playGame} on:game-exit={gameExit} on:update-game={updateGame}></buttons-element>
</div>

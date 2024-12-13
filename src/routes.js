import Home from './routes/Home.svelte';
import Game from './routes/Game.svelte';

export const routes = {
  '/': Home,
  '/home': Home,
  '/game': Game,
};
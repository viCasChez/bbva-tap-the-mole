import { BASE_URL } from './config.js';
import Home from './routes/Home.svelte';
import Game from './routes/Game.svelte';

export const routes = {
  [`${BASE_URL}/`]: Home,
  [`${BASE_URL}/game`]: Game,
};
import { Funny } from "./funny";
import Home from './components/Home.funny';

let routes = [
    {
        path: '/',
        component: Home,
    }
];

new Funny(
    routes
).run();
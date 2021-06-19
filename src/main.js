import { Funny } from "./funny";
import Home from './components/Home.fun';

let routes = [
    {
        path: '/',
        component: Home,
    }
];

new Funny(
    routes
).run();
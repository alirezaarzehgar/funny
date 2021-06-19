import { Component } from './Component';
import { Router, Url } from './Router';

class Funny {
    constructor(routes) {
        this.routes = routes;
        
        this.component = new Component();

        this.url = new Url();

        this.router = new Router(
            routes,
            this.url,
            this.component
        );
    }

    run() {
        this.router.start();
    }
}

export default Funny;
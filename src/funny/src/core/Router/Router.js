class Router {
    constructor(routes, url, component) {
        this.routes = routes;
        this.url = url;
        this.component = component;
    }

    start() {
        this.routes.forEach(route => {
            let path = this.url.getRoute();

            if (path == route['path']) {
                this.component.render(route['component'])
            }
        });
    }
}

export default Router;
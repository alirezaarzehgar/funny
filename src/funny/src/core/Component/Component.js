class Component {
    render(component) {
        try {
            document.write(component);
        } catch (error) {
            throw (error + ': ' . component + ' not found');
        }
    }
};

export default Component;
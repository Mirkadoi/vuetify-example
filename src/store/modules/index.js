
const allModuleNames = require.context('.', true, /\.js$/);
const modules = {};

allModuleNames.keys().forEach(fileName => {
    if (fileName === './index.js') return;
    const [moduleName, moduleElement] = fileName.replace(/(\.\/|\.js)/g, "").split("/");

    if (!Object.prototype.hasOwnProperty.call(modules, moduleName)) {
        modules[moduleName] = {
            namespaced: true,
        }
    }

    modules[moduleName][moduleElement] = allModuleNames(fileName).default;
});

export default modules

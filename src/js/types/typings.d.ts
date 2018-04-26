declare module 'jQuery' {
    export = jQuery;
}

declare module "*.json" {
    const value: JSON;
    export default value;
}
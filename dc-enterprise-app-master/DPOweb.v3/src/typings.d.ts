/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "file-saver";
declare module "jquery";

declare module "*.json"
{
    const value: any;
    export default value;
}
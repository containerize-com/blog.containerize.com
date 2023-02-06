interface HighlightResult
{
    value: string
}
export interface HelperDelegate {
    (context?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): any;
}
export interface TemplateDelegate<T = any> {
    (context: T): string;
}

export interface Handlebars 
{
    create(): Handlebars;
    registerHelper(name: string, fn: HelperDelegate): void;
    compile<T = any>(input: any): TemplateDelegate<T>;
}

declare global
{
    interface Window 
    {
        Handlebars : Handlebars
    }
}


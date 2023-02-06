interface HighlightResult
{
    value: string
}
export interface hljs 
{
    highlight: (codeOrLanguageName: string, optionsOrCode: any) => HighlightResult;
    highlightAuto: (code: string, languageSubset?: string[]) => HighlightResult;
    highlightBlock: (element: HTMLElement) => void;
    highlightElement: (element: HTMLElement) => void
}

declare global
{
    interface Window 
    {
        hljs : hljs
    }
}


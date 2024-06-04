export type TApiConfig = {
    apiUrl: string,
    uiUrl: string,
    addHeaders?: (req: any) => Record<string, string>,
    on401?: (response: any) => any,
    on403?: (response: any) => any,
    on400?: (response: any) => any,
};
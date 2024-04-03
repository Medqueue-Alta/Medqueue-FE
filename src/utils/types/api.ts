export type IResponse<TPayload = any> = {
    code: number;
    message: string;
    data: TPayload;
}
export type IResponse<TPayload = any> = {
    code: number;
    message: string;
    data: TPayload;
}


export interface IPayloadPagination<TDatas> {
    totalItems: number;
    datas: TDatas;
    totalPages: number;
    currentPage: number;
}

export enum DEALTYPES {
    Venda = 'VENDA',
    Troca = 'TROCA',
    Desejo = 'DESEJO'
}
export enum URGENCIA {
    Baixa = 'BAIXA',
    Média = 'MEDIA',
    Alta = 'ALTA',
    Date = 'limit_date'
}

export type Deal = {
    type: DEALTYPES,
    value: number,
    name:string,
    description: string,
    location: {
        lat: number,
        lng: number,
        address: string,
        city: string,
        state: string,
        zip_code: number
    },
    urgency: {
        type: URGENCIA,
        limit_date: string
    },
    photos: [
        { src: string },
        { src: string }
    ]
}


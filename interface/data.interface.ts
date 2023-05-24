export interface DataResponse {
    id:             string;
    projecto:       string;
    img:            string;
    descriptionImg: string;
    details:        Detail[];
}

export interface Detail {
    icons:     Icons;
    ubicacion: Ubicacion;
    area:      Area;
}

export enum Area {
    The2000M2 = "2000m2",
}

export enum Icons {
    GrMapLocation = "GrMapLocation",
    Icon = "icon",
}

export enum Ubicacion {
    Caracoto = "Caracoto",
}

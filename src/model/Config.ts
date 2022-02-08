import { FinalFilterEnum } from "../enums/FinalFilterEnum";

export class Config {
    height: number;
    width: number;
    antiAliasing: number;
    maxReflexion: number;
    finalFilter: FinalFilterEnum

    constructor(
        height: number,
        width: number,
        antiAliasing: number,
        maxReflexion: number,
        finalFilter: FinalFilterEnum,
    ) {
        this.height = height;
        this.width = width;
        this.antiAliasing = antiAliasing;
        this.maxReflexion = maxReflexion;
        this.finalFilter = finalFilter;
    }
}
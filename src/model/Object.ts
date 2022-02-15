import { ObjectTypeEnum } from "../enums/ObjectTypeEnum";
import { Point3D } from "./Point3D";

export class Object {
    id: number;
    type: ObjectTypeEnum;
    values: number[];
    coordinates: Point3D;
    scaling: Point3D;
    rotation: Point3D;
    colors: string[];

    constructor(
        type: ObjectTypeEnum,
        values: number[],
        coordinates: Point3D,
        scaling: Point3D,
        rotation: Point3D,
        colors: string[]
    ) {
        this.id = 0;
        this.type = type;
        this.values = values;
        this.coordinates = coordinates;
        this.scaling = scaling;
        this.rotation = rotation;
        this.colors = colors;
    }
}
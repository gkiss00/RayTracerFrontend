import { ObjectTypeEnum } from "../enums/ObjectTypeEnum";
import { Point3D } from "./Point3D";

export class Object {
    type: ObjectTypeEnum;
    values: number[];
    coordinates: Point3D;
    scaling: Point3D;
    rotation: Point3D;

    constructor(
        id: number,
        type: ObjectTypeEnum,
        values: number[],
        coordinates: Point3D,
        scaling: Point3D,
        rotation: Point3D
    ) {
        this.type = type;
        this.values = values;
        this.coordinates = coordinates;
        this.scaling = scaling;
        this.rotation = rotation;
    }
}
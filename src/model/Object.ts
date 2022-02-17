import { PatternTypeEnum } from "../enums/PatternTypeEnum";
import { ObjectTypeEnum } from "../enums/ObjectTypeEnum";
import { Point3D } from "./Point3D";

export class Object {
    id: number;
    type: ObjectTypeEnum;
    values: number[];
    coordinates: Point3D;
    scaling: Point3D;
    rotation: Point3D;
    pattern: PatternTypeEnum;
    colors: string[];
    reflexion: number;

    constructor(
        type: ObjectTypeEnum,
        values: number[],
        coordinates: Point3D,
        scaling: Point3D,
        rotation: Point3D,
        pattern: PatternTypeEnum,
        colors: string[],
        reflexion: number
    ) {
        this.id = 0;
        this.type = type;
        this.values = values;
        this.coordinates = coordinates;
        this.scaling = scaling;
        this.rotation = rotation;
        this.pattern = pattern;
        this.colors = colors;
        this.reflexion = reflexion;
    }
}
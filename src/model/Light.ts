import { Point3D } from "./Point3D";

export class Light {
    id: number;
    point: Point3D;
    color: string;

    constructor(point: Point3D, color: string) {
        this.id = 0;
        this.point = point;
        this.color = color;
    }
}
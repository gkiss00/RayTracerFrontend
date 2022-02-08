import { Point3D } from "./Point3D";

export class Camera {
    id: number;
    pointOfVue: Point3D;
    direction: Point3D;
    up: Point3D;
    angle: number;

    constructor(
        pointOfVue: Point3D,
        direction: Point3D,
        up: Point3D,
        angle: number
    ) {
        this.id = 0;
        this.pointOfVue = pointOfVue;
        this.direction = direction
        this.up = up;
        this.angle = angle
    }
}
import { ObjectTypeEnum } from "./../enums/ObjectTypeEnum";

import cube from './../img/objectTypes/cube.png'
import sphere from './../img/objectTypes/sphere.png'
import cylinder from './../img/objectTypes/cylinder.png'
import plane from './../img/objectTypes/plane.png'

const objectTypeImageMap: Map<ObjectTypeEnum, string> = new Map<ObjectTypeEnum, string>();

objectTypeImageMap.set(ObjectTypeEnum.CUBE, cube);
objectTypeImageMap.set(ObjectTypeEnum.SPHERE, sphere);
objectTypeImageMap.set(ObjectTypeEnum.CYLINDER, cylinder);
objectTypeImageMap.set(ObjectTypeEnum.PLANE, plane);

export default objectTypeImageMap;
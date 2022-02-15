import { ObjectTypeEnum } from "./../enums/ObjectTypeEnum";

const objectTypeNbValuesMap: Map<ObjectTypeEnum, number> = new Map<ObjectTypeEnum, number>();

objectTypeNbValuesMap.set(ObjectTypeEnum.PLANE, 0);
objectTypeNbValuesMap.set(ObjectTypeEnum.CUBE, 1);
objectTypeNbValuesMap.set(ObjectTypeEnum.SPHERE, 1);
objectTypeNbValuesMap.set(ObjectTypeEnum.CYLINDER, 1);

export default objectTypeNbValuesMap;
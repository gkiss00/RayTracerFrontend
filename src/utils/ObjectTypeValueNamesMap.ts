import { ObjectTypeEnum } from "./../enums/ObjectTypeEnum";

const objectTypeValueNamesMap: Map<ObjectTypeEnum, string[]> = new Map<ObjectTypeEnum, string[]>();

objectTypeValueNamesMap.set(ObjectTypeEnum.PLANE, []);
objectTypeValueNamesMap.set(ObjectTypeEnum.CUBE, ["size"]);
objectTypeValueNamesMap.set(ObjectTypeEnum.SPHERE, ["radius"]);
objectTypeValueNamesMap.set(ObjectTypeEnum.CYLINDER, ["radius"]);

export default objectTypeValueNamesMap;
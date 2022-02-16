import { ObjectTypeEnum } from "./../enums/ObjectTypeEnum";
import { PatternTypeEnum } from "./../enums/PatternTypeEnum";

const objectPatternMap:  Map<ObjectTypeEnum, PatternTypeEnum[]> = new Map<ObjectTypeEnum, PatternTypeEnum[]>();

objectPatternMap.set(ObjectTypeEnum.SPHERE, [
    PatternTypeEnum.UNIFORM,
    PatternTypeEnum.VERTICAL_LINED,
    PatternTypeEnum.HORIZONTAL_LINED,
    PatternTypeEnum.GRID,
    PatternTypeEnum.GRADIENT,
    PatternTypeEnum.TEXTURE
]);

objectPatternMap.set(ObjectTypeEnum.PLANE, [
    PatternTypeEnum.UNIFORM,
    PatternTypeEnum.VERTICAL_LINED,
    PatternTypeEnum.HORIZONTAL_LINED,
    PatternTypeEnum.GRID,
    PatternTypeEnum.TEXTURE
]);

objectPatternMap.set(ObjectTypeEnum.CYLINDER, [
    PatternTypeEnum.UNIFORM,
    PatternTypeEnum.VERTICAL_LINED,
    PatternTypeEnum.HORIZONTAL_LINED,
    PatternTypeEnum.GRID,
    PatternTypeEnum.TEXTURE
]);

objectPatternMap.set(ObjectTypeEnum.CUBE, [
    PatternTypeEnum.UNIFORM
]);

export default objectPatternMap;
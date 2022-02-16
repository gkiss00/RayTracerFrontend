import { Point3D } from "./../../model/Point3D";
import { Object } from "./../../model/Object";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ObjectTypeEnum } from "./../../enums/ObjectTypeEnum";
import objectTypeValueNamesMap from "./../../utils/ObjectTypeValueNamesMap";
import objectPatternMap from "./../../utils/ObjectPatternMap";
import { PatternTypeEnum } from "./../../enums/PatternTypeEnum";

function AddObjectForm () {
    //UTILS
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const _type: string = searchParams.get("type") || "";

    //DATA SENT TO THE BACKEND
    const [type, setType] = useState<ObjectTypeEnum>(_type as ObjectTypeEnum);
    const [values, setvalues] = useState<number[]>([10, 0, 0]);
    const [coordinates, setCoordinates] = useState<Point3D>(new Point3D(0, 0, 0));
    const [scaling, setScaling] = useState<Point3D>(new Point3D(1, 1, 1));
    const [rotation, setRotation] = useState<Point3D>(new Point3D(0, 0, 0));
    const [pattern, setPattern] = useState<PatternTypeEnum>(PatternTypeEnum.UNIFORM);
    const [colors, setColors] = useState<string[]>([]);
    
    //TMP VALUES
    let i = -1;
    const [currentColor, setCurrentColor] = useState<string>("#ffffff");

    const addColor = () => {
        setColors([...colors, currentColor]);
        console.log(colors);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const object: Object = new Object(type, values, coordinates, scaling, rotation, colors);
        console.log(JSON.stringify(object));
        fetch("http://localhost:8080/object/add", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then((response) => {
            navigate("/objects");
        })
    }
    
    return (
        <div>
            {type}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Values</label>
                    <div>
                        {
                            objectTypeValueNamesMap.get(type)?.map((valueName) => {
                                ++i;
                                return (
                                    <label>
                                        {valueName}
                                        <input type="number" name={valueName} value={values[i]} onChange={e => {
                                            e.preventDefault();
                                            let tmp = [...values];
                                            tmp[i] = Number(e.target.value);
                                            setvalues(tmp);
                                        }}/>
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <label>Coordinates</label>
                    <div>
                        <label>
                            x:
                            <input type="number" value={coordinates.x} name="coordinatesX" onChange={e => {
                                e.preventDefault();
                                setCoordinates(new Point3D(Number(e.target.value), coordinates.y, coordinates.z));
                            }}/>
                        </label>
                        <label>
                            y:
                            <input type="number" value={coordinates.y} name="coordinatesY" onChange={e => {
                                e.preventDefault();
                                setCoordinates(new Point3D(coordinates.x, Number(e.target.value), coordinates.z));
                            }}/>
                        </label>
                        <label>
                            z:
                            <input type="number" value={coordinates.z} name="coordinatesZ" onChange={e => {
                                e.preventDefault();
                                setCoordinates(new Point3D(coordinates.x, coordinates.y, Number(e.target.value)));
                            }}/>
                        </label>
                    </div>
                </div>
                <div>
                    <label>Scaling</label>
                    <div>
                        <label>
                            x:
                            <input type="number" value={scaling.x} name="scalingX" onChange={e => {
                                e.preventDefault();
                                setScaling(new Point3D(Number(e.target.value), scaling.y, scaling.z));
                            }}/>
                        </label>
                        <label>
                            y:
                            <input type="number" value={scaling.y} name="scalingY" onChange={e => {
                                e.preventDefault();
                                setScaling(new Point3D(scaling.x, Number(e.target.value), scaling.z));
                            }}/>
                        </label>
                        <label>
                            z:
                            <input type="number" value={scaling.z} name="scalingZ" onChange={e => {
                                e.preventDefault();
                                setScaling(new Point3D(scaling.x, scaling.y, Number(e.target.value)));
                            }}/>
                        </label>
                    </div>
                </div>
                <div>
                    <label>Rotation</label>
                    <div>
                    <label>
                            x:
                            <input type="number" value={rotation.x} name="rotationX" onChange={e => {
                                e.preventDefault();
                                setRotation(new Point3D(Number(e.target.value), rotation.y, rotation.z));
                            }}/>
                        </label>
                        <label>
                            y:
                            <input type="number" value={rotation.y} name="rotationY" onChange={e => {
                                e.preventDefault();
                                setRotation(new Point3D(rotation.x, Number(e.target.value), rotation.z));
                            }}/>
                        </label>
                        <label>
                            z:
                            <input type="number" value={rotation.z} name="rotationZ" onChange={e => {
                                e.preventDefault();
                                setRotation(new Point3D(rotation.x, rotation.y, Number(e.target.value)));
                            }}/>
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                        Pattern:
                        <select value={pattern} onChange={e => {setPattern(e.target.value as PatternTypeEnum)}}>
                            {
                                objectPatternMap.get(type)?.map((pattern) => {
                                    return <option value={pattern}>{pattern}</option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        color:
                        <input type="color" value={currentColor} onChange={e => {
                            e.preventDefault();
                            setCurrentColor(e.target.value)
                            console.log(currentColor);
                        }}/>
                        <input type="button" onClick={addColor} value="Add"/>
                        {colors.map(color => {
                            return <div style={{backgroundColor: color, width:20, height:20}}></div>
                        })}
                    </label>
                </div>
                <div>
                    <label>
                        texture:
                        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => {
                            e.preventDefault();
                            console.log(e.target.value);
                        }}/>
                    </label>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AddObjectForm;
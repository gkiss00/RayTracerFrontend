import { Light } from "./../../model/Light";
import { Point3D } from "./../../model/Point3D";
import { useState } from "react";
import { useNavigate } from "react-router";

function AddLightForm() {
    // UTILS
    const navigate = useNavigate();

    //DATA
    const [coordinates, setCoordinates] = useState<Point3D>(new Point3D(-100, 100, 100));
    const [color, setColor] = useState<string>("#ffffff");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const light: Light = new Light(coordinates, color);
        console.log(light);

        fetch("http://localhost:8080/light/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(light)
        }).then((response) => {
            navigate(-1);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <label>
                    color:
                    <input type="color" value={color} onChange={e => {
                        e.preventDefault();
                        setColor(e.target.value);
                    }}/>
                </label>
            </div>
            <input type="submit" />
        </form>
    )
}

export default AddLightForm;
import { Point3D } from "./../../model/Point3D"
import { useState } from "react"
import { Camera } from "./../../model/Camera";
import { useNavigate } from "react-router";

function AddCameraForm() {
    const navigate = useNavigate();
    const [coordinates, setCoordinates] = useState<Point3D>(new Point3D(-100, 0, 0));
    const [direction, setDirection] = useState<Point3D>(new Point3D(1, 0, 0));
    const [up, setUp] = useState<Point3D>(new Point3D(0, 0, 1));
    const [angle, setAngle] = useState<number>(90);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(coordinates, direction, up, angle);
        const cam: Camera = new Camera(coordinates, direction, up, angle);
        fetch("http://localhost:8080/camera/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cam)
        }).then((response) => {
            navigate(-1);
        })
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
                <label>Direction</label>
                <div>
                    <label>
                        x:
                        <input type="number" value={direction.x} name="directionX" onChange={e => {
                            e.preventDefault();
                            setDirection(new Point3D(Number(e.target.value), direction.y, direction.z));
                        }}/>
                    </label>
                    <label>
                        y:
                        <input type="number" value={direction.y} name="directionY" onChange={e => {
                            e.preventDefault();
                            setDirection(new Point3D(direction.x, Number(e.target.value), direction.z));
                        }}/>
                    </label>
                    <label>
                        z:
                        <input type="number" value={direction.z} name="directionZ" onChange={e => {
                            e.preventDefault();
                            setDirection(new Point3D(direction.x, direction.y, Number(e.target.value)));
                        }}/>
                    </label>
                </div>
            </div>
            <div>
                <label>Up</label>
                <div>
                <label>
                        x:
                        <input type="number" value={up.x} name="upX" onChange={e => {
                            e.preventDefault();
                            setUp(new Point3D(Number(e.target.value), up.y, up.z));
                        }}/>
                    </label>
                    <label>
                        y:
                        <input type="number" value={up.y} name="upY" onChange={e => {
                            e.preventDefault();
                            setUp(new Point3D(up.x, Number(e.target.value), up.z));
                        }}/>
                    </label>
                    <label>
                        z:
                        <input type="number" value={up.z} name="upZ" onChange={e => {
                            e.preventDefault();
                            setUp(new Point3D(up.x, up.y, Number(e.target.value)));
                        }}/>
                    </label>
                </div>
            </div>
            <div>
                <label>Angle</label>
                <div>
                    <input type="number" value={angle} name="angle" onChange={e => {
                        e.preventDefault();
                        setAngle(Number(e.target.value));
                    }}/>
                </div>
            </div>
            <input type="submit" />
        </form>
    )
}

export default AddCameraForm;
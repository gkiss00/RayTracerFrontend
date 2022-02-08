import { Camera } from '@model/Camera';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import add from './../../img/add.jpeg'
import camera from './../../img/camera.png'

function CameraList() {
    const [cameras, setCameras] = useState<Camera[]>([]);

    useEffect(() => {
        async function getCameras() {
            let response = await fetch("http://localhost:8080/cameras");
            let data: Camera[] = await response.json() as [Camera];
            setCameras(data);
        }
        getCameras();
    }, []);

    return (
        <div>
            <h1>Your cameras</h1>
            {cameras.map(cam => {
                return <Link to={cam.id + ""}><img src={camera} alt="cam" height={100} width={100} key={cam.id}/></Link>
            })}
            <Link to="add"><img src={add} alt="add" height={100} width={100} /></Link>
        </div>
    )
}

export default CameraList;
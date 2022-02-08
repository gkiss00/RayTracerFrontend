import { Camera } from "@model/Camera";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { unstable_HistoryRouter } from "react-router-dom";
import trash from "./../../img/trash.jpeg";
import edit from "./../../img/edit.png";

function CameraDetails(props: any) {
    const navigate = useNavigate();

    const params = useParams();
    const [camera, setCamera] = useState<Camera>();

    useEffect(() => {
        async function getCamera() {
            
            console.log(params.id);
            let response = await fetch("http://localhost:8080/camera/" + params.id);
            let data: Camera = await response.json() as Camera;
            setCamera(data);
        }
        getCamera();
    }, []);

    const deleteCam = () => {
        let response = fetch("http://localhost:8080/camera/" + params.id, {
            method: "DELETE"
        }).then(response => {
            navigate("/cameras");
        });
    }

    return (
        <div>
            <p>Point of vue</p>
            <p>x: {camera?.pointOfVue.x} y: {camera?.pointOfVue.y} z: {camera?.pointOfVue.z}</p>
            <p>Direction</p>
            <p>x: {camera?.direction.x} y: {camera?.direction.y} z: {camera?.direction.z}</p>
            <p>Up</p>
            <p>x: {camera?.up.x} y: {camera?.up.y} z: {camera?.up.z}</p>
            <p>Angle</p>
            <p>{camera?.angle}</p>
            <img src={edit} height={100} width={100} alt="edit" />
            <img src={trash} height={100} width={100} alt="delete" onClick={deleteCam}/>
        </div>
    )
}

export default CameraDetails;
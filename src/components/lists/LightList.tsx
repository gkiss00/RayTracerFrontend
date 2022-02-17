import { Light } from '@model/Light';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import add from './../../img/add.jpeg'
import lightImg from './../../img/light.jpg'

function LightList() {
    const [lights, setLights] = useState<Light[]>([]);

    useEffect(() => {
        async function getLights() {
            let response = await fetch("http://localhost:8080/lights");
            let data: Light[] = await response.json() as [Light];
            setLights(data);
        }
        getLights();
    }, []);

    return (
        <div>
            <h1>Your lights</h1>
            {lights.map(light => {
                return <Link to={light.id + ""}><img src={lightImg} alt="cam" height={100} width={100} key={light.id}/></Link>
            })}
            <Link to="add"><img src={add} alt="add" height={100} width={100} /></Link>
        </div>
    )
}

export default LightList;
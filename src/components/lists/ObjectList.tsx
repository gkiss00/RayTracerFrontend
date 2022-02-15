import { ObjectTypeEnum } from "@enums/ObjectTypeEnum";
import { Object } from "@model/Object";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import objectTypeImageMap from "./../../utils/ObjectTypeImageMap";
import add from './../../img/add.jpeg'

function ObjectList() {
    const [objects, setObjects] = useState<Object[]>([]);
    //const [objects, setObjects] = useState<Map<ObjectTypeEnum, Object[]>>(new Map<ObjectTypeEnum, Object[]>());
    useEffect(() => {
        async function getObjects() {
            let response = await fetch("http://localhost:8080/objects");
            let data: Object[] = await response.json() as [Object];

            /*let mapOfObjects: Map<ObjectTypeEnum, Object[]> = new Map<ObjectTypeEnum, Object[]>();
            for(let i = 0; i < data.length; ++i) {
                if(mapOfObjects.has(data[i].type)) {
                    mapOfObjects.get(data[i].type)?.push(data[i]);
                } else {
                    mapOfObjects.set(data[i].type, [data[i]]);
                }
            }*/
            setObjects(data);
            //setObjects(mapOfObjects);
        }
        getObjects();
    }, []);

    return (
        <div>
            {objects.map((obj) => {
                return <img src={objectTypeImageMap.get(obj.type)} alt={obj.type as string} height={100} width={100}/>
            })}
            <Link to="types"><img src={add} alt="add" height={100} width={100} /></Link>
        </div>
    )
}

export default ObjectList;
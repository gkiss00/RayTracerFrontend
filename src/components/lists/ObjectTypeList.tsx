
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import objectTypeImageMap from "./../../utils/ObjectTypeImageMap";

function ObjectTypeList () {

    let objectTypes: ReactNode[] = [];
    objectTypeImageMap.forEach((value, key) => {
        const query: string = "?type=" + key;
        objectTypes.push(
            <NavLink to={{pathname:"/objects/add", search:query}} replace>
                <img src={value} alt={key} height={100} width={100}/>
            </NavLink>
        );
    })
    
    return (
        <div>
            {objectTypes}
        </div>
    )
}

export default ObjectTypeList;
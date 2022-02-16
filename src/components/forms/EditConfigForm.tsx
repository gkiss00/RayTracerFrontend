import { FinalFilterEnum } from "./../../enums/FinalFilterEnum";
import { Config } from "./../../model/Config";
import React, { useState, useEffect } from "react";

function EditConfigForm() {
    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [antiAliasing, setAntiAliasing] = useState<number>(0);
    const [maxReflection, setMaxReflection] = useState<number>(0);
    const [finalFilter, setFinalFilter] = useState<FinalFilterEnum>(FinalFilterEnum.NONE);

    useEffect(() => {
        async function getCOnfig() {
          let response = await fetch("http://localhost:8080/config");
          let data = await response.json() as Config;
          setHeight(data.height);
          setWidth(data.width);
          setAntiAliasing(data.antiAliasing);
          setMaxReflection(data.maxReflexion);
          setFinalFilter(data.finalFilter);
          setHeight(data.height);
        }
        getCOnfig();
      }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const config: Config = new Config(height, width, antiAliasing, maxReflection, finalFilter);
        fetch("http://localhost:8080/config", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={height} name="height" onChange={e => {setHeight(Number(e.target.value))}}/>
            <input type="number" value={width} name="width" onChange={e => {setWidth(Number(e.target.value))}}/>
            <input type="number" value={antiAliasing} name="antiAliasing" onChange={e => {setAntiAliasing(Number(e.target.value))}}/>
            <input type="number" value={maxReflection} name="maxReflection" onChange={e => {setMaxReflection(Number(e.target.value))}}/>
            <select value={finalFilter} onChange={e => {setFinalFilter(e.target.value as FinalFilterEnum)}}>
                {(Object.keys(FinalFilterEnum) as Array<keyof typeof FinalFilterEnum>).map((key: string) => {
                    return <option value={key}>{key}</option>
                })}
            </select>
            <input type="submit"/>
        </form>
    )
}

export default EditConfigForm;
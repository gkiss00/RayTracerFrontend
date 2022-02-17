import React, { useEffect, useState } from 'react';
import './App.css';
import cameraImg from 'img/camera.png';
import objectsImg from 'img/objects.png';
import lightImg from 'img/light.jpg';
import { Object } from '@model/Object';
import { Config } from '@model/Config';
import { Link } from 'react-router-dom';

function App() {
  const [objects, setObjects] = useState<Object[]>([]);
  const [config, setConfig] = useState<Config>();

  useEffect(() => {
    async function getObjects() {
      let response = await fetch("http://localhost:8080/objects");
      let data: Object[] = await response.json() as [Object];
      setObjects(data);
    }

    async function getCOnfig() {
      let response = await fetch("http://localhost:8080/config");
      let data = await response.json() as Config;
      setConfig(data);
    }
    getObjects();
    getCOnfig();
  }, []);

  const getImage = async () => {
    let response = await fetch("http://localhost:8080/image");
  }

  return (
    <div className="App">
      <h1>Welcome to the world of Ray Tracing</h1>
      <p>Create your own scene</p>
      <p>First thing to do: set up your configuration</p>
      <h2>Config</h2>
      <p>Image height: {config?.height}</p>
      <p>Image width: {config?.width}</p>
      <p>Anti aliasing: {config?.antiAliasing}</p>
      <p>Max reflection: {config?.maxReflexion}</p>
      <p>Final filter: {config?.finalFilter}</p>
      <Link to="/config/edit" {...config}>Edit</Link>
      <h2>Cameras</h2>
      <Link to="/cameras"> <img src={cameraImg} alt="camera" height={100} width={100}/></Link>
      <h2>Objects</h2>
      <Link to="/objects"> <img src={objectsImg} alt="object" height={100} width={100}/></Link>
      <h2>Lights</h2>
      <Link to="/lights"> <img src={lightImg} alt="light" height={100} width={100}/></Link>
      <Link to="/image">Run</Link>
    </div>
  );
}

export default App;

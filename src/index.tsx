import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditConfigForm from 'components/forms/EditConfigForm';
import CameraList from 'components/lists/CameraList';
import AddCameraForm from 'components/forms/AddCameraForm';
import ImageView from 'components/ImageView';
import EditCameraForm from 'components/forms/EditCameraForm';
import CameraDetails from 'components/details/CameraDetails';
import ObjectList from 'components/lists/ObjectList';
import ObjectTypeList from 'components/lists/ObjectTypeList';
import AddObjectForm from 'components/forms/AddObjectForm';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="config/edit" element={<EditConfigForm />} />
    <Route path="cameras" element={<CameraList />} />
    <Route path="cameras/:id" element={<CameraDetails />} />
    <Route path="cameras/:id/edit" element={<EditCameraForm />} />
    <Route path="cameras/add" element={<AddCameraForm />} />
    <Route path="objects" element={<ObjectList />} />
    <Route path="objects/types" element={<ObjectTypeList />} />
    <Route path="objects/add" element={<AddObjectForm />} />
    <Route path="image" element={<ImageView />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

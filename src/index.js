import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Card} from './components/Card';
import {color} from './components/Colors';

const servicios = ['Servicios', 'Productos', 'Quienes somos'];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">

    <Card headColor={color.violet} mainColor={color.clearViolet} servicio={servicios[0]}/>
    <Card headColor={color.clearViolet} mainColor={color.violet} servicio={servicios[1]}/>
    <Card headColor={color.violet} mainColor={color.clearViolet} servicio={servicios[2]}/>
    </div>
  </React.StrictMode>
);


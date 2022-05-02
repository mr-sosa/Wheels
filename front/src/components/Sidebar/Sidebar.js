import React from 'react';
import './Sidebar.scss';

export const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick={props.closeNav}>&times;</a>
            <a href="#">Mis viajes</a>
            <a href="#">Mis vehiculos</a>
        </div>
    )
}
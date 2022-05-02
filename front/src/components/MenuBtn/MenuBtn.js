import React from 'react';
import './MenuBtn.scss';

export const MenuBtn = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                &#9776;
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="historial">
                            <button>
                                &#9776;
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
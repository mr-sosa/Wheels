import React, {useState} from 'react';
import { Detail } from './Detail';
import './Post.scss';

export const Post = (props) => {
    const { _id, hour, route, cost } = props;
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    return (
        <div className='Post' onClick={onClick}>
            { showResults ? <Detail /> : null }
            <div className="container">
                <div className='Post-Body'>
                    <div className="row">
                        <div className="col">
                            <h5 className="Post-Body-Tittle">Hora de salida:</h5>
                        </div>
                        <div className="col">
                            <h5 className="Post-Body-Hour">{hour}</h5>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5 className="Post-Body-Route">{route}</h5>
                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            <h5 className="Post-Body-Cost">{cost}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
  };
import React, {Component} from 'react';
import './roundTimer.css'

class RoundTimer extends Component {
    render() { 
        return (
            <div>


                <div className="selector">

                    <button className="option option-btn">
                        <p>IBJJF</p>
                    </button>
                    <button className="option option-btn">
                        <p>ADCC</p>
                    </button>
                    <button className="option-selected option">
                        <p>Training</p>
                    </button>

                    <div className="continuousoption">
                        <p>Continuous rounds</p>
                        <input type="checkbox" name="vehicle1" value="Bike" />
                    </div>

                </div>


                <div className="timecontainer">

                    <div className="round">
                        <h2>Round</h2>
                        <input className="round-input" type="text" value="10:00"/>
                    </div>

                    <div className="rest">
                        <h2>Rest</h2>
                        <input className="rest-input" type="text" value="02:00"/>
                    </div>

                </div>


                <div className="controlscontainer">
                    <button className="btn-begin">Begin</button>
                </div>
                    

            </div>
          );
    }
}
 
export default RoundTimer;
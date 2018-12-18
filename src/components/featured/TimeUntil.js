import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

class TimeUntil extends Component {

    state = {

    }

    render () {
        return (
            <Slide left delay={1000}>
            <div className="countdown_wrapper">
               <div className="countdown_top">
               Start in
               </div>
                <div className="countdown_bottom">

                    <div className="countdown_item">

                        <div className="countdown_time">
                            166
                        </div>
                        <div className="countdown_tag">
                            day
                        </div>

                    </div>
                    
               </div>

            </div>
            </Slide>
        )
    }
}

export default TimeUntil
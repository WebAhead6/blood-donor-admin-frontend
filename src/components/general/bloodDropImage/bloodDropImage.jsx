import React from 'react'
import './bloodDropImage.css'


function Drop({ scale, text, percentage }) {

    return (
        <div className={`drop_mask drop ${percentage > 100 && 'drop_glow'}`} style={{ transform: `scale(${scale})` }}>

            {/*the content of the drop*/}
            <div className="drop_mask drop_contentContainer">

                {/*percentage*/}
                <div className="drop_content">{text}</div>

                {/*the fill of the drop*/}
                <div className=" drop_fill" style={{ height: `${percentage}%` }}>
                    {/*wave effect*/}
                    <div className="drop_wave" />
                    {/*background wave effect*/}
                    <div className="drop_wave drop_wave2" />
                </div>
            </div>
        </div>

    )
}


export default Drop
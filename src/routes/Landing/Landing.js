import React,{useState} from 'react'
import classes from './Landing.module.scss'

function Landing() {
    const [scale,setScale] = useState(1)
    const zoomIn =()=>{
        if(scale !== 2)
        setScale(scale*2)
    }
    const zoomOut = () => {
        setScale(scale/2)
    }
    console.log("scale",scale)
    return (
        <div 
        className={classes.mainContainer}
        onClick={()=>zoomIn()}
        style={{ 
            transform: `scale(${scale})`,
             backgroundImage:`url("https://www.teahub.io/photos/full/273-2734308_london-city-at-night.jpg")` 
            }}
        >
            this is landing page
        </div>
    )
}

export default Landing

import '../css/expanded_button.css';
import { AiOutlineDown } from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';

function ExpandedButton({childs,onClickFunction,className,text,isOpen}){
   
    const [height,setHeight] = useState({});
    const [totalHeight,settotalHeight] = useState(0);
    const [openned,setOpenned] = useState(isOpen);
    const buttonRef = useRef(null);
    const containerRef = useRef(null);

   
    const onClick = () => {
        /*
        if(onClickFunction!=null)
            onClickFunction();
               
        openned?setHeight({height:buttonRef.current.clientHeight}):setHeight({height:totalHeight});  
        setOpenned(!openned);*/

    }

   
    useEffect(()=>{
        settotalHeight(containerRef.current.clientHeight);
        //setHeight({height:buttonRef.current.clientHeight});
    },[childs]);
    
    //<AiOutlineDown className={openned?'expanded-button-icon flip':'expanded-button-icon'}/>
    return(
        <div ref={containerRef}  className='expanded-button-container' style={height} onClick={onClick}>
            <button ref={buttonRef} className= {`expanded-button ${className}`}>
                <span className='expanded-button-text'>
                    {text}
                </span>
                
            </button>
            <div className='expanded-button-elements-container'>
                {childs.map((child,index) => <div key={index}>{child}</div>)}
            </div>
        </div>        
    );

}


export default ExpandedButton;
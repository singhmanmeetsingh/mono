import React ,{useState ,useEffect } from 'react'
import classes from "./Input.module.scss"
function SelectBox({
    dropDownOptions
}) {
    const [input , setInput ] = useState(false)
    const [inputVal ,setInputVal] = useState("")
    const [showingDropdown, setShowingDropdown] = useState(false);
    const [selectedValue ,setSelectedValue] = useState({})
    const [dropOptions ,setDropOptions] = useState([])
    console.log("dropDownOptions",dropDownOptions)
    console.log("selectedValue",selectedValue)
    console.log("inputVal",inputVal)
    
    const handleInputFocus = () => {
        setInput(true)
        setShowingDropdown(true)
    }

    useEffect(()=> { 
        dropDownOptions && inputVal == "" && inputVal.length == 0 ? 
        setDropOptions(dropDownOptions) 
        :
        setDropOptions(dropDownOptions.filter(({value}) => value.toLowerCase().includes(inputVal.toLowerCase())))

    },[dropDownOptions ,inputVal])

    const Drop = () => {
        return(
            <ul className={classes.DropDownUl}><DropdownItems/></ul>
            
    )}
    const handleDropDownClick = (value) => {
        setSelectedValue(value)
        setInputVal(value.label)
        setShowingDropdown(false)
    }

    const DropdownItems = () => (
        dropOptions.map((drop)=>(
            <li className={classes.DropDownLI} onClick={()=>handleDropDownClick(drop)} >{drop.label}</li>
        )) 
    )
    return (
    <>
        <div className={classes.OuterContainer}>
        { input ? 
         <div className={classes.SelectBoxContainer}>
            <input autoFocus={true} value={inputVal} onChange={(e)=>setInputVal(e.target.value)} onClick={()=>setShowingDropdown(!showingDropdown)}/>
         </div>
           
        :
            <div className={classes.SelectBoxContainer}>
                <div className={classes.SelectBoxDiv} onClick={handleInputFocus}>
                    Select button type from Dropdown
                </div>
            </div>
        }
        <button>Search</button>
        
        </div>
       { showingDropdown && <div className={classes.DropDownContainer}>
             <Drop/>
        </div>
        }
    </>
    )
}

export default SelectBox

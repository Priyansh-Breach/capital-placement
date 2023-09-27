import {AiOutlineHome, AiOutlineMenu} from "react-icons/ai";
import {GiChecklist} from "react-icons/gi"
import "./sidebar.css"

function SideBar(){
    return (
        <>
            <div id="sidebar">
                <AiOutlineMenu id="toggle_sidebar" className="icons"/>
                <AiOutlineHome className="icons"/>
                <GiChecklist id="sidebar_checklist" className="icons"/>
            </div>
        </>
    )
}

export default SideBar
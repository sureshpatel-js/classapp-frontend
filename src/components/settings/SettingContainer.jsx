import { Link, Outlet, useNavigate } from "react-router-dom"
import "./SettingContainer.css"
import SettingRight from "./SettingRight"
import SettingLeft from "./SettingsLeft"
const SettingContainer = () => {
    const navigate = useNavigate()
    return (
        <div className="settingContainer" >
            <SettingLeft>
                <Link to={"/home/settings/institute"} >Create Institute</Link>
                <Link to={"/home/settings"} >Create Standard</Link>
                <button onClick={() => { localStorage.removeItem("token"); navigate("/user/login") }} >Logout</button>
            </SettingLeft>
            <SettingRight>
                <Outlet />
            </SettingRight>
        </div>
    )
}

export default SettingContainer
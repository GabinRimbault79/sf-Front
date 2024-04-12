import {Link} from "react-router-dom";

const SideBar = ({classSideBar, children}) => {
    const style = classSideBar ? "sidebar " + classSideBar : "sidebar";

    return (
        <div className={style}>
            {children}
        </div>
    )
}

SideBar.Item = ({ children }) => {
    return (
        <>
            <li className="sidebar-item">
                {children}
            </li>
        </>
    )
}

SideBar.Link = ({ link, children }) => {
    return (
        <>
            <Link to={link} className="sidebar-link">
                {children}
            </Link>
        </>
    )
}

SideBar.Label = ({ children }) => {
    return (
        <>
            <span className="sidebar-label">
                {children}
            </span>
        </>
    )
}



export default SideBar;
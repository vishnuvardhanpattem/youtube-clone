import "./SidebarRow.css";
function SidebarRow({ selected,Icon, title }) {
    return (
        <div className={`sidebarRow  ${selected && 'selected'} `}>
            <Icon className= "sidebarRow__Icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
};

export default SidebarRow;
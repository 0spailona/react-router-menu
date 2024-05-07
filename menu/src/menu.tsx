import {NavLink} from "react-router-dom";

type Props = {
    list: Array<{ name: string, link: string }>
}

export default function Menu({list}: Props) {
    return (
        <div className="menu">
            {list.map((item, index) =>
                <NavLink to={item.link}
                         className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"}
                         key={index}>{item.name}</NavLink>)}
        </div>
    );
}
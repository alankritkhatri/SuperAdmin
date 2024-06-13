import { Link } from "react-router-dom";
import "./menu.css";
import { menu } from "../../styles/data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item, acc) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link className="listItem" to="/" key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span className="listItemTitle">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

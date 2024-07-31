import { Link } from "react-router-dom";
import "./menu.css";
import { menu } from "../../data";
import { Upcomingmenu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link className="listItem" to={listitem.url} key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span className="listItemTitle">{listitem.title} </span>
            </Link>
          ))}
        </div>
      ))}
      {Upcomingmenu.map((item) => (
        <div className="-item" key={item.id}>
          <span onClick={console.log("f")} className="-title">
            {item.title}
          </span>
          {item.listItems.map((listitem) => (
            <Link className="listItem" to={listitem.url} key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span className="listItemTitle">{listitem.title} </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

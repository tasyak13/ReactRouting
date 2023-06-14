import {
    Link,
  } from "react-router-dom";

function Menu() {
    return (
        <header className="header">
            <ul className="header-menu">
                <li><Link to={`/`}>Главная</Link></li>
                <li><Link to={`/users`}>Пользователь</Link></li>
                <li><Link to={`/contact-us`}>Контакты</Link></li>
            </ul>
        </header>
    )
}

export default Menu;
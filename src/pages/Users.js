import Menu from "../components/Menu";
import {
    Link,
  } from "react-router-dom";

function Users() {

    const arrOfUsers = [
        {
            id: 1,
            name: "Kirill"
        },
        {
            id: 2,
            name: "Stepan"
        },
        {
            id: 3,
            name: "Igor"
        },
        {
            id: 4,
            name: "Elena"
        },
        {
            id: 5,
            name: "Nastya"
        },
    ];

    return (
        <>
            <Menu />
            <section className="users">
                <h1>This is a list of users</h1>
                <ul>
                    {arrOfUsers.map((id) => {
                        return <li className="user">
                                <Link to={`/user/${id.id}`}>Name os user {id.id} is {id.name}</Link>
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default Users;
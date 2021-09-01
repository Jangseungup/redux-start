import { useEffect } from "react";
import axios from "axios";

export default function UserList({ users, getUsers }) {
    
    // useEffect(()=>{
    //     async function getUsers() {
    //         try{
    //             start();
    //             const res = await axios.get('https://api.github.com/users');
    //             console.log(res.data);
    //             success(res.data);
    //         } catch (error) {
    //             fail(error)
    //         }
    //     }
    //     getUsers();   
    // }, [start, success, fail]);

    useEffect(()=>{
        getUsers();   
    }, [getUsers]);

    if(users.length === 0) {
        return <p>현재 유저 정보 없음</p>
    }

    return (
        <ul>
            {users.map(user => (
                // <li>{JSON.stringify(user)}</li>
                <li key={user.id}>{user.login}</li>
            ))}
        </ul>
    )
}
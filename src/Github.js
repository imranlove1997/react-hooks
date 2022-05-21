import { useState, useEffect } from "react";

export default function Github() {
    const [activeUserIndex, setActiveUserIndex] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const users = ['imranlove1997','vijayg963','getify'];

    useEffect(() => {
        document.title = `Current User: ${userInfo.login}`;
        fetch(`https://api.github.com/users/${users[activeUserIndex]}`)
        .then((res) => res.json())
        .then((userInfo) => {
            setUserInfo(userInfo);
        });
    }, [activeUserIndex, userInfo]);
    return (
        <>
        {users.map((user, index) => (
            <button onClick={() => {
                setActiveUserIndex(index);
            }}>{user}</button>
        ))}
        <div>{userInfo && <img src={userInfo.avatar_url} width="100" />}</div>
        </>
    )
}
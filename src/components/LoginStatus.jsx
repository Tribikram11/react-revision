function LoginStatus({ isLoggedIn, username, notificationCount }) {
    return (
        <>
            {isLoggedIn ? <p>welcome, {username}</p> : <p>please log in</p>}

            <div>
                {notificationCount  && <p>you have {notificationCount} notifications</p>}
            </div>
        </>
    )
}

export default LoginStatus
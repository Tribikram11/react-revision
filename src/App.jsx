
import LoginStatus from "./components/LoginStatus"

function App() {
  return (<>

    <LoginStatus isLoggedIn={true} username="tutul" notificationCount={0}/>
    <LoginStatus isLoggedIn={false} username="tutul" notificationCount={1}/>
  </>
  )
}

export default App

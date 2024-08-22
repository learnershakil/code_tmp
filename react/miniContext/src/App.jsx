import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <>
    <div className="text-purple-200 font-bold text-center">
      <UserContextProvider>
        <h2>Welcom to Hell!!</h2>
        <Login />
        <br />
        <Profile />
      </UserContextProvider>
      </div>
    </>
  )
}

export default App

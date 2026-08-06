
// import { createContext, useContext, useState } from "react"
// const ThemeContext = createContext(null);

import CollapsPanel from "./components/CollapsePanel"
import PasswordVisibilty from "./components/PasswordVisibilty"

function App() {
  // const [theme, setTheme] = useState('light')

  return (<>
    {/* <ThemeContext.Provider value={{theme, setTheme}}>
    <HeaderDisplay/>
    
    <Page/>
    </ThemeContext.Provider> */}
    <PasswordVisibilty/>
    <CollapsPanel/>
  </>
  )
}

// function HeaderDisplay() {
//   const { theme } = useContext(ThemeContext);
//   return <h1>App Theme: {theme}</h1>;
// }

// export function Page(){
//     return(<>
//     <h2>page component</h2>
//     <ToolBar/>
//     </>)
// }

// export function ToolBar(){
//   return(<>
//     <h2>toolbar component</h2>
//     <ThemeSwitchButton/>
//   </>)
// }

// export function ThemeSwitchButton(){
//   const {theme, setTheme} = useContext(ThemeContext);

//   const handleClick = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
//   }

//   return(<>
//     <button onClick={handleClick}>change </button>
//   </>)
// }

export default App

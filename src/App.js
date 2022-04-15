import React from "react"
import ReactDOM from "react-dom"
import NavBar from "./components/NavBar"

function App() {
    return (
        <>
            <NavBar/>
        </>
    )
}
ReactDOM.render( <App/> , document.getElementById("root"))
export default App;
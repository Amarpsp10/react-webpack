import React from "react";
import classes from './styles/index.css'
import Logo from './assets/react.png'

const App = () => {
    return (
        <>
            <section className={classes.hero}>
                <h3>Hi, from App.jsx Component</h3>
            </section>
            <section>
                <h3>here is another section of images loaded directly in image tag</h3>
                <img height="200px" src={Logo} alt='logo' />
            </section>
        </>
    )
}
export default App
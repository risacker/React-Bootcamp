import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './pic/logo.png' 
    
const TitleComponent = () => {
    return <h1>Namaste React</h1>;
};

const heading = (
    <div id = "title" className = 'title-class'>
    <h1>From zero to hero</h1>
    <h2>in</h2>
    <h3>3 months</h3>
    </div>
)

const HeadingComponent = () => {
    return (
        <div id = "title" className = 'title-class'>
           <TitleComponent/>
           <img src = {logo} alt = "Logo" height = {50} width = {50} />
           <input type = "text" placeholder = "search"/>
           <h2>in</h2>
           <h3>3 months</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton , { SecondaryButton, TertiaryButton } from './components/Buttons'
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large","warning","secondaryButtonWarning"]}>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey World</TertiaryButton>
        <PrimaryButton disabled>Hello World</PrimaryButton>
        <SecondaryButton disabled>Goodbye World</SecondaryButton>
        <TertiaryButton disabled>Hey World</TertiaryButton>
        <GlobalStyle/>
    </div>
);


ReactDOM.render(<App />, document.querySelector("#root"));
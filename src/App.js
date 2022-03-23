import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <div className="middle">
                    <Content />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;

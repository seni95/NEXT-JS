import Navbar from "../component/Navbar";

export default function App({Component,pageProps}){
    return (<div>
        <Navbar></Navbar>
        <Component {...pageProps}></Component>
        <h1>ABOUT</h1>
    </div>);
}


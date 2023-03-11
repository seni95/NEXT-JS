import Layout from "../component/Layout";
import Navbar from "../component/Navbar";

export default function App({Component,pageProps}){
    return (<Layout>
        <Component {...pageProps}></Component>
    </Layout>);
}


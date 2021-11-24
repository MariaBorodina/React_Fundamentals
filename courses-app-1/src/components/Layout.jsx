import Header from "./Header/Header";


const Layout = (props) => {

    return (
            <div className="App">
            <Header individuumName='Dave' /> 
            {props.children}
          </div>
    );
}

export default Layout;
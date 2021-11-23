import Header from './Header/Header';

const Layout = function (props) {
  return (
    <div className="App">
      <Header individuumName="Dave" />
      {props.children}
    </div>
  );
};

export default Layout;

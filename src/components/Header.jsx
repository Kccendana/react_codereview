import "@/styles/Header.module.css";

const Header = () => {
    return (
      <header
      className="header"
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
      >
        <h1>todos</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
    );
  };
  export default Header;
  
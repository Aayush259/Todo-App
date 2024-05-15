
function Header(props) {

    return (
        <>
        <header id="header" className="flex">
            <h1>Todo</h1>
            <button id="changeThemeBtn" onClick={props.changeTheme}>
                <img src={props.themeLogo} alt={props.themeAlt} />
            </button>
        </header>
        </>
    )
}

export default Header;
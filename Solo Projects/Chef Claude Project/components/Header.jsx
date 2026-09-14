import chefIcon from "./../src/assets/chef-claude-icon.png";

export default function Header() {
    return (
        <header className="header">
            <img src={chefIcon} alt="chef icon" className="header-img" />
            <h1 className="header-text">Chef Claude</h1>
        </header>
    )
}
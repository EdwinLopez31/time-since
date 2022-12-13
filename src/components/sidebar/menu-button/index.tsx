// import HamburgerMenuIcon from "@icons/HamburgerMenuIcon";
import HamburgerMenuIcon from "../../../icons/HamburgerMenuIcon";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = (props: MenuButtonProps) => (
  <button onClick={props.onClick} className='bg-time-since-dark-brown'>
    <HamburgerMenuIcon className='w-8 h-8' />
  </button>
);

export default MenuButton;

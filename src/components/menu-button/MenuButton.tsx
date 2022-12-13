import HamburgerMenuIcon from "../../icons/HamburgerMenuIcon";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = (props: MenuButtonProps) => (
  <button onClick={props.onClick} className='bg-time-since-dark-brown'>
    <HamburgerMenuIcon className='w-10 h-10' />
  </button>
);

export default MenuButton;

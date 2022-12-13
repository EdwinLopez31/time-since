import MenuButton from "./menu-button";
import NewEntryButton from "./new-entry-button";

const Sidebar = () => {
  return (
    <aside
      role='navigation'
      className='bg-time-since-dark-brown min-h-screen w-12 flex-col items-center flex transition-transform py-2 gap-4'
    >
      <MenuButton onClick={() => console.log("hey")} />
      <NewEntryButton />
    </aside>
  );
};

export default Sidebar;

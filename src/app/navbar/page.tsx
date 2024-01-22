import ActionButtons from "./action-buttons";
import Logo from "./logo";
import NavigationMenu from "./navigation-menu";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex justify-between border-b p-5">
      <Logo />
      <NavigationMenu />
      <ActionButtons />
    </div>
  );
}

export default page;

import { auth } from "@/auth";
import ButtonLogout from "./ButtonLogout";

const SettingsPage = async () => {
  const section = await auth();
  return (
    <div>
      {JSON.stringify(section)}
      <ButtonLogout />
    </div>
  );
};

export default SettingsPage;

// /app/dashboard/[id]/page.jsx
import usersTab from "@/app/data/tabs/usersTab";
import UserDashboardClient from "./UserDashBoardClient"; // Composant client

export async function generateStaticParams() {
  return usersTab.map((user) => ({
    id: user.id.toString(),
  }));
}

export default function UserDashboard({ params }) {
  const user = usersTab.find((user) => user.id === params.id);

  if (!user) {
    notFound();
  }

  return (
    <>
      {/* Passe les données du Server Component au Client Component */}
      <UserDashboardClient user={user} />
    </>
  );
}

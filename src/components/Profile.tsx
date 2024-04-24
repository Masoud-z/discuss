"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  console.log(session.data?.user);
  if (session.data?.user) {
    return (
      <div key={session.data.user.id}>
        From client: {session.data.user.name}
      </div>
    );
  }
  return <div key={"Not-logged-in"}>From client: user NOT logged in</div>;
};

export default Profile;

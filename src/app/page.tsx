import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();
  return (
    <div> 
      <form action={signIn}>
        <Button type="submit">Sign In!</Button>
      </form>
      <form action={signOut}>
        <Button type="submit">Sign Out!</Button>
      </form>
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
      <Profile />
    </div>
  );
}

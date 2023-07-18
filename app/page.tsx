import Navbar from "./components/navbar";


import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};


import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar />
      <main>
        
      </main>
    </>
  );
}

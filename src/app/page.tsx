import { getRandomData } from "@/components/randomData";
import type { Metadata } from "next";

export const revalidate = 3600 * 24; // revalidate the data at most every hour

const Home = async () => {
  const grid_layout =
    "h-auto grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 sm:mx-3 mx-1";
  const combinedData = await getRandomData();
  return (
    <>
      <main className="px-1 pt-5 sm:px-3 md:pt-2">
        <div className={grid_layout}>{combinedData}</div>
      </main>
    </>
  );
};

export const metadata: Metadata = {
  title: "League of Legends Lore Reader",
  description:
    "You can read and more importantly listen to the all the stories of the characters from League of Legends.",
};

export default Home;

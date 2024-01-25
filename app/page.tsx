import anilist, { fetchTrending } from "./lib/anilist";
import TrendingSlider from "./components/TrendingSlider";
import RecentEpisodes from "./components/RecentEpisodes";
import { Suspense } from "react";
import GridSkeleton from "./ui/skeletons";

export default async function Home() {
  const trendingAnime = await fetchTrending()

  return (
    <main className='flex flex-col gap-6'>
      <TrendingSlider results={trendingAnime.results} />

      <Suspense fallback={<GridSkeleton title={'Recent Anime Releases'} />}>
        <RecentEpisodes />
      </Suspense>
    </main>
  );
}

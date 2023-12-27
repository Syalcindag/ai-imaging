import HomePageContainer from "@/containers/home-page-container";
import { HomePageProvider } from "@/containers/home-page-container/useHomePage";

export default function Home() {
  return (
    <HomePageProvider>
      <HomePageContainer/>
    </HomePageProvider>
  )
}

import { AfishaEvent, HomeBanner, HomeRating, HomeViews } from "../../widgets";
import { CardPartners,CardFhdt,CardNews } from "../../features/index"

export const HomePage = () => {
  return (
    <div className="container">
      <HomeBanner />    {/*адаптив не готов */}
      <AfishaEvent />
      <CardFhdt/>
      <CardNews />  {/*  не готов */}
      <HomeViews /> {/*готов */}
      <CardPartners /> {/* готов */}
      <HomeRating />{/*  не готов*/}

    </div>
  );
}
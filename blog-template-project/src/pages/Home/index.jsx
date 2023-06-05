import {
  HomeContainer,
  HomeContentContainer,
  HomeHeaderContainer,
} from "./styles";
import logo from "../../assets/Logo.svg";
import homeimg from "../../assets/home-img.svg";
import { Link } from "react-router-dom";
import AddRecipe from "../../components/AddRecipe/AddRecipe";


export function Home() {
  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <img src={logo} alt="logo recipes" />

        <Link style={{ marginLeft: 400 }} to="/recipes">TARİFLERE GİT</Link>
        <Link to="/addrecipe">TARİF EKLE</Link>

      </HomeHeaderContainer>
      <HomeContentContainer>
        <div>
          <h1>Kolay & Hızlı Tarifler</h1>
          <p>
            İstediğiniz tarifi aramak için daha az zaman harcayın. Burada çeşitli
            tarifler bulacaksınız. Artık her gün aynı yemeği tekrarlamak yok. Hadi,
            yemek yapalım!!
          </p>
        </div>
        <img src={homeimg} alt="girl cooking" />
      </HomeContentContainer>
      {/* <AddRecipe /> */}
    </HomeContainer>
  );
}

import { Header } from "./header";
import { Introduction } from "./introduction";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Introduction></Introduction>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

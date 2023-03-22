import { Navbar } from "./components/Navbar/Navbar";
import HeroSections from "./components/HeroSection/HeroSections";
import Albums from "./components/AlbumsComponents/Albums";

function App() {
     return (
          <>
               <Navbar />
               <HeroSections />
               <Albums heading="Top Albums" />
               <Albums heading="New Albums" />
          </>
     );
}

export default App;

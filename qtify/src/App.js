import { Navbar } from "./components/Navbar/Navbar";
import HeroSections from "./components/HeroSection/HeroSections";
import Albums from "./components/AlbumsComponents/Albums";
import AccrodionFAQ from "./components/AccordionFAQ/AccrodionFAQ";
import { getTopAlbumList, getNewAlbumList, getSongList, getGenreList } from "./api/api";
import Song from "./components/FilterSectoin/FilterSection";
function App() {
     return (
          <>
               <Navbar />
               <HeroSections />
               <Albums title="Top Albums" apiCall={getTopAlbumList} />
               <Albums title="New Albums" apiCall={getNewAlbumList} />
               <Albums title="Songs" apiCall={getSongList} filterSource={getGenreList} />
               <AccrodionFAQ />
          </>
     );
}

export default App;

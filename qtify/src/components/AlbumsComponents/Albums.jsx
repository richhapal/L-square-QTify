import React, { useEffect, useState } from "react";
import CartComponent from "../CartComponent/CartComponent";
import Carousel from "../Carousel/Carousel";
import style from "./Albums.module.css";
import Filter from "../Filter/Filter";
const TopAlbums = (props) => {
     const { title, apiCall, filterSource } = props;
     const [isShowAll, setIsShowAll] = useState(false);
     const [albumList, setAlbumList] = useState([]);
     const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
     const [filters, setFilters] = useState([{ key: "all", label: "All" }]);

     const fetchData = async (dataSource) => {
          const data = await dataSource();
          setAlbumList([...data]);
     };

     useEffect(() => {
          fetchData(apiCall);
          if (filterSource) {
               // fetchData(filterSource)
               filterSource()
                    .then((res) => {
                         const { data } = res;
                         console.log("value", data);
                         // setFilters(data);

                         setFilters([...filters, ...data]);
                    })
                    .catch((e) => {
                         console.log(e);
                    });
          }
     }, []);

     const filterCartToRender = filterSource ? albumList.filter((elem) => (selectedFilterIndex !== 0 ? elem.genre.key === filters[selectedFilterIndex].key : elem)) : albumList;

     // console.log("filtersSongs", filterSongs);

     // console.log("filters", filters);

     //      <Tooltip title={} arrow>
     //       {/* <Button>Arrow</Button> */}
     //     </Tooltip>

     return (
          <section className={style.topAlbums}>
               <div className={style.topAlbumsHeading}>
                    <h4>{title}</h4>

                    {title !== "Songs" && (
                         <div className={style.topAlbumsHeadingButton}>
                              {!isShowAll ? (
                                   <h4
                                        onClick={() => {
                                             setIsShowAll(true);
                                        }}
                                   >
                                        Show all
                                   </h4>
                              ) : (
                                   <h4
                                        onClick={() => {
                                             setIsShowAll(false);
                                        }}
                                   >
                                        Collapse
                                   </h4>
                              )}
                         </div>
                    )}
               </div>
               {filterSource && <Filter data={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilterIndex={setSelectedFilterIndex} />}
               <div className={style.topAlbumsContent}>
                    {isShowAll ? (
                         filterCartToRender.map((data) => <CartComponent {...data} key={data.id} heading={title} />)
                    ) : (
                         <Carousel data={filterCartToRender} renderComponent={(cart) => <CartComponent {...cart} key={cart.id} heading={title} />} />
                    )}
               </div>
               {/* <Carousel data={albumList} renderComponent={(cart) => <CartComponent {...cart} key={cart.id} />} /> */}
          </section>
     );
};
export default TopAlbums;

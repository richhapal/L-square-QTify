import React, { useEffect, useState } from "react";
import { getTopAlbumList, getNewAlbumList } from "../../api/api";
import CartComponent from "../CartComponent/CartComponent";
import Carousel from "../Carousel/Carousel";
import style from "./Albums.module.css";
const TopAlbums = (props) => {
     const { title } = props;
     const [isShowAll, setIsShowAll] = useState(false);
     const [albumList, setAlbumList] = useState([]);

     useEffect(() => {
          const callApi = async () => {
               const data = await props.apiCall();
               setAlbumList([...data]);
          };
          callApi();
     }, []);

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

               <div className={style.topAlbumsContent}>
                    {isShowAll ? (
                         albumList.map((data) => <CartComponent {...data} key={data.id} heading={title} />)
                    ) : (
                         <Carousel data={albumList} renderComponent={(cart) => <CartComponent {...cart} key={cart.id} heading={title} />} />
                    )}
               </div>
               {/* <Carousel data={albumList} renderComponent={(cart) => <CartComponent {...cart} key={cart.id} />} /> */}
          </section>
     );
};
export default TopAlbums;

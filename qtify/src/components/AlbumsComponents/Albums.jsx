import React, { useEffect, useState } from "react";
import { getTopAlbumList, getNewAlbumList } from "../../api/api";
import CartComponent from "../CartComponent/CartComponent";
import style from "./Albums.module.css";
const TopAlbums = (props) => {
     const { heading } = props;
     const [albumList, setAlbumList] = useState([]);

     useEffect(() => {
          const callApi = async () => {
               if (heading === "Top Albums") {
                    console.log("top Albm");
                    const data = await getTopAlbumList();
                    setAlbumList([...data]);
               } else {
                    const data = await getNewAlbumList();
                    setAlbumList([...data]);
                    console.log("new Albm");
               }
          };
          callApi();
     }, []);

     return (
          <section className={style.topAlbums}>
               <div className={style.topAlbumsHeading}>
                    <div>
                         <h4>{heading}</h4>
                    </div>
                    <div className={style.topAlbumsHeadingButton}>
                         {/* <h4>Show all</h4> */}
                         <h4>Collapse</h4>
                    </div>
               </div>
               <div className={style.topAlbumsContent}>
                    {albumList.map((data) => (
                         <CartComponent {...data} key={data.id} />
                    ))}

                    {/* <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent /> */}
               </div>
          </section>
     );
};
export default TopAlbums;

import axios from "axios";
import React, { useContext, useEffect } from "react";
import Card from "../Card&CardList/Card";
import { FavContext } from "../FavContext";

function Favorite() {
  const { value, setValue } = useContext(FavContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/Favorite");

        setValue(res.data);
        // setValue(res);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [setValue]);

  console.log("Favorite render");
  return (
    <div>
      {console.log(value.data)}

      {value?.map((item) => {
        return <Card key={item.id} lsItem={item} query="favorite" />;
      })}
    </div>
  );
}

export default Favorite;

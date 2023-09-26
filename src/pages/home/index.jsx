import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/card";

const Home = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(loaderData);
  }, [loaderData]);

  return (
    <div className="home py-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-6">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

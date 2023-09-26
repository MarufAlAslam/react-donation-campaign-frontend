import { useEffect, useState } from "react";
import Card from "../../components/card";
import { useOutletContext } from "react-router-dom";

const Home = () => {
//   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [outletData, setOutletData] = useOutletContext();
//   console.log(loaderData);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
            // setData(data);
            setOutletData(data);
            setLoading(false);
        });
    setLoading(false);
  }, [setOutletData]);

  return (
    <div className="home md:py-[100px] py-[30px]">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-6">
          {loading
            ? "loading..."
            : outletData.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import Card from "../../components/card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
//   console.log(loaderData);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    setLoading(false);
  }, []);

  return (
    <div className="home md:py-[100px] py-[30px]">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-6">
          {loading
            ? "loading..."
            : data.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;

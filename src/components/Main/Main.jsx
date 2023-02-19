import Card from "./Card";
import { data } from "../../helpers/data"

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => <Card key={index} {...item} />)}

    </div>
  )

};

export default Main;

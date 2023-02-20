import Card from "./Card";
// import { data } from "../../helpers/data";
import "./Main.scss"

const Main = () => {
  return (
    <div className="card-container">
      {/* {data.map((item, index) => <Card key={index} {...item} />)} */}
      <Card/>
    </div>
  )

};

export default Main;

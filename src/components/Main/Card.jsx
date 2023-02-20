
import { useState } from "react";
import useData from "../../useData";

// { id, title, date, image, desc }

const Card = () => {
const {veri}= useData();
const [show, setShow] = useState(false)

console.log(veri)
  return (
    <>
    {veri.map((item) => {
      const { id, title, date, image, desc } = item
      return (
        <div key={id} className="cards" >

          <div className="title">
            <h1>{title}</h1>
          </div>

          <div className="date">
            <h1>{date}</h1>
          </div>

          <img src={image} alt="" />

          <div className="card-over">
            <p>
              {show ? desc : `${desc.slice(0,200)}...`}
              <button onClick={() => setShow(!show)}>
                {show ? "Show Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
        )
    })}
      </>
    )
};

export default Card;

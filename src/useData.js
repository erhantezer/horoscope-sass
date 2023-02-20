import { useState } from "react";
import {data} from "./helpers/data"

const useData = () => {
const [veri, setVeri] = useState(data);



  return {veri}
};

export default useData;

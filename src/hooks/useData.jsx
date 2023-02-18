import { useEffect, useState } from "react";
import { data } from "../../helpers/data";

const useData = () => {
    const [veri, setVeri] = useState([])

    const fetchData = () => {
        data.map((item) => setVeri(item))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { ...veri }
};

export default useData;

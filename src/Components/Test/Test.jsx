
import { useEffect, useState } from "react";
import TestDetails from "./TestDetails";
import axios from "axios";


const Test = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://diagnostic-management-server.vercel.app/test');
                setTests(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10  gap-5 ">
            {
                tests.map((test, idx) => (
                    <TestDetails key={idx} test={test}></TestDetails>
                ))
            }
        </div>
    );
};

export default Test;
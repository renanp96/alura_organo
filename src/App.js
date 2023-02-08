import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
    const [servants, setServants] = useState([]);

    const onAddServ = (servant) => {
        console.log(servant);
        setServants([...servants, servant]);
    }

    return (
        <div className="App">
            <Banner/>
            <Form onSubmitServ={servant => onAddServ(servant)} />
        </div>
    );
}

export default App;

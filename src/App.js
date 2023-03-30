import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import PhoneList from "./components/PhoneList";

function App() {
  const [allPhones, setAllPhones] = useState(null);
  const [phoneDetails, setPhoneDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios("http://localhost:5005/api/phones");
        setAllPhones(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const getPhoneDetails = async (id) => {
    try {
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>The Phone Cave</h1>
      <div>
        <div>
          {!allPhones ? (
            <h4>Buscando...</h4>
          ) : (
            <ul>
              {allPhones.map((each) => (
                <PhoneList key={each.id} id={each._id} name={each.name} getPhoneDetails={getPhoneDetails} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

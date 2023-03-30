import axios from "axios";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import PhoneDetails from "./components/PhoneDetails";
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
      const response = await axios(`http://localhost:5005/api/phones/${id}`);
      setPhoneDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>The Phone Cave</h1>
      <div className="container">
        <div className="all-phone-list">
          {!allPhones ? (
            <>
              <h4>Searching...</h4>
              <PacmanLoader />
            </>
          ) : (
            <ul>
              {allPhones.map((each) => (
                <PhoneList
                  key={each.id}
                  id={each._id}
                  name={each.name}
                  getPhoneDetails={getPhoneDetails}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="phone-details">
          {!phoneDetails ? (
            <h4>Select a Phone</h4>
          ) : (
            <PhoneDetails phoneDetails={phoneDetails} />
          )}
        </div>
      </div>
      <footer>
        <p>By: Alberto Pérez León</p>
      </footer>
    </div>
  );
}

export default App;

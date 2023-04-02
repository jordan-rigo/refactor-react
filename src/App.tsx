import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Form from "./Form";
import viteLogo from "/vite.svg";
import { useAddPet, useFindPetsByStatus } from "./services/pet/pet";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import BasicForm from "./BasicForm";
import FormFactory from "./FormFactory/FormFactory";
import regionConfigs from "./FormFactory/config";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isBasicFormVisible, setIsBasicFormVisible] = useState(false);
  const [isFormFactoryVisible, setisFormFactoryVisible] = useState(false);

  const { data, isError, isLoading, refetch } = useFindPetsByStatus(
    {
      status: "available",
    }
    // { query: { refetchOnWindowFocus: false } }
  );

  console.log({ data, isLoading });

  const { mutateAsync: createPetAsync } = useAddPet();

  const { mutateAsync: loginAsync } = useMutation({
    mutationFn: (credentials: any) => {
      return axios.post("https://dummyjson.com/auth/login", credentials);
    },
  });

  const handleCreatePet = async () => {
    try {
      await createPetAsync({
        data: {
          id: 1123456,
          name: "RTK-QUERY",
          category: {
            id: 1,
            name: "Dogs",
          },
          photoUrls: ["string"],
          tags: [
            {
              id: 0,
              name: "string",
            },
          ],
          status: "available",
        },
      });

      refetch();
      console.log("Added Success");
    } catch (e) {
      console.error("error");
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await loginAsync({
        username: "kminchelle",
        password: "0lelplR",
      });

      console.log({ data });

      localStorage.setItem("accessToken", data.token);

      refetch();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreatePet}>Add Pet</button>

      <button onClick={() => setisFormFactoryVisible(true)}>
        Show Form factory
      </button>

      <button onClick={() => setIsFormVisible(true)}>
        Show Lazily laod form
      </button>

      <button onClick={() => setIsBasicFormVisible(true)}>
        Show basic form
      </button>

      {isFormFactoryVisible && (
        <FormFactory
          onSubmit={(data: any) => console.log(data)}
          form={regionConfigs["us"]}
        />
      )}

      {isFormVisible && <Form />}
      {isBasicFormVisible && <BasicForm />}
    </div>
  );
}

export default App;

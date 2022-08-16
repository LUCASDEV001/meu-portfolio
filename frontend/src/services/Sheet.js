import axios from "axios";

export const save = (data) => {
  const config = {
    method: "post",
    url: "https://sheet.best/api/sheets/6b12511b-9981-41ea-aa1f-2b8e27fc4c78",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then((res) => {
      console.log("Dados da planilha", res);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

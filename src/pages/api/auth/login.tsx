import Axios from "axios";

export default function handler(req: any, res: any) {
  // alert("Jesam ovde?");
  console.log("Cure");
  Axios.post("https://api.trypureblue.com/auth/login", req.body, {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
    },
  })
    .then((respond) => {
      res.status(200).json(respond.data);
    })
    .catch((error) => {
      res.status(400).json(error.response.data);
    });
}

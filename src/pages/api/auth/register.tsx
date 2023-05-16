import Axios from "axios";

export default function Register(req: any, res: any) {
  Axios.post("https://api.trypureblue.com/auth/register", req.body, {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
    },
  })
    .then((respond) => {
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      res.status(400).json(error.response.data);
    });
}

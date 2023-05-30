import Axios from "axios";

export default function handler(req, res) {
  Axios.post(
    "https://api.trypureblue.com/user/payment-info",
    req.body.formData,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": "123456",
        "Authorization": "Bearer " + req.body.Token,
      },
    }
  )
    .then((respond) => {
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      console.log(error.response.data.errors);
      return res.status(400).json(error.response.data.errors);
    });
}

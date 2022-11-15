import axios from "axios";
import Swal from "sweetalert2";

export function CRUDKUB(name, method, data, id) {
  var apiurl = "";
  var met = "";

  switch (method) {
    case "create":
      apiurl = `http://rhome19.thddns.net:5526/api/${name}/create`;
      met = "post";
      break;
    case "delete":
      apiurl = `http://rhome19.thddns.net:5526/api/${name}/delete/${id}`;
      met = "delete";
    case "get":
      apiurl = `http://rhome19.thddns.net:5526/api/${name}/`;
      met = "get";
    // case "update":
    //   apiurl = `http://rhome19.thddns.net:5526/api/${name}/${id}`;
    //   met = "put";
    default:
      break;
  }

  return axios({
    method: met,
    url: apiurl,
    data: data,
  }).then(function (response) {
    if (method == "get") {
      return response.data;
    } else {
      Swal.fire({
        position: "mid",
        icon: "success",
        title: response.statusText,
        showConfirmButton: true,
        timer: 1500,
      });
      window.history.back();
    }

    // switch (method) {
    //   case "create":
    //     Swal.fire({
    //       position: "mid",
    //       icon: icon,
    //       title: response.statusText,
    //       showConfirmButton: true,
    //       timer: 1500,
    //     });
    //     break;
    //   case "delete":
    //     Swal.fire({
    //       title: "Are you sure?",
    //       text: "You won't be able to revert this!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //       }
    //     });
    //   default:
    //     break;
    // }
  });
}

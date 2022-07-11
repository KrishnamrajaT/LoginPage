import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  bttn: {
    backgroundColor: "sandybrown",
    width: "30%",
    borderRadius: "20px",
    color: "white"
  }
}));

export default function App() {
  const classes = useStyles();
  const [inputVal, setInputVal] = useState({
    email: "",
    pwd: ""
  });

  const onsubmit = (e) => {
    setInputVal((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.email === "" || inputVal.pwd === "") {
      toast.error("Fields are empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      toast.success("Succesfully Submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }

    console.log(inputVal);
  };
  return (
    <center>
      <ToastContainer />

      <div className="col-md-4 mt-5 shadow " style={{ height: "43vh" }}>
        <form action="/action_page.php">
          <div class="form-group">
            <h5>Login Here</h5>
            <label for="email" style={{ marginRight: "88%" }}>
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={inputVal.email}
              onChange={onsubmit}
              required
            />
          </div>
          <div class="form-group">
            <label for="pwd" style={{ marginRight: "88%" }}>
              Password:
            </label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
              value={inputVal.pwd}
              onChange={onsubmit}
            />
            <span>
              <a href="" style={{ marginRight: "-60%" }}>
                Forgot Password
              </a>
            </span>
          </div>
          <button
            type="submit"
            className={clsx(classes.bttn, "btn")}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </center>
  );
}

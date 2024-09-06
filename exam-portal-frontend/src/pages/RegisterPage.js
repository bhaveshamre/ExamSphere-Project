import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as authConstants from "../constants/authConstants";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";




const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerReducer = useSelector((state) => state.registerReducer);
  const form = useRef();
  const showPasswordHandler = () => {
    const temp = !showPassword;
    setShowPassword(temp);
    if (temp) {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const showConfirmPasswordHandler = () => {
    const temp = !showConfirmPassword;
    setShowConfirmPassword(temp);
    if (temp) {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
  };

  const sendAutoReply = (username, password, toEmail, firstname) => {
    emailjs
      .send(
        "service_g8c7soc",
        "template_6vxkaea",
        {
          to_email: toEmail,
          username: username,
          password: password,
          first_name: firstname,
        },
        "ViQ-UHtFDV_B_vDFq"
      )
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          console.log("Email sent successfully", result);
        } else {
          console.log("Email sending failed", result);
        }
        
        // Optionally show a success toast or message for the auto-reply
      })
      .catch((error) => {
        console.error(error.text);
        console.log("email sent failed");
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidUsername &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidPhone
    ) {
      sendAutoReply(username, password, email, firstName);
      const user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        phoneNumber: phoneNumber,
      };
      register(dispatch, user).then((data) => {
        if (data.type === authConstants.USER_REGISTER_SUCCESS) {
          navigate("/login");
        }
      });
    } else {
      alert("Invalid data");
    }
  };
  function setNameHandler(name) {
    console.log(isValidFirstName);
    const isValidName = /^[a-zA-Z]+$/.test(name) && name.length > 2;
    setFirstName(name);
    setIsValidFirstName(isValidName);
    console.log(isValidFirstName);
  }

  function setLastNameHandler(lastname) {
    const isValidLastName = /^[a-zA-Z]+$/.test(lastname) && lastname.length > 2;
    setLastName(lastname);
    setIsValidLastName(isValidLastName);
  }

  function setUsernameHandler(username) {
    const isValidUsername =
      /^[a-zA-Z0-9@]+$/.test(username) && username.length > 4;
    setUsername(username);
    setIsValidUsername(isValidUsername);
  }
  function setPasswordHandler(password) {
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      );
    setPassword(password);
    setIsValidPassword(isValidPassword);
  }

  function setConfirmPasswordHandler(cpassword) {
    const isValidConfirmPassword = cpassword == password;
    setConfirmPassword(cpassword);
    setIsValidConfirmPassword(isValidConfirmPassword);
  }

  function setPhoneHandler(phone) {
    const isValidPhoneNumber = /^[789]\d{9}$/.test(phone);
    setPhoneNumber(phone);
    setIsValidPhone(isValidPhoneNumber);
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form ref={form} onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter First Name"
            value={firstName}
            // onChange={(e) => {
            //   setFirstName(e.target.value);
            // }}
            onChange={(e) => setNameHandler(e.target.value)}
            isInvalid={!isValidFirstName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Name should contain alphabets and be longer than 2 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Last Name"
            value={lastName}
            // onChange={(e) => {
            //   setLastName(e.target.value);
            // }}
            onChange={(e) => setLastNameHandler(e.target.value)}
            isInvalid={!isValidLastName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            last Name should contain alphabets and be longer than 2 characters.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="lname">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            // onChange={(e) => {
            //   setLastName(e.target.value);
            // }}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            valid email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            value={username}
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
            onChange={(e) => setUsernameHandler(e.target.value)}
            isInvalid={!isValidUsername}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Username longer than 5 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={`${passwordType}`}
              placeholder="Enter Password"
              value={password}
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              onChange={(e) => setPasswordHandler(e.target.value)}
              isInvalid={!isValidPassword}
            ></Form.Control>
            <Button
              onClick={showPasswordHandler}
              variant=""
              style={{ border: "1px solid black" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
            <Form.Control.Feedback type="invalid">
              password must contain 1 numeric 1 special char 1 uppercase greater
              than 6
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="my-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={`${confirmPasswordType}`}
              placeholder="Confirm Password"
              value={confirmPassword}
              // onChange={(e) => {
              //   setConfirmPassword(e.target.value);
              // }}
              onChange={(e) => setConfirmPasswordHandler(e.target.value)}
              isInvalid={!isValidConfirmPassword}
            ></Form.Control>
            <Button
              onClick={showConfirmPasswordHandler}
              variant=""
              style={{ border: "1px solid black" }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
            <Form.Control.Feedback type="invalid">
              password mismatch
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="my-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            // onChange={(e) => {
            //   setPhoneNumber(e.target.value);
            // }}
            onChange={(e) => setPhoneHandler(e.target.value)}
            isInvalid={!isValidPhone}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            invalid phone number
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant=""
          className="my-3"
          type="submit"
          style={{ backgroundColor: "rgb(68 177 49)", color: "white" }}
        >
          Sign up
        </Button>
      </Form>

      {registerReducer.loading ? (
        <Loader />
      ) : (
        <Row className="py-3">
          <Col>
            Have an Account?{" "}
            <Link to="/" style={{ color: "rgb(68 177 49)" }}>
              Sign in
            </Link>
          </Col>
        </Row>
      )}
    </FormContainer>
  );
};

export default RegisterPage;

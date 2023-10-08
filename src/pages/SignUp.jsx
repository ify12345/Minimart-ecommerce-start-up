import React, { useState } from "react";
import Helmet from "../components/helmet/helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const signup = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      console.log(user);

      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          // update profile for user
         await  updateProfile(user,{
            displayName: username,
            photoURL: downloadURL,

           });

          // store user data in firebase
          await setDoc(doc(db, "users",user.uid),{
              uid: user.uid,
              displayName: username,
              email,
             photoURL: downloadURL,
          })
        })
      })


      setLoading(false)
      toast.success("Account created")
      navigate('/login')
    }
     catch (error) {
      setLoading(false)
      toast.error("something went wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
           {
            loading? <Col className="text-center"><h6 className="fw-bold">Loading....</h6></Col>:
            <Col lg="6" className="m-auto text-center">
            <h3 className="fw-bold fs-4 mb-4">Sign up</h3>

            <Form className="auth_form" onSubmit={signup}>
              <FormGroup className="form_group">
                <input
                  type="text"
                  placeholder="Username "
                  value={username}
                  autoComplete="none"

                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input
                  type="email"
                  placeholder="email "
                  value={email}
                  autoComplete="none"

                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input
                  type="password"
                  placeholder="enter your password"
                  value={password}
                  autoComplete="none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input
                  type="file"  
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormGroup>

              <button type="submit" className="buy_btn auth_btn">
                Create an Account
              </button>
              <p>
                Already Have an account? <Link to="/login">Login</Link>
              </p>
            </Form>
          </Col>
           }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;

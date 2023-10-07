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


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
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
             photoURL: downloadURL,
          })
        })
      })


    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Sign up</h3>

              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Username "
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Username "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="file"
                    placeholder="enter your password"
                    
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
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;

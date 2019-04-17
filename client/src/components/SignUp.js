import React,{ Component } from 'react';
import { Form, Button, Container, Row, Col,Alert } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';

// class SignUp extends Component{

//     constructor(props){
//         super(props)
//         this.state={
//             payload:{
//                 username:"",
//                 email:"",
//                 password:"",
//                 passwordConfirmation:"",
//             },
//             errors:null,
//             samePassword:false,
//             notEqualWarning: null
//         }
//     }

//     handleChange=(event)=>{
//         this.setState({
//             ...this.state,
//             payload:{
//                 ...this.state.payload,
//                 [event.target.name]: event.target.value
//             }
//         },()=>{
//             const passwordsAreEqual=this.state.payload.password === this.state.payload.passwordConfirmation ;
//             this.setState({
//                 samePassword: passwordsAreEqual,
//                 notEqualWarning: passwordsAreEqual ? null : "Make sure that both passwords are equal."
//             })
//         })
//     }

//     handleSubmit=(event)=>{
//         event.preventDefault()
//         if(this.state.samePassword){
//             fetch("http://localhost:3001/users", {
//                 method: 'POST',
//                 headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(this.state.payload)
//             }).then(async (response)=>{
//                 if(response.ok){
//                     return response.text()
//                 }
//                 const jsonResponse = await response.json();
//                 return jsonResponse;
//             })
//             .then(function(text) {                          // second then()
//                 console.log('Request successful', text);  
//               })  
              
//         }else{
//             const passwordsAreEqual=this.state.password === this.state.passwordConfirmation ;
//             this.setState({
                
//                 samePassword: passwordsAreEqual,
//                 notEqualWarning: passwordsAreEqual ? null : "Make sure that both passwords are equal."
//             })
//         }   
//     }
    
//     render(){
//         const { handleChange,handleSubmit } = this;
//         const { samePassword,notEqualWarning,errors }=this.state;
//         const { email,username,password,passwordConfirmation }=this.state.payload;

//         return(
//             <div>
                // <Container className="mt-3 mt-4">
                //     <Row>
                //         <Col md={{span:6, offset: 3}}>   
                //             <Form onSubmit={ handleSubmit}>
                //                 { errors ? 
                //                     <Alert variant="danger">
                //                         { notEqualWarning }
                //                     </Alert>
                //                     :
                //                     ""
                //                 }
                //                 <Form.Group controlId="formBasicEmail">
                //                     <Form.Label>Email address</Form.Label>
                //                     <Form.Control type="email" name="email" onChange={ handleChange} placeholder="Enter email" value={ email } />
                //                     <Form.Text className="text-muted">
                //                     </Form.Text>
                //                 </Form.Group>
                //                 <Form.Group controlId="formBasicUsername">
                //                     <Form.Label>Username</Form.Label>
                //                     <Form.Control type="text" name="username" onChange={ handleChange } placeholder="Enter text" value={ username } />
                //                     <Form.Text className="text-muted">
                //                     </Form.Text>
                //                 </Form.Group>
                //                 <Form.Group controlId="formBasicPassword">
                //                     <Form.Label>Password</Form.Label>
                //                     <Form.Control type="password" name="password" value={ password } onChange={ handleChange } placeholder="Password" />
                //                 </Form.Group>
                //                 <Form.Group controlId="formBasicPassword">
                //                     <Form.Label>Password Confirmation</Form.Label>
                //                     <Form.Control type="password" name="passwordConfirmation" value={ passwordConfirmation } onChange={ handleChange } placeholder="Password" />
                //                 </Form.Group>
                //                     {!samePassword && notEqualWarning ? 
                //                         <Alert variant="danger">
                //                             { this.state.notEqualWarning }
                //                         </Alert>
                //                         :""
                //                     }
                //                 <Button variant="primary" type="submit">
                //                     Sign Up
                //                 </Button>
                //             </Form>;
                //         </Col>
                //     </Row>
                // </Container>
//             </div>
//         )
//     }
// }


const schema = yup.object({
  username: yup.string().required("Username is required"),
  email:yup.string().email().required("Email is required"),
  password:yup.string().min(8,"Password must be at least 8 characters").required("Password is Required"),
  passwordConfirmation:yup.string().min(8).required("Password Confirmation id required")
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUp=()=> {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log("Submitting...")}
      initialValues={{
        email: '',
        username: '',
        password:'',
        passwordConfirmation:''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container className="mt-3 mt-4">
        <Row>
            <Col md={{span:6, offset: 3}}>   
                <Form onSubmit={ handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                          type="text" name="username" 
                          onChange={ handleChange } 
                          onBlur={ handleBlur } 
                          placeholder="Enter Username" 
                          value={ values.username } 
                          isInvalid={!!errors.username }
                          isValid={errors.username===undefined && touched.username}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email" name="email" 
                          onChange={ handleChange} 
                          onBlur={ handleBlur } 
                          placeholder="Enter email" 
                          value={ values.email } 
                          isInvalid={!!errors.email}
                          isValid={errors.email===undefined && touched.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          name="password" 
                          value={ values.password }
                          onBlur={ handleBlur } 
                          onChange={ handleChange } 
                          placeholder="Password"
                          isInvalid={!!errors.password}
                          isValid={ errors.password === undefined && touched.password }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" 
                          name="passwordConfirmation" 
                          value={ values.passwordConfirmation } 
                          onChange={ handleChange } 
                          placeholder="Password" 
                          isInvalid={!!errors.passwordConfirmation}
                          isValid={ errors.passwordConfirmation === undefined && touched.passwordConfirmation }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.passwordConfirmation}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>;
            </Col>
        </Row>
    </Container>
      )}
    </Formik>
  );
}


export default SignUp;
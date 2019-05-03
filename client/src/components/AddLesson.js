import React from 'react';
import { Formik } from 'formik';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';
import { registerLesson } from '../actions/actionCreators';
import { connect } from 'react-redux';

const schema = yup.object({
    title: yup.string().min(10).required("Title is required"),
    content: yup.string().min(100).required("Content is required"),
  });
  
const AddLesson=({ dispatch,lesson,history })=>{
    return(
<Formik
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            await dispatch(registerLesson(values))
            if (lesson.registering==="done") history.push("/lessons")
            setSubmitting(false)
        }}
        initialValues={{
          title:'',
          content:''
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
          isSubmitting
        }) => (
                  <Form onSubmit={handleSubmit}>
                    <h3 className="text-center">Create A Lesson</h3>
                    <Form.Group controlId="formBasicTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text" name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Title for the Lesson"
                        value={values.title}
                        isInvalid={!!errors.title}
                        isValid={errors.title === undefined && touched.title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicContent">
                      <Form.Label>Lesson Content</Form.Label>
                      <Form.Control 
                        as="textarea"
                        rows="15"
                        type="email" name="content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter the content of the lesson"
                        value={values.content}
                        isInvalid={!!errors.content}
                        isValid={errors.content === undefined && touched.content}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.content}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        You can use mark down to write the content to format it the way you want it
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      Add
                      </Button>
                  </Form>
          )}
      </Formik>
    )
}

const mapStateToProps=( state )=>{
    return {
        lesson:state.lesson,
        auth:state.auth
    }
}

export default connect(mapStateToProps)(AddLesson);
import { Formik,Field,Form } from 'formik';
import {useNavigate} from "react-router-dom";
const axios = require('axios');

function PostForm({token,setError}){
    const navigate = useNavigate();
    return (
        <div className="PostForm">
            <Formik
            initialValues={{ name: '', surname: ''}}
            onSubmit={(values)=>{
                axios.post('http://localhost:5000/', values, {
                    headers: {
                      'Authorization': `Basic ${token}`
                    },
                  }).catch(err=>{
                    setError(err)
                    navigate("/error")
                    })
                navigate("/list")}}>
                <Form>
                    <Field name="name" placeholder="Name" />
                    <Field name="surname" placeholder="Surname" />
                    <button type="submit">
                        Post
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default PostForm;
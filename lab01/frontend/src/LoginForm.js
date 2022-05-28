import { Formik,Field,Form } from 'formik';
import {useNavigate} from "react-router-dom";
import {Buffer} from 'buffer';

function LoginForm({setToken}){
    const navigate = useNavigate();
    const createToken = (values) => { return Buffer.from(`${values.username}:${values.password}`, 'utf8').toString('base64');}
    return (
        <div className="LoginForm">
            <Formik
            initialValues={{ username: '', password: ''}}
            onSubmit={(values)=>{
                const token = createToken(values)
                setToken(token)
                navigate("/post")}}>
                <Form>
                    <Field name="username" placeholder="Login" />
                    <Field name="password" placeholder="Password" />
                    <button type="submit">
                        Login
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm;
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const [userInfo, setUserInfo] = useState({ fullname: "", username: "", email: "", password: "" })
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)
    const handleChange = (event) => {
        if (event.target.name === "fullname") {
            setUserInfo({ ...userInfo, fullname: event.target.value })
        }
        if (event.target.name === "username") {
            setUserInfo({ ...userInfo, username: event.target.value })
        }
        if (event.target.name === "email") {
            setUserInfo({ ...userInfo, email: event.target.value })
        }
        if (event.target.name === "password") {
            setUserInfo({ ...userInfo, password: event.target.value })
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/app/register", userInfo).then(res => console.log())
        setStatus(true)

    }
    useEffect(() => {
        if (status) {

            navigate('/')
        }
    }, [status])
    console.log(userInfo, "<<<")
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-5">

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="fullname">Full name</Label>
                            <Input value={userInfo.fullname} onChange={handleChange} type="text" name="fullname" id="fullname" placeholder="fullname" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">User name</Label>
                            <Input value={userInfo.username} onChange={handleChange} type="text" name="username" id="username" placeholder="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input value={userInfo.email} onChange={handleChange} type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input value={userInfo.password} onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>
                        <Button>Add new User</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AddUser
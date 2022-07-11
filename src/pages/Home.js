import React, { useState, useContext } from "react";
import Axios from "axios";

import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


const Home = () => {

    const context = useContext(UserContext)
    const [query, setQuery] = useState("")
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
        } catch (error) {
            toast("Oops! Invalid Input", { type: "error" })
        }

    }

    return (
        <Container className='text-center mt-5'>
            <Row className=" mt-5">
                <Col md="4">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Enter your input here"
                        />
                        <InputGroupAddon addonType="append">
                            <Button onClick={fetchDetails} color="primary">Get Output</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ? <UserCard user={user} /> : null}
                </Col>
                <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
            </Row>
        </Container>
    );
};

export default Home;
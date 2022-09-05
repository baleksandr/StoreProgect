import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {addTodo, deleteTodo, toggleTodo} from "./ToDoListActions";
import ComponentImg from "../ComponentImg/ComponentImg";
import image1 from "../../assets/button_add.jpg"
import image2 from "../../assets/button_delete.jpg"
import "./ToDostyles.scss"
import Form from 'react-bootstrap/Form';
import {Button, Col, InputGroup} from "react-bootstrap";

const ToDoList = ({list}) => {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log("event.target", event.target)
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form validated={validated} onSubmit={handleSubmit}>
            <div className={"inputForm"}>
                {/*<input  placeholder={"Input Task"} type={"text"} className={"inputStyle"} value={value}*/}
                {/*<input required placeholder={"Input Task"} type={"text"} className={"inputStyle"} value={value}*/}
                {/*       onChange={(e) => setValue(e.target.value)}/>*/}
                <Form.Group as={Col} controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <Form.Control
                            value={value}
                            className={"inputStyle"}
                            type="text"
                            placeholder={"Input Task"}
                            aria-describedby="inputGroupPrepend"
                            onChange={(e) => setValue(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <Button type={"submit"} className={"btn"}
                        onClick={(e) => {
                            // e.preventDefault();
                            dispatch(addTodo(value));
                            setValue("")
                        }}>
                    <ComponentImg image={image1} width={"50px"} height={"50px"}/>
                </Button>
            </div>

            {list.map(({checked, title}) =>
                <div className={"todoList"} key={title}>
                    <label>
                        <input type="checkbox" checked={checked}
                               onChange={() => dispatch(toggleTodo(title))}/>
                        <div>{title}</div>
                    </label>
                    <button className={"btn"} onClick={() => {
                        if (window.confirm(`Do you want delete ${title}?`)) {
                            dispatch(deleteTodo(title))
                        }
                    }}><ComponentImg image={image2} width={"43px"} height={"40px"}/>
                    </button>
                </div>)}
        </Form>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.todoList
    }
}

export default connect(mapStateToProps)(ToDoList);
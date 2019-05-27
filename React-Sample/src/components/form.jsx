import React, {Component} from 'react';
import '../web_resources/css/style.css';

//inline style for dialogEPay component
const formBox = {
        fontSize: '1vw',
        fontFamily: 'poppins',
        float: 'left',
        width: '35vw',
        height: 'auto',
        padding: '1vw',
        margin: '2vw',
        boxSizing: 'border-box',
        border: '0.18vw solid #ff0000',
        borderRadius: '1.3vw',
    }

class Form extends Component {
    constructor(props) {
        super(props);

        //initializes the class properties
        this.state = {
            name: "",
            birthDate: ""
        }

        //passing class context to each method.
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    /*
    this triggers when user type inputs in inputs fields
    this store input fields values to class property values
    */
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /*
    this triggers when user click the submit button
    */
    submitHandler(event) {
        event.preventDefault(); //prevent refresh of input values
        alert(`Name: ${this.state.name}\nBirthday: ${this.state.birthDate}`);
    }

    render() {
        //retrieve today's date
        let today = new Date().toISOString().substr(0, 10);

        return <div style={formBox}>
            <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" value={this.state.name}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Birthday</td>
                        <td><input type="date" max={today} name="birthDate" value={this.state.birthDate}
                                   onChange={this.changeHandler}
                                   className='textBox' required/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='button'>Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

export default Form;

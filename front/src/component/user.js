import React, { Component } from 'react'
import axios from 'axios';
import "./user.css";
export class user extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            tblusers: [],
        };
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER}/allUsers`).then((axiosResponse) => {
            this.setState({
                tblusers: axiosResponse.data
            });
        }).catch(error => alert(error));
    };



    addUser = (e) => {

        e.preventDefault();
        const body = {
            strEmail: e.target.strEmail.value,
            strName: e.target.strName.value,
            dtmDOB: e.target.dtmDOB.value,
            strPassword: e.target.strPassword.value,


        };

        axios.post(`${process.env.REACT_APP_SERVER}/adduser`, body).then(axiosResponse => {
            this.state.tblusers.push(axiosResponse.data);
            this.setState({
                tblusers: this.state.tblusers
            });
        }).catch(error => alert(error));
    }


    render() {
        return (
            <div>

                <form onSubmit={(e) => this.addUser(e)}>
                    <label> strName</label>
                    <input type="text" id="fname" name="strName" placeholder="Your name.."  required />

                    <label>dtmDOB </label>
                    <input type="date" id="lname" name="dtmDOB" placeholder="Your last name.." required />

                    <label>strEmail</label>
                    <input type="email" name="strEmail" placeholder="Your Email.." required />

                    <label>strPassword</label>
                    <input type="pass" name="strPassword" placeholder="Your Password.."  required/>

                    <input type="submit" value="Submit" />
                </form>

                {
                    this.state.tblusers.length>0 &&
                    <div>
                        {
                            this.state.tblusers.map((com, idx) => {
                                return (
                <div>
                    
     <h1>Thank you for your request. The serverApp received the following information and soon will be 
     able to save this data into the database:</h1>
                    <p>strEmail: {com.strEmail}</p>
                <p>strName: {com.strName}</p>
                <p>strPassword: {com.strPassword}</p>
                <p>dtmDOB: {com.dtmDOB}</p></div>

                                )
                            })
                        }
                    </div>
                }


            </div>
        )
    }
}


export default user;

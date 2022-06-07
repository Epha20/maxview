import React, { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import "./App.css"


import axios from 'axios';



export default class App extends Component {

        constructor(props) {
          super(props)


    // Setting up functions
    this.onChangeMemberName = this.onChangeMemberName.bind(this);
    this.onChangeMemberAge = this.onChangeMemberAge.bind(this);
    this.onChangeMemberMobile= this.onChangeMemberMobile.bind(this);
    this.onChangeMemberEmail = this.onChangeMemberEmail.bind(this);
    this.onChangeMemberGym= this.onChangeMemberGym.bind(this);
    this.onChangeMemberAerobics= this.onChangeMemberAerobics.bind(this);
    this.onChangeMemberSauna= this.onChangeMemberSauna.bind(this); 
    this.onChangeMemberSex= this.onChangeMemberSex.bind(this); 
    this.onChangeMemberDuration= this.onChangeMemberDuration.bind(this); 
    
    
    
    this.onSubmit = this.onSubmit.bind(this);

 // Setting up state
 this.state = {
        name: '',
        email: '',
        age:'',
        mobile:'',
        gym:'',
        aerobics: '',
        sauna: '',
        sex:'',
        duration:'',
      }
    }
    onChangeMemberName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeMemberEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeMemberAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeMemberMobile(e) {
    this.setState({ mobile: e.target.value })
  }
  onChangeMemberGym() {
    this.setState( prevState => ({
gym: !prevState.gym
    })); }
  
    onChangeMemberAerobics() {
      this.setState( prevState => ({
  aerobics: !prevState.aerobics
      })); }
  
      onChangeMemberSauna() {
        this.setState( prevState => ({
    sauna: !prevState.sauna
        })); }
        onChangeMemberSex(e) {
                this.setState({ sex: e.target.value })
              }
              onChangeMemberDuration(e) {
                this.setState({ sex: e.target.value })
              }

        onSubmit(e) {
                e.preventDefault()
             let arr = [];
                  for (var key in this.state) {
                    if(this.state[key] === true) {
                      arr.push(key); 
                    }
                  }
                const studentObject = {
                  name: this.state.name,
                  email: this.state.email,
                  age: this.state.age,
                  mobile: this.state.mobile,
                gym: arr.toString(), 
                aerobics: arr.toString(),
                sauna: arr.toString() ,
                sex:this.state.sex(),
                duration:this.state.duration()

            
                }; 
                axios.post('http://localhost:5000/api/create-member', studentObject)
                .then(res => console.log(res.data));

                this.setState({ name: '', email: '', age:'', mobile:'' , gym:'', aerobics:'',sauna:'', sex:'', duration:'', });
        }
render()

{
  return (    
   <div className="container" >
      
      <form onSubmit={this.onSubmit}><h2 style={{textAlign:'center', marginTop:'40px', fontFamily: 'fantasy'}}>MAXVIEW GYM MEMBERSHIP APPLICATION AND RENEWAL FORM</h2>
      <br/>
       <br/>
       <br/>
       <Table stripped borderless hover size="sm"  id="tab_logic">
      <thead>
        <tr>
          <th class="text-center">"#"</th>
          <th class="text-center">Name</th>
          <th class="text-center">Age</th>
          <th class="text-center">Mobile</th>
          <th class="text-center">Email</th>
          <th class="text-center">GYM</th>
          <th class="text-center">Aerobics</th>
          <th class="text-center">Sauna</th>
        </tr>
      </thead>
      <tbody>
        <tr id='addr0'>
          <td>1</td>
          <td>
          <input type="text" name='name[]'  placeholder='Enter Full Name' class="form-control" 
          value={this.state.name} onChange={this.onChangeMemberName}/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='Enter age' class="form-control"
          value={this.state.age} onChange={this.onChangeMemberAge}/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='Enter Mobile' class="form-control" 
          value={this.state.mobile} onChange={this.onChangeMemberMobile}/>
          </td>
          <td> 
          
      <input type="email" name="email[]" placeholder='Enter email' class="form-control" 
      value={this.state.email} onChange={this.onChangeMemberEmail}/>
      
       </td>
       <td> 
         
      <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" 
      value={this.state.gym}  onChange={this.onChangeMemberGym} />
       
       </td>
       <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" 
           value={this.state.aerobics} onChange={this.onChangeMemberAerobics}/>
          
           </td>
           <td> 
         
         <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" 
         value={this.state.sauna} onChange={this.onChangeMemberSauna}/>
          
          </td>
          <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right" value={this.state.sex} onChange={this.onChangeMemberSex}>
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right" value={this.state.duration} onChange={this.onChangeMemberDuration}>
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
               <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr1'>
          <td>2</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control" />
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>

          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr2'></tr>
      </tbody>
      <tbody>
        <tr id='addr2'>
          <td>3</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr3'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>4</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>5</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>6</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>7</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>8</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>9</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
        </tr>
                  <tr id='addr1'></tr>
      </tbody>
      <tbody>
        <tr id='addr0'>
          <td>10</td>
          <td>
          <input type="text" name='name[]'  placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='' class="form-control"/>
          </td>
          <td> 
          
          <input type="email" name="email[]" placeholder='' class="form-control"/>
          
           </td>
          <td> 
          
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
          
           </td>
           <td> 
             
          <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
           
           </td>
           <td> 
              
              <input type="checkbox" name="checkbox[]" class="custom-control-input" id="defaultUnchecked" />
              
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Sex"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">Male</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Female</Dropdown.Item>
      </DropdownButton>
               </td>
               <td>
               <DropdownButton
      alignTop
      title="Duration"
      id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="option-1">1 month</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">3 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">6 months</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">1 year</Dropdown.Item>
      </DropdownButton>
               </td>
  </tr> 
      </tbody>
      
    </Table>
    
        <br/>
      <br/>
      
      <input type="submit"
            value="Submit" className="btn btn-primary" onSubmit={this.state}/>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>);
}

}
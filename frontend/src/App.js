import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import "./App.css"





const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api')
    // console.log(res)
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <>
   <div className="container" >
      
      <form ><h2 style={{textAlign:'center', marginTop:'40px', fontFamily:'helvetica'}}>MAXVIEW GYM MEMBERSHIP APPLICATION AND RENEWAL FORM</h2>
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
          <input type="text" name='name[]'  placeholder='Enter Full Name' class="form-control"/>
          </td>
          <td>
          <input type="number" name='age[]' placeholder='Enter age' class="form-control"/>
          </td>
          <td>
          <input type="number" name='mobile[]' placeholder='Enter Mobile' class="form-control"/>
          </td>
          <td> 
          
      <input type="email" name="email[]" placeholder='Enter email' class="form-control"/>
      
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
        <tr id='addr1'>
          <td>2</td>
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
      </form>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
     <div>
    
  </div></>
  );
}

export default App

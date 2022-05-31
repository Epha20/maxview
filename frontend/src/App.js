import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ImageUploader from 'react-images-uploading';
import Table from 'react-bootstrap/Table'
import "./App.css"



const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/application')
    // console.log(res)
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <>
    <div className="container" >
      
        <form><h2 style={{textAlign:'center', marginTop:'40px', fontFamily:'helvetica'}}>MAXVIEW GYM MEMBERSHIP APPLICATION AND RENEWAL FORM</h2>
        <br/>
         <br/>
         <br/>
         <Table stripped borderless hover size="sm"  id="tab_logic">
				<thead>
					<tr>
						<th className="text-center">"#"</th>
						<th className="text-center">Name</th>
						<th className="text-center">Age</th>
						<th className="text-center">Mobile</th>
            <th className="text-center">Email</th>
            <th className="text-center" >GYM</th>
            <th className="text-center">Aerobics</th>
            <th className="text-center">Sauna</th>
					</tr>
				</thead>
				<tbody>
					<tr id='addr0'>
						<td>1</td>
						<td>
						<input type="text" name='name'  placeholder='Enter Full Name' className="form-control"/>
						</td>
						<td>
						<input type="number" name='age' placeholder='Enter age' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile' placeholder='Enter Mobile' className="form-control"/>
						</td>
            <td> 
            
        <input type="email" name="email" placeholder='Enter email' className="form-control"/>
        
         </td>
         <td> 
           
        <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
         
         </td>
         <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>

					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr1'>
						<td>2</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr2'></tr>
				</tbody>
        <tbody>
					<tr id='addr2'>
						<td>3</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr3'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>4</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>5</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>6</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>7</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>8</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>9</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
        <tbody>
					<tr id='addr0'>
						<td>10</td>
						<td>
						<input type="text" name='name[]'  placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="email" name='mail[]' placeholder='' className="form-control"/>
						</td>
						<td>
						<input type="number" name='mobile[]' placeholder='' className="form-control"/>
						</td>
            <td> 
            
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
            
             </td>
             <td> 
               
            <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
             
             </td>
             <td> 
                
                <input type="checkbox" name="checkbox[]" className="custom-control-input" id="defaultUnchecked" />
                
                 </td>
					</tr>
                    <tr id='addr1'></tr>
				</tbody>
			</Table>
         <div>
          <label>Gender: </label> 
          <br/>
         <br/>
          <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" unchecked></input>
 
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input></div> 
  
         <br/>
         <br/>
         <br/>
         <label>Duration: </label> 
          <br/>
         <br/>
          <label className="form-check-label" for="flexRadioDefault3">
    1 Month
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" unchecked></input>
 
  <label className="form-check-label" for="flexRadioDefault4">
    3 Months
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" ></input>
  <label className="form-check-label" for="flexRadioDefault5">
    6 Months
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" ></input>
  <label className="form-check-label" for="flexRadioDefault6">
    1 Year
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" ></input>
  <br/>
         <br/>
         <br/>
          <input type="submit"
            value="Submit" className="btn btn-primary" />
        </form>
       
      </div>
       <div>
      {users.map(u => <h4 key={u._id}>userName: {u.email}</h4>)}
    </div></>
  );
}

export default App

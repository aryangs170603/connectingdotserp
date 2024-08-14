
import {useState,useEffect} from 'react'

import {Data} from './Data';

function Database() {

  // form states
  const [name, setName]=useState('');
  const [age, setAge]=useState('');
  const [designation, setDesignation]=useState('');
  const [salary, setSalary]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      name,age,designation,salary
    }
    axios.post('https://sheet.best/api/sheets/17e90451-eb4a-4143-b58b-fb494e2f44ee', data).then(response => {
      // You might want to do something with the response here
      console.log(response.data); // Log the response data to the console

      setName('');
      setAge('');
      setDesignation('');
      setSalary('');
    });
  }

  // getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/17e90451-eb4a-4143-b58b-fb494e2f44ee').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      <br></br>
      <h1>Save Form Data in Google Sheets using React</h1>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' className='form-control' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Age</label>
        <input type='text' className='form-control' required
          placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)}
          value={age}
        />
        <br></br>
        <label>Designation</label>
        <input type='text' className='form-control' required
          placeholder='Enter your designation'
          onChange={(e)=>setDesignation(e.target.value)}
          value={designation}
        />
        <br></br>
        <label>Salary</label>
        <input type='text' className='form-control' required
          placeholder='Enter your salary'
          onChange={(e)=>setSalary(e.target.value)}
          value={salary}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <div className='view-data'>
        {data.length<1&&<>No data to show</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Designation</th>
                  <th scope='col'>Salary</th>
                </tr>
              </thead>
              <tbody>
                <Data data={data}/>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Database;

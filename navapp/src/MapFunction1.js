import React,{useState} from 'react'

const MapFunction1 = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ]);
      const [search,setSearch]=useState("");


      const handleInputChange=(e)=>{
        setSearch(e.target.value)

      };
      const filterData= data.filter((searchvalue)=>{
        const itemsearch=search.toLowerCase();
        
        return(
          searchvalue.name.toLowerCase().includes(itemsearch)|| 
          searchvalue.id.toString().includes(itemsearch)||
          searchvalue.age.toString().includes(itemsearch)
        )
      });
    
      const rows = filterData.map((item) => (
        <tr key={item.name}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ));
    
  return (
    
    <div>
      <input type='text'value={search} onChange={handleInputChange}/>
        <h1>2</h1>
      <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

export default MapFunction1
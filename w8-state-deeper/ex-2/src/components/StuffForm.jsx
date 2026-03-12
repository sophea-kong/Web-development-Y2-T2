import { useState } from 'react';



export default function StuffForm({ onaddStuff }) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    onaddStuff({name,price});
  }


  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e) => (setName(e.target.value))}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={price} onChange={(e) => (setPrice(e.target.value))}/>

      <button type='submit'>Add Stuff</button>
    </form>
  );
}

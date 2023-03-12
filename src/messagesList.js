import { useEffect, useState } from "react";

export default function Messages() {
    const [messages,setmessages] = useState([])
    useEffect(()=>{
        fetch(
            `https://blue-jittery-salamander.cyclic.app/getMessages`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              
            }
          )
          .then((response)=>{
            return response.json();
          })
          .then((data)=>{
            console.log(data);
            setmessages(data.data);
          })
          .catch((error)=>{
            console.log(error);
          })
    },[])
  return (
    <div className="table t-a-center">
    <h2>Contacts List</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">message</th>
          <th scope="col">Time</th>


        </tr>
      </thead>
      <tbody>
        {messages.map((message) => {
          return (
            <tr
            >
              <td>{message.name}</td>
              <td>{message.from}</td>
              <td>{message.to}</td>
              <td>{message.message}</td>
              <td>{message.time}</td>

              
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

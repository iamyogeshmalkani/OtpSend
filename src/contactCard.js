import { useState } from "react";
import { useParams } from "react-router-dom";
import contacts from "./contacts.json";
export default function ContactCard(props) {
  const { id } = useParams();
  const [sendmessage, setsendmessage] = useState(false);
  const [otpMessage, setotpMessage] = useState("");
  const [apicalled, setapicalled] = useState(false);
  function otpGenrate() {
    var temp = !sendmessage;
    setsendmessage(temp);
    var otp = Math.floor(100000 + Math.random() * 900000);
    setotpMessage("Hii, Your Otp is " + otp);
  }
  function sendOtp() {
    if (otpMessage == "") {
      alert("Otp message can't be empty !");
      return;
    }
    setapicalled(true);
    fetch(
      `http://localhost:5000/sendsms/${contacts[id - 1].contact}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contacts[id - 1].firstname + " " + contacts[id - 1].lastname ,
          message: otpMessage
        })
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          alert("Message Sent Successfully");
          setapicalled(false);
        } else {
          if(data.error.code == 21608){
            alert("The Receing number is not authorised");
          }
          else{
            alert("Error While Sending The message");

          }
          setapicalled(false);
        }
      })
      .catch((err) => {
        alert("Error While Sending The message");
        setapicalled(false);
      });
  }
  if (apicalled) {
    return (
      <div className="loader">
        <div
          class="spinner-grow text-primary t-a-center m-5"
          role="status"
        ></div>
        <h2>Sending Your Message..</h2>
      </div>
    );
  } else {
    return (
      <div class="contactInfo mt-4">
        <div class="card">
          <div class="card-body t-a-center">
            <h5 class="card-title color-b">
              {contacts[id - 1].firstname + "  " + contacts[id - 1].lastname}
            </h5>
            <p class="card-text color-b">{contacts[id - 1].contact}</p>
            <button
              href="#"
              class="btn btn-primary w-100"
              onClick={() => {
                otpGenrate();
              }}
            >
              {sendmessage ? "Cancel" : "Send Message"}
            </button>
          </div>
        </div>
        <div
          class="input-group mb-3 mt-2"
          style={{ visibility: sendmessage ? "visible" : "hidden" }}
        >
          <input
            type="text"
            class="form-control color-b"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={otpMessage}
            onChange={(e) => {
              setotpMessage(e.target.value);
            }}
          />
          <span
            class="input-group-text color-b send-message"
            id="basic-addon2"
            onClick={() => sendOtp()}
          >
            Send
          </span>
        </div>
      </div>
    );
  }
}

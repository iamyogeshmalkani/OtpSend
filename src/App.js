import "./styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homapage from "./homepage";
import Contacts from "./contacts";
import ContactCard from "./contactCard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homapage />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/contacts/:id" element={<ContactCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

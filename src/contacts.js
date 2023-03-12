import contacts from "./contacts.json";
export default function Contacts() {
  return (
    <div className="table t-a-center">
      <h2>Contacts List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr
                class="clickable"
                onClick={() => {
                  window.location = `/contacts/${contact.id}`;
                }}
              >
                <th scope="row">{contact.id}</th>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

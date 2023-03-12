export default function Homapage() {
  return (
    <div class="t-a-center mt-4">
      <h1>Homapage</h1>
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="/contacts">
              Contacts List
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/messages">
              Messages Sent
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

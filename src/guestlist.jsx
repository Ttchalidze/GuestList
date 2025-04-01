import useQuery from "./Query";
export default function GuestList({ setGuestID }) {
  const { data: guests, error } = useQuery("/guests");
  if (error) return <p>sorry{error}</p>;
  if (!guests) return <p>Loading...</p>;
  return (
    <>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestID(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

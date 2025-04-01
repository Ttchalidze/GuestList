import useQuery from "./Query";
export default function GuestDetails({ guestID, setGuestId }) {
  const { data: guest, error } = useQuery(`/guests/${guestID}`);
  if (error) return <p>sorry{error}</p>;
  if (!guest) return <p>Loading...</p>;
  return (
    <article className="guest-details">
      <h1>{guestID.name}</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}

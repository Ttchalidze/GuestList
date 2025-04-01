import { useState } from "react";
import GuestDetails from "./guestdetails";
import GuestList from "./guestlist";

export default function App() {
  const [guestID, setGuestID] = useState(null);
  return (
    <main>
      {guestID ? (
        <GuestDetails guestID={guestID} setGuestID={setGuestID} />
      ) : (
        <GuestList setGuestID={setGuestID} />
      )}
    </main>
  );
}

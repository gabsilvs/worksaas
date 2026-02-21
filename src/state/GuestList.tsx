import React from 'react';

const GuestList: React.FC = () => {
    const [GuestsArray, setGuestsArray] = React.useState<string[]>([]);
    const [guestInput, setGuestInput] = React.useState<string>('');
    const [searchInput, setSearchInput] = React.useState<string>('');

    const addGuest = (name: string) => {
        // Logic to add guest to the list
        if (name.trim()) {
            console.log(`Adding guest: ${name}`);
            setGuestsArray([...GuestsArray, name]);
            setGuestInput('');
        }
    }
    return (
        <>
            <h3>Guest List</h3>
            <input 
                type="text" 
                placeholder="Search guests"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}>

                </input>
            <input 
                type="text" 
                placeholder="Enter guest name" 
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
            />
            <button onClick={() => addGuest(guestInput)}>Add Guest</button>
            <ul>
                {GuestsArray.filter(guest => guest.toLowerCase().includes(searchInput.toLowerCase())).map((guest, index) => (
                    <li key={index}>{guest}</li>
                ))}
            </ul>
        </>
    );
}

export default GuestList;
import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch events from backend
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events");
        const data = await response.json();

        // Normalizuj vrstu događaja na mala slova
        const dataLowerCase = data.map(event => ({
          ...event,
          type: event.type.toLowerCase(),
        }));

        setEvents(dataLowerCase);
        setFilteredEvents(dataLowerCase);
      } catch (error) {
        console.error("Greška pri dohvaćanju događaja:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (typeFilter) {
      filtered = filtered.filter(
        (event) => event.type === typeFilter.toLowerCase()
      );
    }

    if (dateFilter) {
      filtered = filtered.filter((event) => event.date === dateFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [typeFilter, dateFilter, searchQuery, events]);

  return (
    <div className="events-container">
      <h2 className="section-title">Događaji</h2>

      <div className="filters">
        <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
          <option value="">-- Vrsta događaja --</option>
          <option value="konferencija">Konferencija</option>
          <option value="koncert">Koncert</option>
          <option value="meetup">Meetup</option>
          <option value="festival">Festival</option>
          <option value="radionica">Radionica</option>
        </select>

        <input
          type="date"
          onChange={(e) => setDateFilter(e.target.value)}
          value={dateFilter}
        />

        <input
          type="text"
          placeholder="Pretraga po naslovu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="card">
              {event.image && (
                <img src={event.image} alt={event.title} />
              )}
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Vrsta:</strong> {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</p>
              <p><strong>Datum:</strong> {event.date}</p>
            </div>
          ))
        ) : (
          <p>Nema događaja koji odgovaraju filterima.</p>
        )}
      </div>
    </div>
  );
};

export default Events;

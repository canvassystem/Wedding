(() => {
  const $ = id => document.getElementById(id);
  $("brideName").textContent = WEDDING.bride;
  $("groomName").textContent = WEDDING.groom;
  $("heroDate").textContent = WEDDING.shortDate;
  $("heroPlace").textContent = WEDDING.address;
  $("eventDate").textContent = WEDDING.dateDisplay;
  $("eventTime").textContent = WEDDING.time;
  $("venueName").textContent = WEDDING.venue;
  $("venueAddress").textContent = WEDDING.address;
  $("mapLink").href = WEDDING.mapUrl;
  $("signOff").textContent = WEDDING.signOff;

  // Personalise the invitation URL, e.g. ?name=Rahul
  const guest = new URLSearchParams(location.search).get("name");
  if (guest) $("guestGreeting").textContent = `A special invitation for ${guest}`;

  const msg = encodeURIComponent(`Hello ${WEDDING.bride} & ${WEDDING.groom}, I would like to confirm my attendance at your wedding.`);
  $("rsvpLink").href = `https://wa.me/${WEDDING.whatsappNumber}?text=${msg}`;

  const target = new Date(WEDDING.dateTime).getTime();
  function updateCountdown() {
    let diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hours = Math.floor(diff / 3600000); diff %= 3600000;
    const minutes = Math.floor(diff / 60000); diff %= 60000;
    const seconds = Math.floor(diff / 1000);
    $("days").textContent = String(days).padStart(2,"0");
    $("hours").textContent = String(hours).padStart(2,"0");
    $("minutes").textContent = String(minutes).padStart(2,"0");
    $("seconds").textContent = String(seconds).padStart(2,"0");
  }
  updateCountdown(); setInterval(updateCountdown, 1000);
})();

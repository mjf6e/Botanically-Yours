// Edit this block to update the site. Leave a value empty to hide it.
const CLUB = {
  nextMeetup: {
    title: "",        // e.g. "Cutting swap and yard walk"
    date: "",         // e.g. "2026-12-13" (YYYY-MM-DD)
    time: "",         // e.g. "10:00 AM to 12:00 PM"
    area: "",         // general area only, e.g. "Old Northeast". No street addresses.
    details: ""       // e.g. "Bring a cutting in a jar of water. Address goes out when you RSVP."
  },
  instagram: "",      // full URL, e.g. "https://instagram.com/yourhandle"
  groupChat: "",      // full URL to a group chat invite, e.g. a GroupMe or Discord link
  email: ""           // e.g. "jacob@example.com"
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderMeetup() {
  const box = document.getElementById("meetup");
  const m = CLUB.nextMeetup;

  if (!m.date) {
    box.appendChild(el("p", "when", "The first meetup is being planned."));
    box.appendChild(el("p", "", "Join the club below and you will hear the date, the area, and what to bring as soon as it is set."));
    return;
  }

  const d = new Date(m.date + "T00:00:00");
  const pretty = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  box.appendChild(el("p", "when", pretty));
  if (m.title) box.appendChild(el("p", "", m.title));
  if (m.time) box.appendChild(el("p", "", m.time));
  if (m.area) box.appendChild(el("p", "", m.area + ", St. Petersburg"));
  if (m.details) box.appendChild(el("p", "", m.details));
}

function renderJoin() {
  const box = document.getElementById("join-links");
  const links = [];
  if (CLUB.groupChat) links.push(["Join the group chat", CLUB.groupChat]);
  if (CLUB.instagram) links.push(["Follow on Instagram", CLUB.instagram]);
  if (CLUB.email) links.push(["Email us", "mailto:" + CLUB.email]);

  if (!links.length) {
    box.appendChild(el("p", "", "Sign-up opens soon. Check back in a few days."));
    return;
  }
  links.forEach(function (pair) {
    const a = el("a", "btn", pair[0]);
    a.href = pair[1];
    if (pair[1].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    box.appendChild(a);
  });
}

renderMeetup();
renderJoin();
document.getElementById("year").textContent = new Date().getFullYear();

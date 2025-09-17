// // Function: Switch between sections
// function showSection(event, sectionId) {
//   const sections = document.querySelectorAll('.section');
//   const navItems = document.querySelectorAll('.nav-item');

//   // Hide all sections
//   sections.forEach(sec => sec.classList.remove('active'));
//   // Remove active from all nav items
//   navItems.forEach(item => item.classList.remove('active'));

//   // Show selected section
//   document.getElementById(sectionId).classList.add('active');
//   event.target.classList.add('active');
// }

// // Function: Update stats dynamically
// document.addEventListener("DOMContentLoaded", () => {
//   const totalSpots = 50;
//   const occupied = Math.floor(Math.random() * totalSpots);
//   const available = totalSpots - occupied;

//   document.getElementById("availableSpots").innerText = available;
//   document.getElementById("occupancyRate").innerText = occupied;
//   document.getElementById("totalSpots").innerText = totalSpots;
// });


// function togglePaymentFields() {
//   document.getElementById("upiFields").style.display = "none";
//   document.getElementById("cardFields").style.display = "none";
//   document.getElementById("walletFields").style.display = "none";

//   let method = document.getElementById("paymentMethod").value;
//   if (method === "upi") {
//     document.getElementById("upiFields").style.display = "block";
//   } else if (method === "card") {
//     document.getElementById("cardFields").style.display = "block";
//   } else if (method === "wallet") {
//     document.getElementById("walletFields").style.display = "block";
//   }
// }

// // Dummy data for availability
// const parkingData = {
//   delhi: [
//     { id: "D1", status: "Available" },
//     { id: "D2", status: "Occupied" },
//     { id: "D3", status: "Available" }
//   ],
//   mumbai: [
//     { id: "M1", status: "Available" },
//     { id: "M2", status: "Occupied" },
//     { id: "M3", status: "Occupied" }
//   ],
//   bangalore: [
//     { id: "B1", status: "Available" },
//     { id: "B2", status: "Available" },
//     { id: "B3", status: "Occupied" }
//   ]
// };

// // Function to render spots based on city
// function renderSpots() {
//   const city = document.getElementById("citySelect").value;
//   const tableBody = document.getElementById("spotsTable");
//   tableBody.innerHTML = "";

//   parkingData[city].forEach(spot => {
//     const row = document.createElement("tr");

//     // Spot ID
//     const idCell = document.createElement("td");
//     idCell.textContent = spot.id;
//     row.appendChild(idCell);

//     // Status
//     const statusCell = document.createElement("td");
//     if (spot.status === "Available") {
//       statusCell.innerHTML = "✅ " + spot.status;
//       statusCell.style.color = "green";
//     } else {
//       statusCell.innerHTML = "❌ " + spot.status;
//       statusCell.style.color = "red";
//     }
//     row.appendChild(statusCell);

//     tableBody.appendChild(row);
//   });
// }

// // Initialize on load
// document.addEventListener("DOMContentLoaded", renderSpots);

// // ---------------- Parking Data ----------------
// const parkingData = {
//   delhi: { total: 25, occupied: [1, 5, 7, 12, 18] },
//   mumbai: { total: 25, occupied: [2, 4, 10, 14, 20] },
//   bangalore: { total: 25, occupied: [3, 6, 9, 15, 22] }
// };

// // ---------------- Show Section (Navigation) ----------------
// function showSection(event, sectionId) {
//   document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
//   document.getElementById(sectionId).classList.add('active');

//   document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
//   if (event) event.target.classList.add('active');
// }

// // ---------------- Availability Section ----------------
// function renderSpots() {
//   const city = document.getElementById("citySelect").value;
//   const tableBody = document.getElementById("spotsTable");

//   tableBody.innerHTML = "";

//   const total = parkingData[city].total;
//   const occupied = parkingData[city].occupied;

//   for (let i = 1; i <= total; i++) {
//     const row = document.createElement("tr");

//     const idCell = document.createElement("td");
//     idCell.innerText = `D${i}`;

//     const statusCell = document.createElement("td");
//     if (occupied.includes(i)) {
//       statusCell.innerText = "Occupied";
//       statusCell.style.color = "red";
//     } else {
//       statusCell.innerText = "Available";
//       statusCell.style.color = "green";
//     }

//     row.appendChild(idCell);
//     row.appendChild(statusCell);
//     tableBody.appendChild(row);
//   }
// }

// // ---------------- Booking Section ----------------
// function renderBookingSlots() {
//   const city = document.getElementById("bookingCity").value;
//   const grid = document.getElementById("bookingGrid");
//   const counter = document.getElementById("slotCounter");

//   grid.innerHTML = "";

//   const total = parkingData[city].total;
//   const occupied = parkingData[city].occupied;
//   const available = total - occupied.length;

//   counter.innerText = `Total: ${total} | Available: ${available} | Occupied: ${occupied.length}`;

//   for (let i = 1; i <= total; i++) {
//     const slot = document.createElement("div");
//     slot.classList.add("slot-box");
//     slot.innerText = `D${i}`;

//     if (occupied.includes(i)) {
//       slot.classList.add("slot-occupied");
//     } else {
//       slot.classList.add("slot-available");
//       slot.addEventListener("click", () => {
//         parkingData[city].occupied.push(i);
//         renderBookingSlots();
//         renderSpots(); // Availability section bhi update hoga
//       });
//     }

//     grid.appendChild(slot);
//   }
// }

// // ---------------- Default on Page Load ----------------
// window.onload = () => {
//   renderSpots();
//   renderBookingSlots();
// };
// // ---------------- Show Section (Navigation) ----------------
// function showSection(event, sectionId) {
//   // Sare sections hide karo
//   document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  
//   // Jo section chahiye usko dikhado
//   document.getElementById(sectionId).classList.add('active');

//   // Navigation menu ka active class set karo
//   document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
//   if (event) event.target.classList.add('active');
// }

// ---------------- Parking Data ----------------
const parkingData = {
  delhi: { total: 25, occupied: [1, 5, 7, 12, 18] },
  mumbai: { total: 25, occupied: [2, 4, 10, 14, 20] },
  bangalore: { total: 25, occupied: [3, 6, 9, 15, 22] }
};

// ---------------- Show Section (Navigation) ----------------
function showSection(event, sectionId) {
  // Sare sections hide karo
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

  // Jo section chahiye usko dikhado
  document.getElementById(sectionId).classList.add('active');

  // Navigation menu ka active class set karo
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

// ---------------- Availability Section ----------------
function renderSpots() {
  const city = document.getElementById("citySelect").value;
  const tableBody = document.getElementById("spotsTable");

  tableBody.innerHTML = "";

  const total = parkingData[city].total;
  const occupied = parkingData[city].occupied;

  for (let i = 1; i <= total; i++) {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.innerText = `D${i}`;

    const statusCell = document.createElement("td");
    if (occupied.includes(i)) {
      statusCell.innerText = "Occupied";
      statusCell.style.color = "red";
    } else {
      statusCell.innerText = "Available";
      statusCell.style.color = "green";
    }

    row.appendChild(idCell);
    row.appendChild(statusCell);
    tableBody.appendChild(row);
  }
}

// ---------------- Booking Section ----------------
function renderBookingSlots() {
  const city = document.getElementById("bookingCity").value;
  const grid = document.getElementById("bookingGrid");
  const counter = document.getElementById("slotCounter");

  grid.innerHTML = "";

  const total = parkingData[city].total;
  const occupied = parkingData[city].occupied;
  const available = total - occupied.length;

  counter.innerText = `Total: ${total} | Available: ${available} | Occupied: ${occupied.length}`;

  for (let i = 1; i <= total; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot-box");
    slot.innerText = `D${i}`;

    if (occupied.includes(i)) {
      slot.classList.add("slot-occupied");
    } else {
      slot.classList.add("slot-available");
      slot.addEventListener("click", () => {
        if (confirm(`Do you want to book Slot D${i}?`)) {
          parkingData[city].occupied.push(i);
          renderBookingSlots();
          renderSpots(); // Availability section bhi update hoga
        }
      });
    }

    grid.appendChild(slot);
  }
}

// ---------------- Default on Page Load ----------------
window.onload = () => {
  renderSpots();
  renderBookingSlots();
};

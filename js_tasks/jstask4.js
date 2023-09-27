function getCurrentDateFormatted() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
}

function getdate() {
  const formattedDate = getCurrentDateFormatted();
  document.querySelector("#datediv").innerHTML = formattedDate;
}

function getCurrentDateTimeFormatted() {
  const currentDatet = new Date();

  // Get day, month, year, and time components
  const dayOfWeekt = currentDatet.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const montht = currentDatet.toLocaleDateString("en-US", { month: "short" });
  const dayt = currentDatet.getDate();
  const yeart = currentDatet.getFullYear();
  const timet = currentDatet.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
  });

  return `${dayOfWeekt} ${montht} ${dayt} ${yeart} ${timet}`;
}

function gettime() {
  const formattedDateTime = getCurrentDateTimeFormatted();
  console.log(formattedDateTime);
  document.querySelector("#timediv").innerHTML = formattedDateTime;
}

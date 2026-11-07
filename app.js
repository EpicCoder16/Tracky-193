const sampleApplications = [
  {
    company: "Northwind Analytics",
    role: "Data Analyst Intern",
    link: "",
    status: "Applied",
    dateAdded: "2026-10-28"
  },
  {
    company: "Bluefin Robotics",
    role: "Software Engineering Intern",
    link: "",
    status: "Interview",
    dateAdded: "2026-11-02"
  }
];

const applicationsBody = document.getElementById("applications-body");

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function createApplicationRow(application) {
  const row = document.createElement("tr");

  const companyCell = document.createElement("td");
  companyCell.textContent = application.company;

  const roleCell = document.createElement("td");
  roleCell.textContent = application.role;

  const linkCell = document.createElement("td");
  const applicationLink = document.createElement("a");
  applicationLink.href = application.link;
  applicationLink.textContent = "View posting";
  applicationLink.target = "_blank";
  applicationLink.rel = "noopener noreferrer";
  linkCell.appendChild(applicationLink);

  const statusCell = document.createElement("td");
  const statusBadge = document.createElement("span");
  statusBadge.className = "status status-" + application.status.toLowerCase();
  statusBadge.textContent = application.status;
  statusCell.appendChild(statusBadge);

  const dateCell = document.createElement("td");
  dateCell.textContent = formatDate(application.dateAdded);

  row.appendChild(companyCell);
  row.appendChild(roleCell);
  row.appendChild(linkCell);
  row.appendChild(statusCell);
  row.appendChild(dateCell);

  return row;
}

function createEmptyMessageRow() {
  const row = document.createElement("tr");
  const messageCell = document.createElement("td");
  messageCell.colSpan = 5;
  messageCell.className = "empty-message";
  messageCell.textContent = "No applications yet. Your applications will show up here.";
  row.appendChild(messageCell);
  return row;
}

function renderApplications(applications) {
  applicationsBody.replaceChildren();

  if (applications.length === 0) {
    applicationsBody.appendChild(createEmptyMessageRow());
    return;
  }

  applications.forEach(function (application) {
    applicationsBody.appendChild(createApplicationRow(application));
  });
}

renderApplications(sampleApplications);

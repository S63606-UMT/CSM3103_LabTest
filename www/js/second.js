$(document).ready(function() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var employeeNumber = urlParams.get("id");

  $.ajax({
    url: "https://kerbau.odaje.biz/getstaffbyid.php?id=" + employeeNumber,
    dataType: "json",
    success: function(data) {
      var employeeDetails = $("#employeeDetails");
      if (data[0] === "{\"status\":0}") {
        employeeDetails.text("No data found for the employee number: " + employeeNumber);
      } else {
        var employeeData = JSON.parse(data[1]); // {employeeNumber, firstName, lastName, officeCode, extension, email, jobTitle and reportsTo}.
        var firstName = employeeData.firstName;
        var lastName = employeeData.lastName;
        var officeCode = employeeData.officeCode;
        var extension = employeeData.extension;
        var email = employeeData.email;
        var jobTitle = employeeData.jobTitle;
        var reportsTo = employeeData.reportsTo;

        employeeDetails.append("<p><strong>First Name:</strong> " + firstName + "</p>");
        employeeDetails.append("<p><strong>Last Name:</strong> " + lastName + "</p>");
        employeeDetails.append("<p><strong>Office Code:</strong> " + officeCode + "</p>");
        employeeDetails.append("<p><strong>Extension:</strong> " + extension + "</p>");
        employeeDetails.append("<p><strong>Email:</strong> " + email + "</p>");
        employeeDetails.append("<p><strong>Job Title:</strong> " + jobTitle + "</p>");
        employeeDetails.append("<p><strong>Reports To:</strong> " + (reportsTo ? reportsTo : "N/A") + "</p>");
      }
    },
    error: function() {
      alert("Error occurred while fetching employee details.");
    }
  });
});

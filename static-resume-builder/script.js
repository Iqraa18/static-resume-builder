document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var summaryInput = document.getElementById("summary");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var previewName = document.getElementById("previewName");
    var previewEmail = document.getElementById("previewEmail");
    var previewPhone = document.getElementById("previewPhone");
    var previewSummary = document.getElementById("previewSummary");
    var previewSkills = document.getElementById("previewSkills");
    var previewExperience = document.getElementById("previewExperience");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Update the resume preview
        previewName.textContent = nameInput.value;
        previewEmail.textContent = "Email: ".concat(emailInput.value);
        previewPhone.textContent = "Phone: ".concat(phoneInput.value);
        previewSummary.textContent = summaryInput.value;
        var skillsArray = skillsInput.value.split(",");
        previewSkills.innerHTML = "";
        skillsArray.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            previewSkills.appendChild(li);
        });
        previewExperience.textContent = experienceInput.value;
    });
    var downloadButton = document.getElementById("downloadResume");
    downloadButton.addEventListener("click", function () {
        alert("PDF download functionality to be implemented.");
    });
});

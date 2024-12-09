document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  
    const previewName = document.getElementById("previewName") as HTMLElement;
    const previewEmail = document.getElementById("previewEmail") as HTMLElement;
    const previewPhone = document.getElementById("previewPhone") as HTMLElement;
    const previewSummary = document.getElementById("previewSummary") as HTMLElement;
    const previewSkills = document.getElementById("previewSkills") as HTMLElement;
    const previewExperience = document.getElementById("previewExperience") as HTMLElement;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Update the resume preview
      previewName.textContent = nameInput.value;
      previewEmail.textContent = `Email: ${emailInput.value}`;
      previewPhone.textContent = `Phone: ${phoneInput.value}`;
      previewSummary.textContent = summaryInput.value;
  
      const skillsArray = skillsInput.value.split(",");
      previewSkills.innerHTML = "";
      skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        previewSkills.appendChild(li);
      });
  
      previewExperience.textContent = experienceInput.value;
    });
  
    const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
    downloadButton.addEventListener("click", () => {
      alert("PDF download functionality to be implemented.");
    });
  });
  
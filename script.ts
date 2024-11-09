document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    // type assertions
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const graduationYearElement = document.getElementById(
      "graduationYear"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experiencein"
    ) as HTMLInputElement;
    const companyElement = document.getElementById(
      "company"
    ) as HTMLInputElement;
    const yearsOfExperienceElement = document.getElementById(
      "yearsOfExperience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    const descriptionElement = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;



    // Check if all form elements are present
    if (
        profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        graduationYearElement &&
        experienceElement &&
        companyElement &&
        yearsOfExperienceElement &&
        skillsElement &&
        descriptionElement &&
        usernameElement
      ) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const graduationYear = graduationYearElement.value;
        const experience = experienceElement.value;
        const company = companyElement.value;
        const yearsOfExperience = yearsOfExperienceElement.value;
        const skills = skillsElement.value;
        const description = descriptionElement.value;
        const username = usernameElement.value;





        // picture elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



        // Create the resume output
        const resumeHTML = `
    <h2>Resume</h2>
    ${
      profilePictureURL
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
        : ""
    }
    <p><strong>Full Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>
    <p><strong>Address:</strong> ${address} </p>

    
    <h3>Education</h3>
    <p><strong>Education:</strong> ${education} </p>
    <p><strong>Graduation Year:</strong> ${graduationYear} </p>

    <h3>Experience</h3>
    <p><strong>Experience In:</strong> ${experience} </p>
    <p><strong>Company:</strong> ${company} </p>
    <p><strong>Years of Experience:</strong> ${yearsOfExperience} </p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Description</h3>
    <p>${description} </p>
    `;



        //************************************************************************* */

        // Display the resume output
        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");

            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Add Download PDF button
            const downloadButton = document.createElement("button")
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener('click', () => {
                window.print();   // Open the print dialog, allowing the user to save as PDF.
            });
            buttonsContainer.appendChild(downloadButton);


            // Add shareable link button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;

                    // use clipboard API to copy the shareable link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                } catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to clipboard, Please try again.");
                }
            });
            buttonsContainer.appendChild(shareLinkButton);
        } else {
            console.error("Resume output container not found");
        }
    } else {
        console.error("Form Elements are missing");
    }
});
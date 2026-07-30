document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("consultationForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector(".submit-button");
        const originalHTML = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        const formData = new FormData(form);

        try {
            const response = await fetch("send-mail.php", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message);
                form.reset();
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }

        submitButton.disabled = false;
        submitButton.innerHTML = originalHTML;
    });
});
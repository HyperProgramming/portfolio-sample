function handleBtn() {
    window.location.href = "https://instagram.com";
}

async function downloadCV() {
    const response = await fetch("resume.pdf");
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "MyCV.pdf";
    link.click();
    URL.revokeObjectURL(link.href);
}
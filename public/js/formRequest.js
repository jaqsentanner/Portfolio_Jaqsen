

$('#buttonSubmit').click(async function(event) {
    event.preventDefault()
    const formName = $('#formName').val();
    const formEmail = $('#formEmail').val();
    const formNumber = $('#formNumber').val();
    const formMessage = $('#formMessage').val();

    const response = await fetch('/api/formRoutes', {
        method: "POST",
        body: JSON.stringify({
            formName,
            formEmail,
            formNumber,
            formMessage,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to submit form');
    }
});
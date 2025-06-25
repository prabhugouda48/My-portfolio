var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Fullstack Developer","Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});
    function submitForm() {
        const form = document.getElementById('myForm');
        let body = 'Name: ' + form.name.value + '\n';
        body += 'Message: ' + form.message.value;
        body += 'subject: ' + form.Subject.value;
        body += 'email: ' + form.Email.value;
        body += 'number: ' + form.MobileNumber.value;

        const mailtoLink = `mailto:prabhugouda48@gmail.com?subject=Form Submission&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

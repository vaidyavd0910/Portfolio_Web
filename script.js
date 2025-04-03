function myMenuFunction() {

    var menuBth = document.getElementById("myNavMenu");
    
    if (menusth.className = "nav-menu") {
    
    menuBth.classtiame += "responsive";
    
    } else {
    
    menuBth.className= "nav-menu";
    
    }
    
    }
    
    /* Dark mode...*/
    
    const body =  document.querySelector("body"),
    
    toggleswitch = document.getElementById("toggle-switch");
    toggleswitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");
    });

    var typingEffect = new Typed(".typedText",{strings:["Designer", "Coder", "Developer"],
        loop:true,
        typedSpeed:100,
        backSpeed:80,
        backDelay:2000
    });

    /*--------scroll---*/
    const sr = ScrollReveal({
        origin: "top",
        distance:"80px",
        duration: 2000,
        reset:true,
    });
    sr.reveal(".featured-name", {delay: 100});
    sr.reveal(".text-info", {delay: 200});
    sr.reveal(".text-btn", {delay: 200});
    sr.reveal(".social_icons", {delay: 200});
    sr.reveal(".featured-image", {delay: 320});
    sr.reveal(".project-box", {interval: 200});
    sr.reveal(".top-header",{});

    const srLeft = ScrollReveal({
        original: "left",
        distance: "80px",
        duration: 2000,
        reset:true,
    })

    srLeft.reveal(".about-info", {delay:100});
    srLeft.reveal(".contact-info", {delay: 100});

    const srRight = ScrollReveal({
        original: "left",
        distance: "80px",
        duration: 2000,
        reset:true,
    })

    srRight.reveal(".skill", {delay:100});
    srRight.reveal(".skill-box", {delay: 100});

    const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

document.getElementById('download-btn').addEventListener('click', function() {
    // Specify the file URL (ensure the path is correct)
    const fileURL = './Vaishnavi_Vaidya_SDE.pdf'; // Replace with the actual file URL

    // Create an invisible link element
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'Resume.pdf'; // This will name the file when downloading

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link after the download is triggered
    document.body.removeChild(link);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form-button button").addEventListener("click", async function (event) {
        event.preventDefault();

        const name = document.querySelector(".input-field:nth-child(1)").value;
        const email = document.querySelector(".input-field:nth-child(2)").value;
        const subject = document.querySelector(".input-subject").value;
        const message = document.querySelector("textarea").value;

        if (!name || !email || !subject || !message) {
            toastr.error("All fields are required");
            return;
        }

        const formData = { name, email, subject, message };

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                toastr.success("Message sent successfully!");
                // Reset form fields
                document.querySelector(".input-field:nth-child(1)").value = "";
                document.querySelector(".input-field:nth-child(2)").value = "";
                document.querySelector(".input-subject").value = "";
                document.querySelector("textarea").value = "";
            } else {
                toastr.error(data.error || "Something went wrong. Try again!");
            }
        } catch (error) {
            toastr.error("Server error. Please try again later.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active-link");
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);

    // Handle click events for smooth scrolling and active class update
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});

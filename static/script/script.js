// FontAwesome
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = "https://kit.fontawesome.com/0b3f1a6994.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

// Bootstrap
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
bootstrapScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
bootstrapScript.crossOrigin = "anonymous";
document.head.appendChild(bootstrapScript);



document.addEventListener("DOMContentLoaded", function() {
    
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        var scrollingText = document.getElementById('scrolling-text');
        
        if (window.scrollY > 100) { // You can adjust the scroll position value as needed
            navbar.classList.add('scrolled');
            //scrollingText.style.display = 'block';
        } else {
            navbar.classList.remove('scrolled');
            //scrollingText.style.display = 'none';
        }
    });

    function callbackFunc(entries, observer)
    {
    entries.forEach(entry => {
        var txt_id = "#" + entry.target.id;
   
        var txt_state = entry.isIntersecting;
        console.log(txt_state);
        if(txt_state) {
            document.querySelectorAll(txt_id).forEach(element => {
                
                const textWidth = element.scrollWidth;
                const textLength = element.innerText.trim().length;
                
                element.style.setProperty('--width', `${textLength+2}ch`);
                element.style.setProperty('--steps', textLength);
            });
         } 
         // NOTE: PROPERLY IMPLEMENT A TYPEWRITER EFFECT USING JS
        //  else {
        //     restartAnimation(document.getElementById(entry.target.id));
        // }
    });
    }

    let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    observer.observe(document.getElementById('type'));
    observer.observe(document.getElementById('type2'));
    observer.observe(document.getElementById('type3'));    
});

// NOTE: PROPERLY IMPLEMENT A TYPEWRITER EFFECT USING JS
// function restartAnimation(element) {
//     // Remove the class that triggers the animation
//     element.classList.remove('.default');

//     void element.offsetWidth;
//     // Reapply the class to restart the animation
//     element.classList.add('.default');
// }

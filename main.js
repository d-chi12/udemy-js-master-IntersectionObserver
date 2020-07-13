const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('invew');
            entry.target.classList.add('inview')
            // observe.unobserve(entry.target);            
        } else {
            console.log('out view');
        }
    });
    // alert('intersecting');
}

const options ={
    root: null,
    rootMargin: "300px 0px",
    threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(cb);
io.observe(child);
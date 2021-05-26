const sections = [
    document.querySelector(".home"),
    document.querySelector(".book"),
    document.querySelector(".contact")
];

const line = document.querySelector(".line");
const home_button = document.querySelector(".home_button");
const book_button = document.querySelector(".book_button");
const contact_button = document.querySelector(".contact_button");


//navbar

let options = {
    threshold: 0.7
}

let navCheck = (entries, observer) => {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            top: coords.top,
            left: coords.left,
            width: coords.width,
            height: coords.height
        };
        if(entry.isIntersecting){
            line.style.setProperty("left", `${directions.left}px`);
            line.style.setProperty("top", `${directions.top}px`);
            line.style.setProperty("width", `${directions.width}px`);
            line.style.setProperty("height", `${1}px`);
        }
    });
}

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {
    observer.observe(section);
})

//books

const books = document.querySelectorAll(".books");
const bookbox = document.querySelectorAll(".bookbox");
const bookbox1 = document.querySelector(".bookbox-1");
const bookbox2 = document.querySelector(".bookbox-2");
const bookbox3 = document.querySelector(".bookbox-3");
const off = document.querySelectorAll(".off");
const bookframe = document.querySelector(".book_frame");


let show = () => {
    books[0].addEventListener("click", () => {
        bookbox1.style.setProperty("opacity", "1");
        books.forEach(book => {
            book.style.setProperty("opacity", "0");
            book.style.setProperty("transform", "scale(0)");
        })
    })
    books[1].addEventListener("click", () => {
        bookbox2.style.setProperty("opacity", "1");
        books.forEach(book => {
            book.style.setProperty("opacity", "0");
            book.style.setProperty("transform", "scale(0)");
        })
    })
    books[2].addEventListener("click", () => {
        bookbox3.style.setProperty("opacity", "1");
        books.forEach(book => {
            book.style.setProperty("opacity", "0");
            book.style.setProperty("transform", "scale(0)");
        })
    })

    off.forEach(turn => {
        turn.addEventListener("click", () => {
            books.forEach(book => {
                book.style.setProperty("opacity", "1");
                book.style.setProperty("transform", "scale(1)");
                bookbox.forEach(box => {
                    box.style.setProperty("opacity", "0");
                })
                
                
            })
        })
    })
    
    
}

// let show = () => {
//     books.forEach(book => {
//         book.addEventListener("click", () => {
//             books.forEach(book => {
//                 book.style.setProperty("opacity", "0");
//                 book.style.setProperty("transform", "scale(0)");
//                 bookbox.forEach(box => {
//                     box.style.setProperty("opacity", "1");
//                 })
                

//             })
//             off.addEventListener("click", () => {
//                 books.forEach(book => {
//                     book.style.setProperty("opacity", "1");
//                     book.style.setProperty("transform", "scale(1)");
//                     bookbox.forEach(box => {
//                         box.style.setProperty("opacity", "0");
//                     })
                    
                    
//                 })
//             })
            
//         })
//     })
// }

show();
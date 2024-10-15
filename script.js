let currentPage = 0;

function nextPage() {
    const book = document.querySelector('.book');
    currentPage += 180;
    book.style.transform = `rotateY(${currentPage}deg)`; 

function previousPage() {
    const book = document.querySelector('.book');
    currentPage -= 180;
    book.style.transform = `rotateY(${currentPage}deg)`; 
}

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const moreInfo = this.previousElementSibling;
        
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';  
            this.textContent = 'Read Less';   
        } else {
            moreInfo.style.display = 'none'; 
            this.textContent = 'Read More';   
        }
    });
});
}
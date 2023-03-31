// javascript code goes here
var like = document.getElementById('increment');
var dislike = document.getElementById('decrement');
var sp = document.getElementById('counter');
var count = 0;
like.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    sp.innerHTML = count;
});

dislike.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    if (count < 0) {
        count = 0;
    }
    sp.innerHTML = count;
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzKyNpBAk4Z0UvLugmZfgUuZq4QcUz-nqn7Ct9dVEHcWDlHGlZbuvXGnk4krCJffmNgWw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

//   -----------------slider---------------

 const images = [
   'images/pic-1.jpg',
   'images/pic-2.jpg',
   'images/pic-3.jpg',
   'images/pic-4.jpg',
   'images/pic-5.jpg',
   'images/pic-6.jpg'
 ];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img')
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 3000)
 
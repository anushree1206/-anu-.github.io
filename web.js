let videobtn=document.querySelectorAll('.vidbtn');
videobtn.forEach(btn =>{
    btn.addEventListener('click',() =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
         document.querySelector('#video-slider').src=src;
     });
});

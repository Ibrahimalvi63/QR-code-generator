const qrInput = document.querySelector('#qr-input');
const qrImg = document.querySelector('#qr-img');
const qrBtn = document.querySelector('#qr-btn');




qrBtn.addEventListener('click', ()=>{
  
  
  if (qrInput.value.length > 0) {
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
  qrImg.classList.add('show-img');
    
  } else {
    qrInput.classList.add('eror');
    setTimeout(()=>{
      qrInput.classList.remove('eror');
    },1000);
  }
  
})
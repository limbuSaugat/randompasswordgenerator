const mypara = document.getElementById('mypara');
const mybutt = document.getElementById('mybutt');
mybutt.addEventListener('click', generatePassword);

const copybtn = document.getElementById('copybtn');
copybtn.addEventListener('click', letsCopy);

const includelowercase = document.getElementById('Lcase');
const includeuppercase = document.getElementById('Ucase');
const includeNumber = document.getElementById('num');
const includeSymbols = document.getElementById('mysym');
function generatePassword(){

    const length = Number(document.getElementById('length').value);

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '@$#*&%';

    let allowedChars = '';
    let  password = '';

    allowedChars += includelowercase.checked ? lowercaseChars : '';
    allowedChars += includeuppercase.checked ? uppercaseChars : '';
    allowedChars += includeNumber.checked ? numberChars : '';
    allowedChars += includeSymbols.checked ? symbolChars : '';

    if(length <= 0){ // if u dont put any length then
        mypara.textContent = 'password must of length of atleast 1';
        mypara.style.display = 'inline-block';
        return;

    }

    if(allowedChars.length ===0){ // if u dont select any checkboxes then
        mypara.textContent ='at least 1 character must be selected';
        mypara.style.display = 'inline-block';
        return;
    }

    for(let i=0;i<length;i++){
      const setindex = Math.floor(Math.random()*allowedChars.length);
      password +=allowedChars[setindex];
      
    }
    mypara.style.display = 'inline-block'; // doesnt show the blur box and finally displays the password
    mypara.textContent = password;
}

function letsCopy(){
    const password = mypara.textContent;

    if(!password || password.includes('must')) return;
    //this basically means if the password is empty or
    // if it contains the term 'must' then exit the function.
    navigator.clipboard.writeText(password); //copies the password in clipboard
    copybtn.textContent= 'copied!';
    setTimeout(()=> copybtn.textContent ='copy',1500)//after 1.5sec change it back to copy

}
//this is how it works: you click copy btn. it checks it there is real password
// if its empty or includes 'must' then exit the function, it there is real pw then
// copy the password in clipboard and change the btn text to copied!. And finally 
// after 1500 or 1.5 sec later change the btn text back to 'copy' using settimeout. 
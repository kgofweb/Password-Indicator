// DOM elements
const indicator = document.querySelector('.indicator');
const input = document.querySelector('input');
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const text = document.querySelector('.text');
const showBtn = document.querySelector('.showBtn');

// Init regex pass
let regexWeak = /[a-z]/;
let regexMedium = /\d+[1-9]/;
let regexStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

// Event listener
input.addEventListener('keyup', trigger);

function trigger() {
   // Input value
   let inputVal = input.value;

   // Show indicator
   if(inputVal != '') {
      indicator.style.display = 'block';
      indicator.style.display = 'flex';

      // Pass length
      if(inputVal.length <= 4 && 
         ( 
            inputVal.match(regexWeak) ||
            inputVal.match(regexMedium) ||
            inputVal.match(regexStrong)
         )
      ) no = 1;

      if(inputVal.length >= 5 && 
         (
            (inputVal.match(regexWeak) && inputVal.match(regexMedium)) ||
            (inputVal.match(regexMedium) && inputVal.match(regexStrong)) ||
            (inputVal.match(regexWeak) && inputVal.match(regexStrong))
         )
      ) no = 2;

      if(inputVal.length >= 5 && 
         input.value.match(regexWeak) &&
         input.value.match(regexMedium) &&
         input.value.match(regexStrong)
      ) no = 3;

      // Pass weak
      if(no == 1) {
         weak.classList.add('active');
         text.style.display = 'block';
         text.textContent = 'Your password is too weak';
         text.classList.add('weak');
      }

      // Pass medium
      if(no == 2) {
         medium.classList.add('active');
         text.textContent = 'Your password is medium';
         text.classList.add('medium');
      } else {
         medium.classList.remove('active');
         text.classList.remove('medium');
      }

      // Pass strong
      if(no == 3) {
         weak.classList.add('active');
         medium.classList.add('active');
         strong.classList.add('active');
         text.textContent = 'Your password is strong';
         text.classList.add('strong');
      } else {
         strong.classList.remove('active');
         text.classList.remove('strong');
      }

      // Show btn
      showBtn.style.display = 'block';

      showBtn.addEventListener('click', () => {
         if(input.type == 'password') {
            input.type = 'text';
            showBtn.textContent = 'Show';
            showBtn.style.color = "#23ad5c";
         } else {
            input.type = 'password';
            showBtn.textContent = 'Hide';
            showBtn.style.color = '#222';
         }
      });
   } else {
      indicator.style.display = 'none';
      showBtn.style.display = 'none';
      text.style.display = 'none';
   }
}
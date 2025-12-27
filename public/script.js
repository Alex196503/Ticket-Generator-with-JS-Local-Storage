document.addEventListener(('DOMContentLoaded'),()=>{
    let form = document.querySelector('form');
    let fullNameContainer = document.querySelector('#full-name');
    let userNameContainer = document.querySelector('#username');
    let usernameInput = document.querySelector('#githubUsername');
    let emailContainer = document.querySelector('#emailContainer');
    let fileContainer = document.querySelector('#file');
    let fullNameRegex =/^[a-zA-Z]+/;
    let nameInput = document.querySelector('#fullName');
    let emailInput = document.querySelector('#Email');
    let userNameRegex=/^@[a-zA-Z]+$/;
    let inputFile = document.querySelector('#uploading-avatar');
    let btnRemoval = document.querySelector('.container-btn>button:first-child');
    let btnChange = document.querySelector('.container-btn>button:last-child');
    let heading = document.querySelector('.container-fluid .text-primary');
    let container = document.querySelector('.container-btn'); 
    let containerImg = document.querySelector('.wrapper-image>img');
    inputFile.addEventListener(('change'),(e)=>{
        let isFileValid = updateFiles(fileContainer);
        if(e.target.files.length === 0) return;
        if(!isFileValid) return;
        let targetFile = e.target.files[0];     
        containerImg.src = URL.createObjectURL(targetFile);
        inputFile.disabled = true;   
        inputFile.classList.add('pointerEvents')
        heading.classList.add('hidden');      
        container.classList.remove('hidden');
    })
    btnRemoval.addEventListener(('click'), ()=>{
       inputFile.disabled = false;
       inputFile.value = '';
       containerImg.src = 'images/icon-upload.svg';
       inputFile.classList.remove('pointerEvents');
       heading.classList.remove('hidden');
       container.classList.add('hidden');
    })
    btnChange.addEventListener(('click'),()=>{
        inputFile.disabled = false;
        inputFile.classList.remove('pointerEvents');
        inputFile.click();
    })
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    form.addEventListener(('submit'),(e)=>{
        e.preventDefault();
        let isNameValid = updateForm(fullNameContainer);
        let isUserNameValid = updateFormular(userNameContainer)
        let isEmailValid = updateFormEmail(emailContainer);
        let areFilesValid = updateFiles(fileContainer);
        if(isNameValid && isUserNameValid && isEmailValid && areFilesValid)
        {
            let file = inputFile.files[0].name;
            sessionStorage.setItem('FileImage', file);
         window.location.replace(`http://localhost:3000/mobileticket.html?name=${encodeURIComponent(nameInput.value)}&email=${encodeURIComponent(emailInput.value)}&username=${encodeURIComponent(usernameInput.value)}`);         
        }
    })
    function updateForm (box) 
    {
        let input = box.querySelector('input');
        let svg = box.querySelector('svg');
        let paragrafError = box.querySelector('.text-heading');        
        let isValid = true;
        let section = box.querySelector('.section');
        if(input.value.trim()==='')
        {
            input.classList.add('Error');
            svg.classList.add('classError');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Please enter a fullName';
            isValid = false;
        }
        else if(fullNameRegex.test(input.value) === false)
        {
            svg.classList.add('classError');
            input.classList.add('Error');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Your name must contain letters';
            isValid = false;
        }
        else{
            svg.classList.remove('classError');
            paragrafError.classList.remove('classError');
            input.classList.remove('Error');
            section.classList.add('hidden');
            paragrafError.innerHTML = '';
        }       
        return isValid; 
    }
    function updateFormular(box)
    {
         {
        let input = box.querySelector('input');
        let svg = box.querySelector('svg');
        let paragrafError = box.querySelector('.text-heading');        
        let isValid = true;
        let section = box.querySelector('.section');
        if(input.value.trim()==='')
        {
            input.classList.add('Error');
            svg.classList.add('classError');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Please enter an username!';
            isValid = false;
        }
        else if(userNameRegex.test(input.value) === false)
        {
            svg.classList.add('classError');
            input.classList.add('Error');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Your username must contain @(first!) and letters';
            isValid = false;
        }
        else{
            svg.classList.remove('classError');
            paragrafError.classList.remove('classError');
            input.classList.remove('Error');
            section.classList.add('hidden');
            paragrafError.innerHTML = '';
        }       
        return isValid; 
    }
    }
     function updateFormEmail(box)
    {
         
        let input = box.querySelector('input');
        let svg = box.querySelector('svg');
        let paragrafError = box.querySelector('.text-heading');        
        let isValid = true;
        let section = box.querySelector('.section');

        if(input.value.trim()==='')
        {
            input.classList.add('Error');
            svg.classList.add('classError');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Please enter an email!';
            isValid = false;
        }
        else if(emailRegex.test(input.value) === false)
        {
            svg.classList.add('classError');
            input.classList.add('Error');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Your email is invalid!';
            isValid = false;
        }
        else{
            svg.classList.remove('classError');
            paragrafError.classList.remove('classError');
            input.classList.remove('Error');
            section.classList.add('hidden');
            paragrafError.innerHTML = '';
        }       
        return isValid; 
        
    }
    function updateFiles(box)
    {
         let input = box.querySelector('input');
        let svg = document.querySelector('#fileSVG');
        let paragrafError = document.querySelector('#fileError');        
        let isValid = true;
        let section = document.querySelector('#fileArea');   
        let files = input.files;
        let requiredSize = 500 *1024;   
        let allowedTypes = ['image/jpeg', 'image/png'];
        if(files.length === 0 )
        {
             input.classList.add('Error');
            svg.classList.add('classError');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Please upload a file!';
            isValid = false;
        }
        else if(files[0].size >= requiredSize)
        {
             svg.classList.add('classError');
            input.classList.add('Error');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'File too large! Please upload a photo under 500KB!';
            isValid = false;
        }
        else if(!allowedTypes.includes(files[0].type))
        {
            svg.classList.add('classError');
            input.classList.add('Error');
            paragrafError.classList.add('classError');
            section.classList.remove('hidden');
            paragrafError.innerHTML = 'Only JPG or PNG allowed!';
            isValid = false;
        }
        else{
             svg.classList.remove('classError');
            paragrafError.classList.remove('classError');
            input.classList.remove('Error');
            paragrafError.innerHTML = 'Upload your photo (JPG or PNG, max size: 500KB).';
        }
        return isValid;
        
    }
})
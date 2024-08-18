document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('contactform');
    form.addEventListener('submit',function(event){
        Event.preventDefault();
        const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const message=document.getElementById('message').value;
        if(name&&email&&message){
            alert('Thank you for your message, '+name+'!we will get back to you');
            form.reset();
    
        }
        else{
            alert('please fill out all fields.');
        }
    });
});
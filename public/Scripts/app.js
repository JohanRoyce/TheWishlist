/* client side */
(function(){
    function start()
    {
        console.log("App is started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure you want to do this?"))
                {
                    event.preventDefault();
                    window.location.assign('/gift-list');
                }
            });
        }
    }
    window.addEventListener("load", start);

})();
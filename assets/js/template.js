/* CSS for these functions are saved in template.css */

// execution
document.addEventListener('DOMContentLoaded', function() {   
    setLogo(templateData.logo)
    setButtonURL(templateData.buttonPulse)
    setHeader(templateData.header)
    // setBackground(templateData.header) 
    function setLogo(data) {
        document.querySelector('.logo').src = IMG_PATH+data
    }
    function setButtonURL(data) {
        document.querySelectorAll('.comn-btn.pulse').forEach(el => {
            el.href = data.url
            el.innerHTML = data.text
        })
    }
    function setHeader(data) {

        //local functions
        function setBottleSlide(data) {
            let dSlider = document.querySelector('.bnr-slider')
            data.forEach((lstData, idx) => {
                let dParent = document.createElement("div");
                dParent.className = 'sld-bx sld-'+(idx+1);
                dParent.style.background = lstData.background
                dParent.innerHTML = '<img src="' +(IMG_PATH+lstData.image)+ '" alt="" width="560" height="636" class="sld-img" />'
                dSlider.appendChild(dParent);
            })
        }        
        setBottleSlide(data.headerSlides)
        
        //CONTINUE HERE
        function setBackground(data) {
            document.querySelector('.banner').style.background = data.background;
            
        }
        setBackground(data); 

        function setTitle(data) {
            document.querySelector('.bnr-hding hide-mob sect-header-t').innerHTML = data;
        }
        setTitle(data.Title.mob); 



    }
    

    
    
})
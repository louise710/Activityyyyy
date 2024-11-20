document.addEventListener('DOMContentLoaded', function() {   
    setLogo(templateData.logo);
    setButtonURL(templateData.buttonPulse);
    setHeader(templateData.header);
    
    function setLogo(data) {
        document.querySelector('.logo').src = IMG_PATH + data;
    }

    function setButtonURL(data) {
        document.querySelectorAll('.comn-btn.pulse').forEach(el => {
            el.href = data.url;
            el.innerHTML = data.text;
        });
    }

    function setHeader(data) {
        
        function setBottleSlide(data) {
            let dSlider = document.querySelector('.bnr-slider');
            data.forEach((lstData, idx) => {
                let dParent = document.createElement("div");
                dParent.className = 'sld-bx sld-' + (idx + 1);
                dParent.style.background = lstData.background;
                dParent.innerHTML = '<img src="' + (IMG_PATH + lstData.image) + '" alt="" width="560" height="636" class="sld-img" />';
                dSlider.appendChild(dParent);
            });
        }        
        setBottleSlide(data.headerSlides);

        function setBackground(data) {
            document.querySelector('.banner').style.background = data.background;
        }
        setBackground(data); 

        function setsubTitle(data) {
            document.querySelector('.sect-header-subt').innerHTML = data.text;
            document.querySelector('.sect-header-subt').style.color = data.textColor;
        }
        setsubTitle(data.subTitle);

        function setTitle(data) {
            document.querySelector('.bnr-hding.hide-mob.sect-header-t').innerHTML = data;
        }
        setTitle(data.title.mob);

    
        setIngredients(data.ingredients);
        setReview(data.review);
    }

    function setIngredients(data) {
        const ingredientsList = document.querySelector('.bnr-list');
        if (ingredientsList) {
            ingredientsList.innerHTML = '';  
            if (Array.isArray(data.list) && data.list.length > 0) {
                data.list.forEach(item => {
                    let ingredientItem = document.createElement("li");
                    ingredientItem.className = "ingredient-item";
                    
                    ingredientItem.innerHTML = `
                        <img src="${IMG_PATH + item.icon}" alt="" class="ingredient-icon" />
                        <div class="ingredient-text">${item.text}</div>
                    `;
                    
                    ingredientsList.appendChild(ingredientItem);
                });
                
                ingredientsList.style.color = data.textColor;
            } else {
                console.error('Ingredients list is not populated or is empty!');
            }
        } else {
            console.error('Ingredients list (ul.bnr-list) not found.');
        }
    }

    function setReview(reviewData) {
        const reviewBox = document.querySelector('.rewbx');
        if (reviewBox) {
            // Set the review image source
            const reviewImage = reviewBox.querySelector('.rewv-img');
            reviewImage.src = IMG_PATH + reviewData.image;

            // Set the review name (p.rewv-prt-p1)
            const reviewName = reviewBox.querySelector('.rewv-prt-p1');
            reviewName.innerHTML = reviewData.name;

            // Set the review text (p.rewv-prt-p2)
            const reviewText = reviewBox.querySelector('.rewv-prt-p2');
            reviewText.innerHTML = reviewData.text;

            // Optionally, set the text color if needed
            reviewBox.style.color = reviewData.textColor;
        } else {
            console.error('Review box (div.rewbx) not found.');
        }

    }
});

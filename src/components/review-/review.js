const reviewField = document.createElement('div');

reviewField.innerHTML = `
<style>
.review-field {
    width: 1110px;
    height: 630px;
    padding: 20px 30px;
    border: 0.5px solid #1B1919;
    position: relative;
}

.review-header {
    display: flex;
    justify-content: space-between;
}

.review-header>div {
    display: flex;
    flex-direction: column;
    gap: 26px;
}

.review-header>img {
    height: 100px;
}

.review-body {
    height: 110px;
    margin-top: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.review-btn {
    width: 450px;
    height: 30px;
    background: #F9F9F9;
    border: 0.5px solid #000;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
}

#comment-tab {
    width: 1050px;
    height: 300px;
    padding: 30px;
    background-color: #FCFCFC;
    border: 0.5px solid #000;
    border-radius: 5px;
    position: absolute;
    left: 30px;
    top: 120px;
    display: none;
    z-index: 1000;
    }

    .rating-stars {
    margin-bottom: 20px;
    }

    .rating-stars input[type="radio"] {
    display: none;
    }

    .rating-stars label {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: cover;
    cursor: pointer;
    }

    #comment-form {
    width: 100%;
    height: 152px;
    }

    #comment-field {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding: 20px;
    resize: none;
    background-color: #F6F6F6;
    border: 0.2px solid #000;
    padding-bottom: 120px;
    }

    #comment-field::placeholder {
        visibility: hidden;
    }


    .star-fill {
    fill: #1B1919;
    }

    .star-fill:hover {
    fill: yellow;
    }
</style>
<link rel="stylesheet" href="../../assets/reset/reset.css">
<link rel="stylesheet" href="../../assets/colors/colors.css">
<link rel="stylesheet" href="../../assets/fonts/fonts.css">
<section class="review-field">
        <div class="review-header">
            <div>
                <h2 class="color_secundary font_slide-h1">Avaliações</h2>
                <a href="#" onclick="exibirReview()" class="review-btn color_secundary font_slide-h2">Deixar sua Avaliação</a>
            </div>
            <img src="../../assets/images/assessments.svg" alt="media de avaliações">
        </div>
        <div id="comment-tab">
        <div class="rating-stars">
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1"><svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="star-fill" d="M12 1.042l3.878 7.901 8.661 1.258-6.263 6.098 1.48 8.611-7.757-4.08-7.757 4.08 1.48-8.611L.461 10.202l8.66-1.258L12 1.042z"/>
            </svg></label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2"><svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="star-fill" d="M12 1.042l3.878 7.901 8.661 1.258-6.263 6.098 1.48 8.611-7.757-4.08-7.757 4.08 1.48-8.611L.461 10.202l8.66-1.258L12 1.042z"/>
            </svg></label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3"><svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="star-fill" d="M12 1.042l3.878 7.901 8.661 1.258-6.263 6.098 1.48 8.611-7.757-4.08-7.757 4.08 1.48-8.611L.461 10.202l8.66-1.258L12 1.042z"/>
            </svg></label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4"><svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="star-fill" d="M12 1.042l3.878 7.901 8.661 1.258-6.263 6.098 1.48 8.611-7.757-4.08-7.757 4.08 1.48-8.611L.461 10.202l8.66-1.258L12 1.042z"/>
            </svg></label>
            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5"><svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="star-fill" d="M12 1.042l3.878 7.901 8.661 1.258-6.263 6.098 1.48 8.611-7.757-4.08-7.757 4.08 1.48-8.611L.461 10.202l8.66-1.258L12 1.042z"/>
            </svg></label>
        </div>
        <form id="comment-form">
            <label class="font_link-h2 color_secundary" for="comment">Comentário</label>
            <input type="text" id="comment-field" name="comment" class="color_secundary font_slide-h2" placeholder="Digite aqui" maxlength="114">
        </form>
    </div>
        <div class="review-body">
            <div>
                <img src="../../assets/icons/star--group.svg" alt="estrelas da avaliação">
                <h3 class="color_secundary font_slide-h2">Carlos Feliponi</h3>
            </div>
            <blockquote class="color_secundary font_slide-h2">
                Otimo atendimento e profissionais top demais.
              </blockquote>
        </div>
        <hr>
        <div class="review-body">
            <div>
                <img src="../../assets/icons/star--group.svg" alt="estrelas da avaliação">
                <h3 class="color_secundary font_slide-h2">Albino</h3>
            </div>
            <blockquote class="color_secundary font_slide-h2">
                Atendimento excelente.
              </blockquote>
        </div>
        <hr>
        <div class="review-body">
            <div>
                <img src="../../assets/icons/star--group.svg" alt="estrelas da avaliação">
                <h3 class="color_secundary font_slide-h2">Gustavo Ronan</h3>
            </div>
            <blockquote class="color_secundary font_slide-h2">
                Sempre muito bem atendido, melhor barbearia da região, cliente fiel a anos.
              </blockquote>
        </div>
        <hr>
    </section>
`;

const reviewComponent = document.getElementById('review-component');

reviewComponent.appendChild(reviewField);


let reviewSwitch = true; 

function exibirReview() {
    const commentTab = document.getElementById('comment-tab');
    if(reviewSwitch) {
        commentTab.style.display = 'block';
        reviewSwitch = false;
    } else {
        commentTab.style.display = 'none';
        reviewSwitch = true;
    }
}


// END

const commentForm = document.getElementById('comment-form');
   
commentForm.onsubmit = function(event){
        event.preventDefault();

        const commentField = document.querySelector('#comment-field');
        const value = commentField.value;
        
        if (value === '') return;
        
        
        let block = reviewField.querySelector('blockquote')
        block.innerHTML = value;
        
        
        console.log(value);
    }

//   reviewBtn.onclick = function(event) {
//     class comment extends HTMLElement {
//         constructor() {
//         super();
//         }
    
//         connectedCallback() {
//         const shadowRoot = this.attachShadow({ mode: 'open' });
    
//         reviewBtn.appendChild(commentTab.content);
//         }
//     }
    
//     customElements.define('review-comment', comment);


//     const commentForm = document.querySelector('.comment-form')
    
//     commentForm.onsubmit = function(event){
//         event.preventDefault();

//         const commentField = document.querySelector('#comment-field');
//         const value = commentField;
//         console.log(value);
//     }
//   }
  
import ActionScentence from "./ActionSentence";
import StuMemeImage_680 from "./img/template-680.png";
import StuMemeImage_401 from "./img/template-401.png";
import StuMemeImage_328 from "./img/template-328.png";

const HeroImage = (props) => { 

  function getQuantitySentence(gameState) {
    let result = "";
    for (let i = gameState.magnitudes.length - 1; i >= 0; i--) {
      const m = gameState.magnitudes[i];
      if (m.total > 0) {
        result += `${m.total} ${m.name}, `;
      }
    }
    if (result) {
      result = result.substring(0, result.length - 2); // remove trailing comma
    } else {
      result = "0 egg";
    }

    return result;
  }

  const quantitySentence = getQuantitySentence(props.gameState); 
  const caption_1 = `Sure you got enough eggs?`;
  let caption_2 = `Yeah I got ${quantitySentence}`;
  
  const caption_3 = `${quantitySentence}?`;
  const caption_4 = `Thats ${props.gameState.totalEggs} eggs!`;
  const caption_5 = `Oops.`;

  return (
    <section className="hero">
    

      <div className="hero-container">
        <picture className="hero-picture" >
          <source srcSet={StuMemeImage_680} media="(min-width: 401px)" />
          <source srcSet={StuMemeImage_401} media="(min-width: 328px)" />
          <img src={StuMemeImage_328} alt="Stu thats x eggs! Meme image" />
        </picture>
        <div className="captions-container meme-font">
          <div class="caption-box caption-box-1">
          <span className="caption-1">
            {caption_1} 
          </span>
          <span className="caption-2">
            {caption_2} 
          </span>
          </div> 
          <div class="caption-box caption-box-2"><span className="caption-3">{caption_3}</span></div>
          <div class="caption-box caption-box-3"><span className="caption-4">{caption_4}</span></div>
          <div class="caption-box caption-box-4"><span className="caption-5">{caption_5}</span></div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroImage;

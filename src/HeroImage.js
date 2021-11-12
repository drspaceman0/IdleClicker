import ActionScentence from "./ActionSentence";
import StuMemeImage_680 from "./img/template-680.png";
import StuMemeImage_401 from "./img/template-401.png";
import StuMemeImage_328 from "./img/template-328.png";

const HeroImage = (props) => {
  // function getQuantitySentence(gameState) {
  //   let result = "";
  //   if (gameState.totalGenerators <= 0) {
  //     // no egg generators yet. Stu just says the total amount of eggs
  //     result += String(gameState.eggs);
  //   } else {
  //     for (const i in gameState.generators) {
  //       const g = gameState.generators[i];
  //       if (g.total > 0) {
  //         result += String(g.total) + " " + g.name + ", ";
  //       }
  //     }
  //     result = result.substring(0, result.length - 2); // remove trailing comma
  //     result += " per second.";
  //   }
  //   return result;
  // }

  // this.state = {
  //   eggs: 0,
  //   click_amount: 1,
  //   generators: [{ name: "Single", total: 0, val: 1, cost: 0 }],
  //   lockedGenerators: [
  //     { name: "Baker's Dozen", total: 0, val: 13, cost: 13 },
  //     { name: "Gross", total: 0, val: 13, cost: 120 },
  //     { name: "Great Gross", total: 0, val: 1728, cost: 3240 },
  //     { name: "Myriad", total: 0, val: 10000, cost: 24000 },
  //   ],
  // };

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
  const actionSentence = props.actionSentence;
  const caption_1 = `Sure you got enough eggs?`;
  // let caption_2 = `Yeah I got ${quantitySentence}`;
  // caption_2 = "Yeah I got " + getTheSentenceWithButtons(props.gameState);
  // caption_2 = "";

  const caption_3 = `${quantitySentence}?`;
  const caption_4 = `Thats ${props.gameState.totalEggs} eggs!`;
  const caption_5 = `Oops.`;

  return (
    <section className="hero">
      <figure className="txtover meme-font">
        <picture>
          <source srcSet={StuMemeImage_680} media="(min-width: 401px)" />
          <source srcSet={StuMemeImage_401} media="(min-width: 328px)" />
          <img src={StuMemeImage_328} alt="Stu thats x eggs! Meme image" />
        </picture>
        <figcaption className="caption-1">
          {caption_1}
          <button>hi</button>
        </figcaption>
        <figcaption className="caption-2">
          {actionSentence}
          {/* <ActionScentence gameState={props.gameState} /> */}
        </figcaption>
        <figcaption className="caption-3">{caption_3}</figcaption>
        <figcaption className="caption-4">{caption_4}</figcaption>
        <figcaption className="caption-5">{caption_5}</figcaption>
      </figure>
    </section>
  );
};

export default HeroImage;

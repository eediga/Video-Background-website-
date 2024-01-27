const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

const wave = document.querySelector(".wave")
const fact = document.querySelector(".fact");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");
const wave4 = document.querySelector(".wave4");
const observeWord = document.querySelector(".observeWord")
const ballsGroup = document.querySelector(".balls-group")
const createdBalls = [];
const cards = document.querySelectorAll(".card")
const cardGroup = document.querySelector(".card-group")
const thirdPage = document.querySelector(".third-page")

cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        cardGroup.style.animation = "none"
    })

})

cards.forEach((card) => {
  card.addEventListener("mouseleave", () => {
    cardGroup.style.animation = "";
  });
});


function generateBall(num) {

    const visibleBalls = Array.from(ballsGroup.children).filter(ball => getComputedStyle(ball).opacity > 0);

  if (visibleBalls.length === 0) {
  for (i = 0; i < num; i++) {
    const randomBallSize = Math.floor(Math.random() * 71 + 10);
    const balls = document.createElement("div");
    balls.classList.add("balls");
    balls.style.width = randomBallSize + "px";
    balls.style.height = randomBallSize + "px";
    ballsGroup.appendChild(balls);
    createdBalls.push(balls);
  }
}
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting){
        fact.style.color = "#667500";
        thirdPage.style.backgroundColor = "#854822";
        wave1.style.backgroundImage = "url(assets/brown-wave.png)";
        wave2.style.backgroundImage = "url(assets/brown-wave.png)";
        wave3.style.backgroundImage = "url(assets/brown-wave.png)";
        wave4.style.backgroundImage = "url(assets/brown-wave.png)";
        createdBalls.forEach(ball => {
        const randomBallHeight = Math.floor(Math.random() * 900 + 100);
        ball.style.transform = `translateY(-${randomBallHeight}px)`
        ball.style.opacity = "0"
        ball.style.transitionDelay = `${Math.floor(Math.random() * 3 + 1.5)}s`
        fact.style.transition = "";
        wave1.style.transition = "";
        wave2.style.transition = "";
        wave3.style.transition = "";
        wave4.style.transition = "";
        thirdPage.style.transition = ""
       
})
    }else{
        generateBall(35)
        fact.style.transition = "0.9s"
         wave1.style.transition = "0.6s";
         wave2.style.transition = "0.6s";
         wave3.style.transition = "0.6s";
         wave4.style.transition = "0.6s";
         thirdPage.style.transition = "0.6s"
        fact.style.color = "";
        wave1.style.backgroundImage = "";
        wave2.style.backgroundImage = "";
        wave3.style.backgroundImage = "";
        wave4.style.backgroundImage = "";
        thirdPage.style.backgroundColor = ""
    }
});
});

observer.observe(observeWord)

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});



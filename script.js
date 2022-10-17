const typeMsg = document.querySelector("#val");
var likes = document.querySelector(".likes");
const like = document.querySelector(".tmb-up");
const unlike = document.querySelector(".tmb-dwn");
const sendMsg = document
  .querySelector("#sendBtn")
  .addEventListener("click", () => {
    let allMsgCont = document.querySelector("#section");
    let msg = typeMsg.value;
    if (msg === "") {
      return;
    }
    msg.toLowerCase();
    let msgRoom = `<div class="user-demo-answer">
        <div class="user-conv-container">
          <div class="user-pic">
            <i class="fa fa-user-circle"></i>
          </div>
          <div class="userMsg">
            ${msg}
          </div>
        </div>
        <small id="time">✓✓</small>
      </div>`;
    allMsgCont.innerHTML += msgRoom;
    let msgArr = msg.split(" ");
    typeMsg.value = "";
    if (msgArr && msgArr.includes("data") && msgArr.includes("bundle")) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            Dear customer,
            you can do this by simply dialing *131# then you check on the type of data bundle.
          </span>
        </span>
        <small id="time">✓✓</small>
      </div>`;
      }, 1500);
    } else if (
      msgArr &&
      msgArr.includes("airtime") &&
      msgArr.includes("balance")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            ${`Dear customer,
            you can check your airtime balance by dialing *556# then it will come to display.`}
          </span>
        </span>
        <small id="time">✓✓</small>
      </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("SME")) ||
      (msgArr.includes("sme") && msgArr.includes("data"))
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            ${`Dear customer,
            to buy SME data bundle, simply dial *461#. <p>To check SME data balance, dial *461*4#`}
          </span>
        </span>
        <small id="time">✓✓</small>
      </div>`;
      }, 1500);
    } else if (
      msgArr &&
      msgArr.includes("pulse") &&
      msgArr.includes("points")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            ${`Dear customer,
            Pulse is a tarrif plan and the pulse point is the additional value you get upon recharging your line or updating your data bundle. You can also use it to get your data bundle which means you can convert it into data and if your pulse point is not up to the data plan you can add it up with your airtime. Kindly dail *131*1#, select the type of data plan and afterward it will bring some option then click on pulse point if you will be using your point and if your point did not add up click on pulse point and airtime.`}
          </span>
        </span>
        <small id="time">✓✓</small>
      </div>`;
      }, 1500);
    } else if (
      msgArr &&
      msgArr.includes("data") &&
      msgArr.includes("balance")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            ${`Dear customer,
            simply dail *131*4#`}
          </span>
        </span>
        <small id="time">✓✓</small>
      </div>`;
      }, 1500);
    } else if (msgArr && msgArr.includes("corporate" && "gifting")) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
            <span class="bot-conv-container">
              <div class="bot-pic">
                <i class="fa fa-robot"></i>
              </div>
              <span class="botMsg message">
                ${`Dear customer, your corporate gifting data balance can be checked by dailing *460*260#.`}
              </span>
            </span>
            <small id="time">✓✓</small>
          </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("2G" && "4G")) ||
      msgArr.includes("2g" && "4g")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
            <span class="bot-conv-container">
              <div class="bot-pic">
                <i class="fa fa-robot"></i>
              </div>
              <span class="botMsg message">
                ${`Dear customer,
                you can get it done with fhr following steps; <br/>

                Backup your contacts<br/>

                Visit any MTN service center nearest to you. <br/>

                Go along with your ID card<br/>

                Request for a sim upgrade<br/>

                Fill out the form given to you.<br/>

                Submit your old SIM<br/>

                You will be given a new one<br/>

                Insert on your phone and enjoy!! `}
              </span>
            </span>
            <small id="time">✓✓</small>
          </div>`;
      }, 1500);
    } else if (
      msgArr &&
      msgArr.includes("customer") &&
      msgArr.includes("care")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Dear customer,
                    dail 180, <br/>

                    Wait 2 seconds after the call connect<br>

                    Press 9, wait for 2 seconds<br>

                    Press 6, wait for 2 seconds<br>

                    Press 0 to be redirected to the customer service representative.`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else if (msgArr && msgArr.includes("signal")) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Dear customer,
                    we are really sorry you're experiencing this, kindly go to the nearest MTN center to lodge complain.`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("issue")) ||
      msgArr.includes("issues") ||
      msgArr.includes("internet")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Dear customer,
                    we are really sorry you have to experience this but your sim card is not well fix in its place. Kindly check this and if it persist visit any of our center nearest to you, thank you..`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("vendor")) ||
      (msgArr.includes("vendor's") && msgArr.includes("site"))
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Dear customer, at that very moment we are making an upgrade and improvement concerning the data receiving apps so as to serve you all better.`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("created")) ||
      msgArr.includes("creator")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`The name of my creator is Adewole Ridwanullahi Adebayo (Thrive Coder) <strong>You can get in touch with him through his</strong><br> <ul id="creator"><li><a href="https://wa.me/+2347047344365">Whatsapp Number</a></li></ul>.`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else if (
      (msgArr && msgArr.includes("Hi")) ||
      msgArr.includes("Hello") ||
      msgArr.includes("hi") ||
      msgArr.includes("hello")
    ) {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Hey there, What can i do for you?`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    } else {
      setTimeout(function () {
        allMsgCont.innerHTML += `<div class="bot-first-question">
                <span class="bot-conv-container">
                  <div class="bot-pic">
                    <i class="fa fa-robot"></i>
                  </div>
                  <span class="botMsg message">
                    ${`Dear customer, I don't have answer to this. Kindly message this <a href="https://wa.me/07047344365">Whatsapp Number</a>.`}
                  </span>
                </span>
                <small id="time">✓✓</small>
              </div>`;
      }, 1500);
    }
    window.setTimeout(function () {
      var elem = document.getElementById("sec");
      elem.scrollTop = elem.scrollHeight;
    }, 1500);

    setTimeout(function () {
      likes.classList.add("likesShow");
    }, 1500);

    const popUp = document.querySelector(".popUp");
    const thanks = document.querySelector(".thanks");
    like.addEventListener("click", function () {
      like.classList.add("likesBg");
      unlike.classList.add("nodisp");
      setTimeout(function () {
        thanks.classList.add("showModal");
      }, 200);
      setTimeout(function () {
        thanks.classList.remove("showModal");
      }, 2000);
    });

    unlike.addEventListener("click", function () {
      unlike.classList.add("likesBg");
      like.classList.add("nodisp");
      setTimeout(function () {
        popUp.classList.add("showModal");
      }, 200);
      setTimeout(function () {
        popUp.classList.remove("showModal");
      }, 2000);
    });
  });

const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const mainMenu = document.querySelector(".mainMenu");

openMenu.addEventListener("click", () => {
  mainMenu.style.display = "block";
  mainMenu.style.top = "";
});

closeMenu.addEventListener("click", () => {
  mainMenu.style.top = "-150%";
});

function removeLikes() {
  // unlike.classList.remove("likesBg");
  likes.classList.remove("likesShow");
  if (document.getElementById("val").clicked === true) {
    setTimeout(function () {
      likes.classList.add("likesShow");
    }, 1500);
  }
  unlike.classList.remove("likesBg");
  unlike.classList.remove("nodisp");
  like.classList.remove("likesBg");
  like.classList.remove("nodisp");
}

var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

window.onload = function () {
  responsiveSlider();
};

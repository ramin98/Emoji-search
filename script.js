var cards;
var jsonData = [
  {
    "title": "100",
    "symbol": "💯",
    "keywords": "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  },
  {
    "title": "1234",
    "symbol": "🔢",
    "keywords": "input symbol for numbers symbol"
  },
  {
    "title": "Grinning",
    "symbol": "😀",
    "keywords": "grinning face happy smiley emotion emotion"
  },
  {
    "title": "Grimacing",
    "symbol": "😬",
    "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
  },
  {
    "title": "Grin",
    "symbol": "😁",
    "keywords": "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
  },
  {
    "title": "Joy",
    "symbol": "😂",
    "keywords": "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
  },
  {
    "title": "Smiley",
    "symbol": "😃",
    "keywords": "smiling face with open mouth happy smiley emotion emotion good good"
  },
  {
    "title": "Smile",
    "symbol": "😄",
    "keywords": "smiling face with open mouth and smiling eyes happy smiley emotion emotion"
  },
  {
    "title": "Sweat Smile",
    "symbol": "😅",
    "keywords": "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion"
  },
  {
    "title": "Laughing",
    "symbol": "😆",
    "keywords": "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion"
  },
  {
    "title": "Innocent",
    "symbol": "😇",
    "keywords": "smiling face with halo smiley emotion emotion"
  },
  {
    "title": "Wink",
    "symbol": "😉",
    "keywords": "winking face silly smiley emotion emotion"
  },
  {
    "title": "Blush",
    "symbol": "😊",
    "keywords": "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful"
  },
  {
    "title": "Slight Smile",
    "symbol": "🙂",
    "keywords": "slightly smiling face happy smiley"
  },
  {
    "title": "Upside Down",
    "symbol": "🙃",
    "keywords": "upside-down face silly smiley sarcastic sarcastic"
  },
  {
    "title": "Relaxed",
    "symbol": "☺",
    "keywords": "white smiling face happy smiley"
  },
  {
    "title": "U7121",
    "symbol": "🈚",
    "keywords": "squared cjk unified ideograph-7121 symbol"
  },
  {
    "title": "U7533",
    "symbol": "🈸",
    "keywords": "squared cjk unified ideograph-7533 symbol"
  },
  {
    "title": "U55b6",
    "symbol": "🈺",
    "keywords": "squared cjk unified ideograph-55b6 symbol"
  },
  {
    "title": "U6708",
    "symbol": "🈷",
    "keywords": "squared cjk unified ideograph-6708 symbol"
  },
  {
    "title": "Eight Pointed Black Star",
    "symbol": "✴",
    "keywords": "eight pointed black star symbol"
  },
  {
    "title": "Vs",
    "symbol": "🆚",
    "keywords": "squared vs symbol"
  },
  {
    "title": "Accept",
    "symbol": "🉑",
    "keywords": "circled ideograph accept symbol"
  },
  {
    "title": "White Flower",
    "symbol": "💮",
    "keywords": "white flower flower symbol"
  },
  {
    "title": "Ideograph Advantage",
    "symbol": "🉐",
    "keywords": "circled ideograph advantage japan symbol"
  },
  {
    "title": "Secret",
    "symbol": "㊙",
    "keywords": "circled ideograph secret japan symbol"
  },
  {
    "title": "Congratulations",
    "symbol": "㊗",
    "keywords": "circled ideograph congratulation japan symbol"
  },
  {
    "title": "U5408",
    "symbol": "🈴",
    "keywords": "squared cjk unified ideograph-5408 japan symbol"
  },
  {
    "title": "U6e80",
    "symbol": "🈵",
    "keywords": "squared cjk unified ideograph-6e80 japan symbol"
  },
  {
    "title": "U7981",
    "symbol": "🈲",
    "keywords": "squared cjk unified ideograph-7981 japan symbol"
  },
  {
    "title": "a",
    "symbol": "🅰",
    "keywords": "negative squared latin capital letter a symbol"
  },
  {
    "title": "b",
    "symbol": "🅱",
    "keywords": "negative squared latin capital letter b symbol"
  },
  {
    "title": "Ab",
    "symbol": "🆎",
    "keywords": "negative squared ab symbol"
  },
  {
    "title": "Cl",
    "symbol": "🆑",
    "keywords": "squared cl symbol"
  },
  {
    "title": "O2",
    "symbol": "🅾",
    "keywords": "negative squared latin capital letter o symbol"
  },
  {
    "title": "Sos",
    "symbol": "🆘",
    "keywords": "squared sos symbol"
  },
  {
    "title": "No Entry",
    "symbol": "⛔",
    "keywords": "no entry symbol circle circle"
  },
  {
    "title": "Name Badge",
    "symbol": "📛",
    "keywords": "name badge work"
  },
  {
    "title": "No Entry Sign",
    "symbol": "🚫",
    "keywords": "no entry sign symbol circle circle"
  },
  {
    "title": "x",
    "symbol": "❌",
    "keywords": "cross mark symbol sol sol"
  },
  {
    "title": "Raised Hands Tone1",
    "symbol": "🙌",
    "keywords": "person raising both hands in celebration tone 1"
  },
  {
    "title": "Raised Hands Tone2",
    "symbol": "🙌",
    "keywords": "person raising both hands in celebration tone 2"
  },
  {
    "title": "Raised Hands Tone3",
    "symbol": "🙌",
    "keywords": "person raising both hands in celebration tone 3"
  },
  {
    "title": "Raised Hands Tone4",
    "symbol": "🙌",
    "keywords": "person raising both hands in celebration tone 4"
  },
  {
    "title": "Raised Hands Tone5",
    "symbol": "🙌",
    "keywords": "person raising both hands in celebration tone 5"
  },
  {
    "title": "Clap Tone1",
    "symbol": "👏",
    "keywords": "clapping hands sign tone 1"
  },
  {
    "title": "Clap Tone2",
    "symbol": "👏",
    "keywords": "clapping hands sign tone 2"
  },
  {
    "title": "Clap Tone3",
    "symbol": "👏",
    "keywords": "clapping hands sign tone 3"
  },
  {
    "title": "Clap Tone4",
    "symbol": "👏",
    "keywords": "clapping hands sign tone 4"
  },
  {
    "title": "Clap Tone5",
    "symbol": "👏",
    "keywords": "clapping hands sign tone 5"
  },
  {
    "title": "Wave Tone1",
    "symbol": "👋",
    "keywords": "waving hand sign tone 1"
  },
  {
    "title": "Wave Tone2",
    "symbol": "👋",
    "keywords": "waving hand sign tone 2"
  },
  {
    "title": "Wave Tone3",
    "symbol": "👋",
    "keywords": "waving hand sign tone 3"
  },
  {
    "title": "Wave Tone4",
    "symbol": "👋",
    "keywords": "waving hand sign tone 4"
  },
  {
    "title": "Wave Tone5",
    "symbol": "👋",
    "keywords": "waving hand sign tone 5"
  },
  {
    "title": "Thumbsup Tone1",
    "symbol": "👍",
    "keywords": "thumbs up sign tone 1"
  },
  {
    "title": "Thumbsup Tone2",
    "symbol": "👍",
    "keywords": "thumbs up sign tone 2"
  },
  {
    "title": "Thumbsup Tone3",
    "symbol": "👍",
    "keywords": "thumbs up sign tone 3"
  },
  {
    "title": "Thumbsup Tone4",
    "symbol": "👍",
    "keywords": "thumbs up sign tone 4"
  },
  {
    "title": "Thumbsup Tone5",
    "symbol": "👍",
    "keywords": "thumbs up sign tone 5"
  },
  {
    "title": "Thumbsdown Tone1",
    "symbol": "👎",
    "keywords": "thumbs down sign tone 1"
  },
  {
    "title": "Thumbsdown Tone2",
    "symbol": "👎",
    "keywords": "thumbs down sign tone 2"
  },
  {
    "title": "Thumbsdown Tone3",
    "symbol": "👎",
    "keywords": "thumbs down sign tone 3"
  },
  {
    "title": "Thumbsdown Tone4",
    "symbol": "👎",
    "keywords": "thumbs down sign tone 4"
  },
  {
    "title": "Thumbsdown Tone5",
    "symbol": "👎",
    "keywords": "thumbs down sign tone 5"
  },
  {
    "title": "Punch Tone1",
    "symbol": "👊",
    "keywords": "fisted hand sign tone 1"
  },
  {
    "title": "Punch Tone2",
    "symbol": "👊",
    "keywords": "fisted hand sign tone 2"
  },
  {
    "title": "Punch Tone3",
    "symbol": "👊",
    "keywords": "fisted hand sign tone 3"
  },
  {
    "title": "Punch Tone4",
    "symbol": "👊",
    "keywords": "fisted hand sign tone 4"
  },
  {
    "title": "Punch Tone5",
    "symbol": "👊",
    "keywords": "fisted hand sign tone 5"
  },
  {
    "title": "Fist Tone1",
    "symbol": "✊",
    "keywords": "raised fist tone 1"
  },
  {
    "title": "Fist Tone2",
    "symbol": "✊",
    "keywords": "raised fist tone 2"
  },
  {
    "title": "Fist Tone3",
    "symbol": "✊",
    "keywords": "raised fist tone 3"
  },
  {
    "title": "Fist Tone4",
    "symbol": "✊",
    "keywords": "raised fist tone 4"
  },
  {
    "title": "Fist Tone5",
    "symbol": "✊",
    "keywords": "raised fist tone 5"
  },
  {
    "title": "v Tone1",
    "symbol": "✌",
    "keywords": "victory hand tone 1"
  },
  {
    "title": "v Tone2",
    "symbol": "✌",
    "keywords": "victory hand tone 2"
  },
  {
    "title": "v Tone3",
    "symbol": "✌",
    "keywords": "victory hand tone 3"
  },
  {
    "title": "v Tone4",
    "symbol": "✌",
    "keywords": "victory hand tone 4"
  },
  {
    "title": "v Tone5",
    "symbol": "✌",
    "keywords": "victory hand tone 5"
  },
  {
    "title": "Ok Hand Tone1",
    "symbol": "👌",
    "keywords": "ok hand sign tone 1"
  },
  {
    "title": "Ok Hand Tone2",
    "symbol": "👌",
    "keywords": "ok hand sign tone 2"
  },
  {
    "title": "Ok Hand Tone3",
    "symbol": "👌",
    "keywords": "ok hand sign tone 3"
  },
  {
    "title": "Ok Hand Tone4",
    "symbol": "👌",
    "keywords": "ok hand sign tone 4"
  },
  {
    "title": "Ok Hand Tone5",
    "symbol": "👌",
    "keywords": "ok hand sign tone 5"
  },
  {
    "title": "Raised Hand Tone1",
    "symbol": "✋",
    "keywords": "raised hand tone 1"
  },
  {
    "title": "Raised Hand Tone2",
    "symbol": "✋",
    "keywords": "raised hand tone 2"
  },
  {
    "title": "Raised Hand Tone3",
    "symbol": "✋",
    "keywords": "raised hand tone 3"
  },
  {
    "title": "Raised Hand Tone4",
    "symbol": "✋",
    "keywords": "raised hand tone 4"
  },
  {
    "title": "Raised Hand Tone5",
    "symbol": "✋",
    "keywords": "raised hand tone 5"
  },
  {
    "title": "Open Hands Tone1",
    "symbol": "👐",
    "keywords": "open hands sign tone 1"
  },
  {
    "title": "Open Hands Tone2",
    "symbol": "👐",
    "keywords": "open hands sign tone 2"
  },
  {
    "title": "Open Hands Tone3",
    "symbol": "👐",
    "keywords": "open hands sign tone 3"
  },
  {
    "title": "Open Hands Tone4",
    "symbol": "👐",
    "keywords": "open hands sign tone 4"
  },
  {
    "title": "Open Hands Tone5",
    "symbol": "👐",
    "keywords": "open hands sign tone 5"
  },
  {
    "title": "Muscle Tone1",
    "symbol": "💪",
    "keywords": "flexed biceps tone 1"
  },
  {
    "title": "Muscle Tone2",
    "symbol": "💪",
    "keywords": "flexed biceps tone 2"
  },
  {
    "title": "Muscle Tone3",
    "symbol": "💪",
    "keywords": "flexed biceps tone 3"
  },
  {
    "title": "Muscle Tone4",
    "symbol": "💪",
    "keywords": "flexed biceps tone 4"
  },
  {
    "title": "Muscle Tone5",
    "symbol": "💪",
    "keywords": "flexed biceps tone 5"
  },
  {
    "title": "Pray Tone1",
    "symbol": "🙏",
    "keywords": "person with folded hands tone 1"
  },
  {
    "title": "Pray Tone2",
    "symbol": "🙏",
    "keywords": "person with folded hands tone 2"
  },
  {
    "title": "Pray Tone3",
    "symbol": "🙏",
    "keywords": "person with folded hands tone 3"
  },
  {
    "title": "Pray Tone4",
    "symbol": "🙏",
    "keywords": "person with folded hands tone 4"
  },
  {
    "title": "Pray Tone5",
    "symbol": "🙏",
    "keywords": "person with folded hands tone 5"
  },
  {
    "title": "Point Up Tone1",
    "symbol": "☝",
    "keywords": "white up pointing index tone 1"
  },
  {
    "title": "Point Up Tone2",
    "symbol": "☝",
    "keywords": "white up pointing index tone 2"
  },
  {
    "title": "Point Up Tone3",
    "symbol": "☝",
    "keywords": "white up pointing index tone 3"
  },
  {
    "title": "Point Up Tone4",
    "symbol": "☝",
    "keywords": "white up pointing index tone 4"
  },
  {
    "title": "Point Up Tone5",
    "symbol": "☝",
    "keywords": "white up pointing index tone 5"
  },
  {
    "title": "Point Up 2 Tone1",
    "symbol": "👆",
    "keywords": "white up pointing backhand index tone 1"
  },
  {
    "title": "Point Up 2 Tone2",
    "symbol": "👆",
    "keywords": "white up pointing backhand index tone 2"
  },
  {
    "title": "Point Up 2 Tone3",
    "symbol": "👆",
    "keywords": "white up pointing backhand index tone 3"
  },
  {
    "title": "Point Up 2 Tone4",
    "symbol": "👆",
    "keywords": "white up pointing backhand index tone 4"
  },
  {
    "title": "Point Up 2 Tone5",
    "symbol": "👆",
    "keywords": "white up pointing backhand index tone 5"
  },
  {
    "title": "Point Down Tone1",
    "symbol": "👇",
    "keywords": "white down pointing backhand index tone 1"
  },
  {
    "title": "Point Down Tone2",
    "symbol": "👇",
    "keywords": "white down pointing backhand index tone 2"
  },
  {
    "title": "Point Down Tone3",
    "symbol": "👇",
    "keywords": "white down pointing backhand index tone 3"
  },
  {
    "title": "Point Down Tone4",
    "symbol": "👇",
    "keywords": "white down pointing backhand index tone 4"
  },
  {
    "title": "Point Down Tone5",
    "symbol": "👇",
    "keywords": "white down pointing backhand index tone 5"
  },
  {
    "title": "Point Left Tone1",
    "symbol": "👈",
    "keywords": "white left pointing backhand index tone 1"
  },
  {
    "title": "Point Left Tone2",
    "symbol": "👈",
    "keywords": "white left pointing backhand index tone 2"
  },
  {
    "title": "Point Left Tone3",
    "symbol": "👈",
    "keywords": "white left pointing backhand index tone 3"
  },
  {
    "title": "Point Left Tone4",
    "symbol": "👈",
    "keywords": "white left pointing backhand index tone 4"
  },
  {
    "title": "Point Left Tone5",
    "symbol": "👈",
    "keywords": "white left pointing backhand index tone 5"
  },
  {
    "title": "Point Right Tone1",
    "symbol": "👉",
    "keywords": "white right pointing backhand index tone 1"
  },
  {
    "title": "Point Right Tone2",
    "symbol": "👉",
    "keywords": "white right pointing backhand index tone 2"
  },
  {
    "title": "Point Right Tone3",
    "symbol": "👉",
    "keywords": "white right pointing backhand index tone 3"
  },
  {
    "title": "Point Right Tone4",
    "symbol": "👉",
    "keywords": "white right pointing backhand index tone 4"
  },
  {
    "title": "Point Right Tone5",
    "symbol": "👉",
    "keywords": "white right pointing backhand index tone 5"
  },
  {
    "title": "Middle Finger Tone1",
    "symbol": "🖕",
    "keywords": "reversed hand with middle finger extended tone 1"
  },
  {
    "title": "Middle Finger Tone2",
    "symbol": "🖕",
    "keywords": "reversed hand with middle finger extended tone 2"
  },
  {
    "title": "Middle Finger Tone3",
    "symbol": "🖕",
    "keywords": "reversed hand with middle finger extended tone 3"
  },
  {
    "title": "Middle Finger Tone4",
    "symbol": "🖕",
    "keywords": "reversed hand with middle finger extended tone 4"
  },
  {
    "title": "Middle Finger Tone5",
    "symbol": "🖕",
    "keywords": "reversed hand with middle finger extended tone 5"
  },
  {
    "title": "Hand Splayed Tone1",
    "symbol": "🖐",
    "keywords": "raised hand with fingers splayed tone 1"
  },
  {
    "title": "Hand Splayed Tone2",
    "symbol": "🖐",
    "keywords": "raised hand with fingers splayed tone 2"
  },
  {
    "title": "Hand Splayed Tone3",
    "symbol": "🖐",
    "keywords": "raised hand with fingers splayed tone 3"
  },
  {
    "title": "Hand Splayed Tone4",
    "symbol": "🖐",
    "keywords": "raised hand with fingers splayed tone 4"
  },
  {
    "title": "Hand Splayed Tone5",
    "symbol": "🖐",
    "keywords": "raised hand with fingers splayed tone 5"
  },
  {
    "title": "Metal Tone1",
    "symbol": "🤘",
    "keywords": "sign of the horns tone 1"
  },
  {
    "title": "Metal Tone2",
    "symbol": "🤘",
    "keywords": "sign of the horns tone 2"
  },
  {
    "title": "Metal Tone3",
    "symbol": "🤘",
    "keywords": "sign of the horns tone 3"
  },
  {
    "title": "Metal Tone4",
    "symbol": "🤘",
    "keywords": "sign of the horns tone 4"
  },
  {
    "title": "Metal Tone5",
    "symbol": "🤘",
    "keywords": "sign of the horns tone 5"
  },
  {
    "title": "Vulcan Tone1",
    "symbol": "🖖",
    "keywords": "raised hand with part between middle and ring fingers tone 1"
  },
  {
    "title": "Vulcan Tone2",
    "symbol": "🖖",
    "keywords": "raised hand with part between middle and ring fingers tone 2"
  },
  {
    "title": "Vulcan Tone3",
    "symbol": "🖖",
    "keywords": "raised hand with part between middle and ring fingers tone 3"
  },
  {
    "title": "Vulcan Tone4",
    "symbol": "🖖",
    "keywords": "raised hand with part between middle and ring fingers tone 4"
  },
  {
    "title": "Vulcan Tone5",
    "symbol": "🖖",
    "keywords": "raised hand with part between middle and ring fingers tone 5"
  },
  {
    "title": "Writing Hand Tone1",
    "symbol": "✍",
    "keywords": "writing hand tone 1"
  },
  {
    "title": "Writing Hand Tone2",
    "symbol": "✍",
    "keywords": "writing hand tone 2"
  },
  {
    "title": "Writing Hand Tone3",
    "symbol": "✍",
    "keywords": "writing hand tone 3"
  },
  {
    "title": "Writing Hand Tone4",
    "symbol": "✍",
    "keywords": "writing hand tone 4"
  },
  {
    "title": "Writing Hand Tone5",
    "symbol": "✍",
    "keywords": "writing hand tone 5"
  },
  {
    "title": "Nail Care Tone1",
    "symbol": "💅",
    "keywords": "nail polish tone 1"
  },
  {
    "title": "Nail Care Tone2",
    "symbol": "💅",
    "keywords": "nail polish tone 2"
  },
  {
    "title": "Nail Care Tone3",
    "symbol": "💅",
    "keywords": "nail polish tone 3"
  },
  {
    "title": "Nail Care Tone4",
    "symbol": "💅",
    "keywords": "nail polish tone 4"
  },
  {
    "title": "Nail Care Tone5",
    "symbol": "💅",
    "keywords": "nail polish tone 5"
  },
  {
    "title": "Ear Tone1",
    "symbol": "👂",
    "keywords": "ear tone 1"
  },
  {
    "title": "Ear Tone2",
    "symbol": "👂",
    "keywords": "ear tone 2"
  },
  {
    "title": "Ear Tone3",
    "symbol": "👂",
    "keywords": "ear tone 3"
  },
  {
    "title": "Ear Tone4",
    "symbol": "👂",
    "keywords": "ear tone 4"
  },
  {
    "title": "Ear Tone5",
    "symbol": "👂",
    "keywords": "ear tone 5"
  },
  {
    "title": "Nose Tone1",
    "symbol": "👃",
    "keywords": "nose tone 1"
  },
  {
    "title": "Nose Tone2",
    "symbol": "👃",
    "keywords": "nose tone 2"
  },
  {
    "title": "Nose Tone3",
    "symbol": "👃",
    "keywords": "nose tone 3"
  }
  ];
function printCard(Arr) {
  for(var i=0; i<Arr.length; i++) {
    cards.innerHTML += `<div>
      <div id="card">
        <span class="img">${Arr[i].symbol}</span>
        <h3>${Arr[i].title}</h3>
        <span>${Arr[i].keywords}</span>
      </div>
    </div>`
  }
}

function search(ev) {
  var key = ev.target.value;
  cards.innerHTML = null;
  
  printCard(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.title.match(regex) || data.keywords.match(regex) || data.symbol.match(regex);
  }));
}

window.onload = function() {
  cards = document.getElementById("card-container");
  
}


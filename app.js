const horoscope = [
    {
        name:"Libra",
        image:"img/Libra.jpg",
        info: "Your best attributes are: Balance, Justice, Truth, Beauty, Perfection"
    },
    {
        name:"Aquarius",
        image:"img/aquarius.jpg",
        info: "Your best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous"
    },
    {
        name:"Aries",
        image:"img/Aries.jpg",
        info: "You are: Adventurous, energetic, courageous, enthusiastic, confident, dynamic, and witty Unfortunately, you are also Selfish, quick-tempered, impulsive, and impatient"
    },
    {
        name:"Pisces",
        image:"img/pisces.jpg",
        info: "You are: Imaginative, sensitive, compassionate, selfless, and sympathetic. Unfortunately, you are also: Escapist, idealistic, secretive, vague, and weak-willed."
    },
    {
        name:"Taurus",
        image:"img/taurus.jpg",
        info: "You are: Patient, reliable, warmhearted, loving, persistent, and determined. Unfortunately, you are also: Jealous, possessive, resentful, inflexible, and greedy."
    },
    {
        name:"Gemini",
        image:"img/Gemini.jpg",
        info: "You are: Adaptable, versatile, communicative, witty, intellectual, eloquent, and lively. Unfortunately, you are also: Nervous, tense, superficial, inconsistent, and shrewd."
    },
    {
        name:"Cancer",
        image:"img/cancer.jpg",
        info: "You are: Loving, intuitive, imaginative, cautious, protective, and sympathetic. Unfortunately, you are also: Moody, touchy, and clingy."
    },
    {
        name:"Leo",
        image:"img/Leo.jpg",
        info: "You are: Generous, warmhearted, creative, enthusiastic, open-minded, and faithful.Unfortunately, you are also: Pompous, patronizing, bossy, and intolerant."
    },
    {
        name:"Scorpio",
        image:"img/scorpio.jpg",
        info: "You are: Determined, forceful, emotional, intuitive, passionate, exciting, and magnetic. Unfortunately, you are also: Jealous, resentful, compulsive, obsessive, and secretive."
    },
    {
        name:"Vigro",
        image:"img/Virgo.jpg",
        info: "You are: Modest, meticulous, reliable, practical, diligent, intelligent, and analytical. Unfortunately, you are also: Fussy, anxious, over-critical, and conservative."
    },
    {
        name:"Saggittarius",
        image:"img/Sagittarius.jpg",
        info: "You are: Jovial, good-humored, honest, intellectual, and philosophical. Unfortunately, you are also: Blindly optimistic, careless, irresponsible, superficial, and tactless."
    },
    {
        name:"Capricorn",
        image:"img/capricorn.jpg",
        info: "You are: Practical, prudent, ambitious, disciplined, patient, careful, humorous, and reserved. Unfortunately, you are also: Pessimistic, fatalistic, miserly, and grudging."
    },

];
// console.log(horoscope);
let inputs = document.getElementById("input");
   
let txt1 = document.getElementById("names");
let photo = document.getElementById("img");
let txt2 = document.getElementById("infos");
// console.log(photo);

function searchFun(){
    console.log(inputs.value);
  
    for(i=0; i < horoscope.length; i++){
    // console.log(horoscope[i].name);
  
        if( inputs.value == horoscope[i].name){
            txt1.innerText = horoscope[i].name;
            // photo.innerText = horoscope[i].image;
                photo.src = horoscope[i].image;
            txt2.innerText = horoscope[i].info;

            };
        };
    };



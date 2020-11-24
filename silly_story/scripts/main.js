
const customName = document.getElementById('customname');
const randomize = document.getElementById('randomize');
const story = document.querySelector('.story');

let story_str = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let x_arr =['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let y_arr =['the soup kitchen','Disneyland','the White House'];
let z_arr =['spontaneously combusted','melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click',result);


function result() {
let rn_str_x = randomValueFromArray(x_arr);
let rn_str_y = randomValueFromArray(y_arr);
let rn_str_z = randomValueFromArray(z_arr);
let mod_story = story_str;
let customName = document.getElementById('customname');

if ( document.getElementById('metric-radio').checked) {
    console.log('METRIC');
    mod_story = mod_story.replace('94 fahrenheit','30 degrees');
    mod_story = mod_story.replace('300 pounds', '150 kilograms');
}
if (customname.value != '') {
    mod_story = mod_story.replace('Bob', customname.value);
}

mod_story = mod_story.replace(/:insertx:/g,rn_str_x);
mod_story = mod_story.replace(/:inserty:/g,rn_str_y);
mod_story = mod_story.replace(/:insertz:/g,rn_str_z);
console.log(mod_story);
const story = document.querySelector('.story');
story.textContent = mod_story;
}

window.addEventListener('load',()=>{

  setTimeout(()=>{

    document.getElementById('loader').style.display='none';

  },3000)

})

const roles = [
  'AI & ML Engineer',
  'Frontend Developer',
  'MERN Stack Learner',
  'Software Developer',
  'Future Tech Builder'
]

let roleIndex = 0;

function changeRole(){

  document.getElementById('typing').innerHTML = roles[roleIndex];

  roleIndex++;

  if(roleIndex >= roles.length){
    roleIndex = 0;
  }

}

changeRole();

setInterval(changeRole,2000);


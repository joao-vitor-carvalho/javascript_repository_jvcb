
const bomDia = function (){
  console.log('Bom dia')
}


const boaTarde = function(){
  console.log('Boa tarde!')
}

function executaQualquerCoisa(fn){
  if(typeof fn == 'function')
    fn ()
}
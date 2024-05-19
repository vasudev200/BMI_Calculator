const form = document.querySelector('form')
// console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    // console.log(height);
    // conmsole.log(weight);

    if(height=== '' || height < 0 || isNaN(height)){
        result.innerHTML = `plzz enter valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        console.log("invailid input");
    }
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
})
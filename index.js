

let result=document.getElementById('inputtext');
// document.append(result)

let calculate=(number) => {
    result.value=result.value+number;
    console.log(result.value)
}

let equal=() => 
{
    try {
        result.value=eval (result.value)
    } catch (error) {
        alert('Enter the Valid nUmber - Mavanne olung number adi ')
    }
}
function Clear()
{
    result.value=" "
}
function Del()
{
    result.value=result.value.slice(0,-1)
}
let index = 0;
let colors = ['yellow', 'blue', 'red', 'green', 'purple', 'black'];


function changeColors(){

    


    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if (index > colors.length - 1)

    index = 0;
    


}
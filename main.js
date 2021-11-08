const input = document.querySelector('input')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }


    // MAX LENGHT 12  RG
    // if (inputLength == 2 || inputLength == 6) {
    //     input.value += '.'
    // }else if (inputLength == 10) {
    //     input.value += '-'
    // }

    // // MAX LENGHT 19 CARTÃO
    // if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
    //     input.value += ' '
    // }

})
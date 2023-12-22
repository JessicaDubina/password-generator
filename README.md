# password-generator
Generates a random password based on selected criteria


## Credits
Ficher-Yates shuffle algorithm was used to randomize the character placements within the new password.

    function shuffle(arr) {
        let currentIndex = arr.length,  randomIndex;
        while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    } 
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

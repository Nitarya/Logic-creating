function palindrome(name) {
    let text = "";
    for (let i = name.length - 1; i>=0; i--) {
        text = text + name[i]
    }

if (name === text) {
    return true
} else {
    return false
}

}

const result = palindrome("abab")
console.log("Result is", result)
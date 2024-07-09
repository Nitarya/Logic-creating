function upperCase(name) {
    let text = "";
    for (let i = 0; i < name.length; i++) {
        text = text + name[i].toUpperCase()
    }
    return text;
}

const output = upperCase("suman");
console.log(output)
function findSpace(name) {
    // emptyString = ''; space = ' ' ; matched not text ; name[i] coz character matching
    let text = "";
    for (let i = 0; i < name.length; i++) {
      text += name[i];
      if (name[i] === " ") {
        break;
      }
    }
    return text;
  }
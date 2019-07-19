function takeANumber(currentLine,newName){
  currentLine.push(newName);
  var position = currentLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(currentLine){
  if (currentLine === []){
    return "There is no one in line.";
  } else {
    var serving = currentLine.shift();
    return `Now serving ${serving}.`;
  }
}
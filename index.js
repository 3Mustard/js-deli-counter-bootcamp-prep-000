function takeANumber(currentLine,newName){
  currentLine.push(newName);
  var position = currentLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(currentLine){
  var empty = [];
  if (currentLine){
    return "There is nobody waiting to be served!";
  } else {
    var serving = currentLine.shift();
    return `Currently serving ${serving}.`;
  }
}
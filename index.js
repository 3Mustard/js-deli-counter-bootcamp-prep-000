function takeANumber(currentLine,newName){
  currentLine.push(newName);
  var position = currentLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var serving = currentLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(current){
  if (current.length === 0){
    return "The line is currently empty";
  } else {
    var lineObj = {};
    for (var i = 1; i <= current.length; i++){
      lineObj[i] = current[i - 1];
    }
    return `The line is currently: ${lineObj}`;
  }
}
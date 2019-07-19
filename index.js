function takeANumber(currentLine,newName){
  var line = currentLine;
  line.push(newName);
  var position = line.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}
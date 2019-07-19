function takeANumber(currentLine,newName){
  var line = [];
  line.push(currentLine);
  line.push(newName);
  var position = line[-1];
  return `Welcome, ${newName}. You are number ${position} in line.`;
}
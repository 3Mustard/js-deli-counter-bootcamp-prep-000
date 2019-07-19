function takeANumber(currentLine,newName){
  var line = [...currentLine, newName];
  var position = line.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}
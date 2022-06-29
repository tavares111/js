function combString(str) {
    const arr = str.split("");
    let result = [];
    arr.forEach((char) => {
      const currentIdx = result.length;
      result.push(char);
      result.slice(0 ,currentIdx).forEach((c) => {
        result.push(c + char);
      })
      
    });
    return result;
  }
 combString("12");
  
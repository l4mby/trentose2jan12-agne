function getArea(dim){
   if(arguments.length !== 1 || !dim || !Array.isArray(dim) 
      || dim.length !== 2 || dim.some(elem => {return elem < 0 || isNaN(elem);}))
      return -1;
   if(dim.every(elem => {return elem !== null;}))
      return dim[0] * dim[1];
   else
      return -1;
}

module.exports = getArea;
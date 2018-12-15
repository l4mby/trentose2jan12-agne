function getArea(dim){
   if(!dim || !Array.isArray(dim) || dim.length !== 2 || dim.some(elem => {return elem < 0;}))
      return -1;

   return dim[0] * dim[1];
}

module.exports = getArea;
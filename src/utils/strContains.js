const strContains = (cardTitle, searchString) => {
    console.log('>>>',cardTitle,searchString);
    return cardTitle.toLowerCase().includes(searchString.toLowerCase());
}
  
export default strContains;
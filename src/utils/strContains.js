const strContains = (cardTitle, searchString) => {
    console.log('>>>',cardTitle,searchString);
    if(searchString !== ''){
        searchString = searchString.searchString;
    }
    return cardTitle.toLowerCase().includes(searchString.toLowerCase());
}
  
export default strContains;
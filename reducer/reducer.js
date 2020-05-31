var initialState={
        array: [
          {
              name:"Dress",
              price:40000,
              image:"https://reactnative.dev/docs/assets/p_cat2.png",
              category:'B2C'
          
          },
          {
              name:"Saree",
              price:400000,
              image:"https://reactnative.dev/docs/assets/p_cat2.png",
              category:'B2C'
          
          },
          {
              name:"Sofa Set",
              price:400000,
              image:"https://reactnative.dev/docs/assets/p_cat2.png",
              category:'B2C'
          
          },
          {
              name:"Aofa Set",
              price:400000,
              image:"https://reactnative.dev/docs/assets/p_cat2.png",
              category:'B2C'
          
          }
      ],
      searchText:null,
      sortState:'asc',
      count:78
  }

const reducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type)
    {
       
      case "SEARCH_BY_NAME":return {array:action.payload}
      case "SORT_BY_PRICE":return {array:action.payload}
      case "SET_ITEM_COUNT":return {count:900}
    }
    return state;
  }
 
  export default reducer;
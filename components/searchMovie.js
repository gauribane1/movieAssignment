import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform,Image,Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';

 export default class searchMovie extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.setState({isLoading:false})
  }
  search = text => {
    this.setState({search:text})
    //console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    
    this.setState({search:text,isLoading:false})
    fetch("http://www.omdbapi.com/?s="+text+"&apikey=de104c48")
      .then(response => response.json())
     
      .then(responseJson => {
        
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.Search,
            
          },
          function() {
            this.arrayholder = responseJson.Search;
          }
        );
      })
      .catch(error => {
        Alert.alert("","Record not found.")
        //console.error(error);
      });
   
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Movie search by title"
          value={this.state.search}
          />

        {this.state.dataSource!=undefined?
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            <View>
              <Text style={styles.textStyle}>{item.Title}</Text>
              <Image source={{uri: item.Poster}} style={{width: 70, height: 100,margin:10}}/>
              <Text style={styles.textStyle}>Year Released:{item.Year}</Text>
              <Text style={styles.textStyle}>IMDb page:https://www.imdb.com/title/+{item.imdbID}+/</Text>
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />:
        //check the records avaliable or not according to send the message
        <View style={styles.viewStyle}>
          {this.state.search.length!=0?
          <View style={{ flex: 1,justifyContent: "center",alignItems: "center"}}>
              <Text>Record not found</Text>
          </View>:
                <View></View>}
          </View>}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
});



























































































// import * as React from 'react';
// import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
// import { SearchBar } from 'react-native-elements';
 
// export default class flatList extends React.Component {
//   constructor(props) {
//     super(props);
//     //setting default state
//     this.state = { isLoading: true, search: '' };
//     this.arrayholder = [];
//   }
//   componentDidMount() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson,
//           },
//           function() {
//             this.arrayholder = responseJson;
//           }
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
//   search = text => {
//     console.log(text);
//   };
//   clear = () => {
//     this.search.clear();
//   };
//   SearchFilterFunction(text) {
//     //passing the inserted text in textinput
//     const newData = this.arrayholder.filter(function(item) {
//       //applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     this.setState({
//       //setting the filtered newData on datasource
//       //After setting the data it will automatically re-render the view
//       dataSource: newData,
//       search:text,
//     });
//   }
//   ListViewItemSeparator = () => {
//     //Item sparator view
//     return (
//       <View
//         style={{
//           height: 0.3,
//           width: '90%',
//           backgroundColor: '#080808',
//         }}
//       />
//     );
//   };
//   render() {
//     if (this.state.isLoading) {
//       //Loading View while data is loading
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
//     return (
//       //ListView to show with textinput used as search bar
//       <View style={styles.viewStyle}>
//         <SearchBar
//           round
//           searchIcon={{ size: 24 }}
//           onChangeText={text => this.SearchFilterFunction(text)}
//           onClear={text => this.SearchFilterFunction('')}
//           placeholder="Type Here..."
//           value={this.state.search}
//           />
//           <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.ListViewItemSeparator}
//           //Item Separator View
//           renderItem={({ item }) => (
//             // Single Comes here which will be repeatative for the FlatListItems
//             <Text style={styles.textStyle}>{item.title}</Text>
//           )}
//           enableEmptySections={true}
//           style={{ marginTop: 10 }}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor:'white',
//     marginTop: Platform.OS == 'ios'? 30 : 0
//   },
//   textStyle: {
//     padding: 10,
//   },
// });

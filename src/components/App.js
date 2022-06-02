import React, {Component} from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';



export default class App extends Component {
state = {images: []}; 

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term},
      
    })
    console.log(response);
    this.setState({images: response.data.results})
  }

  render () {
    return (
      <div style={{marginTop: '10px'}}className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


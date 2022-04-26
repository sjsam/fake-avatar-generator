import { Component } from 'react';
import { faker } from '@faker-js/faker'

class App extends Component {
  state = { imageURLList: [] }
  componentDidMount() {
    // When the component is mounted, load 100 URLs
    console.log('Going to load 100 images');
    let i = 0;
    let urlList=[];
    while (i < 200) {
      urlList.push(faker.image.avatar());
      i++;
    }
    console.log('Loaded Image URLs below');
    console.log(urlList)
    this.setState({ imageURLList: urlList });
  }
  contentHelper() {
    return (this.state.imageURLList.map((url,index) => <img className='float-left m-4' src={url} alt={`avatar-${index}`}/>))
  }
  render() {
    return (
      <div className="App p-4">
        <h1 className='text-xl'>Random Image Creator</h1>
        <p> Right click any image based on gender, click inspect and then copy paste the URL</p>
        <div className="mt-4">{this.contentHelper()}</div>
      </div>
    );
  }

}

export default App;

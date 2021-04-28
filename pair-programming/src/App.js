import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
// import MyBook from './components/MyBook'
import BookList from './components/BookList'
import Fantasy from './data/fantasy.json'
import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <WarningSign text="Hello world!" />
      <MyBadge text="My Badge" colour="primary" />
      {/* <MyBook book={{
        "asin": "0316389706",
        "title": "Sword of Destiny (The Witcher)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
        "price": 10.39,
        "category": "fantasy"
      }}/> */}
      <BookList listOfBooks={Fantasy}/>

    </div>
  );
}

export default App;

import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Item from './components/item/Item.js';
import './App.css';

/*
<aside id="welcome">
  <h1>Hej och välkommen!</h1>
  <h3>Håll dig till höger Svensson<br/>In keeping with the times, here are our exports:</h3>
</aside>
*/

function App() {
  let app = (
    <div className="App">
      <Header/>
      <div className="body">
        <Item name="Benjamin Lewis" pfp="https://picsum.photos/200/200" link="www.lewibs.com" about="Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told."/>
        <Item name="Alexander Lewis" pfp="https://picsum.photos/200/200" link="www.lewibs.com" about="Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told."/>
        <Item name="Benjamin Lewis" pfp="https://picsum.photos/200/200" link="www.lewibs.com" about="Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told."/>
      </div>
      <Menu />
    </div>
  );

  return app;
}

export default App;

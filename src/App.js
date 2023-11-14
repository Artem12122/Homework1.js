import logo from './logo.svg';
import './App.css';


const MenuItem = ({children="itemX", href="#"}) => 
  <li><a class="menu-item" href={href}>{children}</a></li>


function App () {
  return (
    <div className="App">
      <header class="header">
        <img class="logo" src="./img/logo.jpg" />
        <nav class="nav">
            <input id="burger" type="checkbox" />
            <label class="nav-button" for="burger">
                <span></span>
            </label>
            <ul class="item">
                <MenuItem>item_1</MenuItem>
                <MenuItem>item_2</MenuItem>
                <MenuItem>item_3</MenuItem>
                <MenuItem>item_4</MenuItem>
                <MenuItem>item_5</MenuItem>
                {/* <li><a class="menu-item" href="#">Item1</a></li>
                <li><a class="menu-item" href="#">Item2</a></li>
                <li><a class="menu-item" href="#">Item3</a></li>
                <li><a class="menu-item" href="#">Item4</a></li>
                <li><a class="menu-item" href="#">Item5</a></li> */}
            </ul>
        </nav>
    </header>
    <main class="main">
        <aside class="aside-left">Aside 1</aside>
        <article class="article-head">
            <p class="article-head-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, diam vehicula ultricies eleifend, dui neque vestibulum mauris, ac facilisis massa purus in lectus. </p>
            <h2 class="section-title">OUT WORK</h2>
            <div class="parent-section">
                <section class="section"> 
                    <div class="section2"> 
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, diam vehicula ultricies eleifend, dui neque vestibulum.orem ipsum dolor sit amet.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
                <section class="section">
                    <div class="section2">
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
                <section class="section">
                    <div class="section2">
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
                <section class="section">
                    <div class="section2">
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
                <section class="section">
                    <div class="section2">
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, diam vehicula ultricies eleifend, dui neque vestibulum.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
                <section class="section">
                    <div class="section2">
                        <img class="logo-section" src="./img/section-logo.jpg" />
                        <h5 class="title-section">Lorem ipsum dolor sit amet.</h5>
                        <p class="text-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, diam vehicula ultricies eleifend, dui neque vestibulum.</p>
                    </div>
                    <button class="button-section">Go</button>
                </section>
            </div>
        </article>
        <aside class="aside-right">Aside 2</aside>
    </main>
    <footer class="footer">
        <div>Footer</div>
    </footer>
    </div>
  );
}

export default App;

import React, { Component } from "react";

//components
import Header from "./components/header/header";
import Blog from "./components/BlogCard/blog";
import Forum from "./components/ForumCard/forum";
import Footer from "./components/footer/footer";
import Cover from "./components/cover/cover";
import Carousel from "./components/carousell/carousel";
import Twitter from "./components/twitterfeed/twitter";
import Newsletter from "./components/newslettter/newsletter";
import Titleintroduction from "./components/titleintroduction/titleintroduction";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//app home
const Home = () => {
  return (
    <>
      <Titleintroduction />
      <Blog />
      <Forum />
      <Twitter />
    </>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Cover />
          <Carousel />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

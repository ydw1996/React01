import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header fonts="nexon" />
      <Content>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText fonts={["section", "nexon", "gray"]} />
        <Card fonts={["section", "nexon"]} />
        <Banner fonts="nexon" />
        <Text fonts={["section", "nexon"]} />
      </Content>
      <Footer fonts={["section", "nexon", "gray"]} />
    </div>
  );
}

export default App;

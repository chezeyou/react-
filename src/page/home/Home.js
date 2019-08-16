import React,{Component} from 'react';
import './Home.less';
import Header from '../../components/header/Header';
import { Carousel } from 'antd';

class Home extends Component {
    constructor() {
        super();
        this.state={
          arr:[]
        }
      }
    render() {
        return (
            <div className='home'>
                <Header></Header> 
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}
export default Home;




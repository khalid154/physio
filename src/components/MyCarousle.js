import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mylogo from '../mylogo.webp';
import Logo from '../logo.svg';


function MyCarousle() {
    const images = [
        { url: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600", tile: "hum honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tile: "hum jaroor honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tile: "hum hi honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tile: " sale hum honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tile: "hum honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tile: "hum honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url:"https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2015/11/slide8-1920x715.jpg", tile: "hum honge kamyab", descripttion: "desccsdjksdjhksd" },
        { url: "https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2015/11/slide_005-1920x715.jpg", tile: "hum honge kamyab", descripttion: "desccsdjksdjhksd" },
    ]

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    const style = {
        maxWidth: 555,
        maxHeight: 229,
        margin: 0,
        width: 555,
        height: 229,
        objectFit: 'contain'
    }

    return (
        <Carousel activeIndex={index} style={{ width: '100%', Height: '100%' }} onSelect={handleSelect} touch pause={true} controls={false} fade indicators={true} keyboard interval={1000} wrap={false}>

            {images.map((item, i) => {
                return (
                    <Carousel.Item className='carousel-item' item={item} key={i}>
                        <img className='d-block w-100' src={item.url} alt={i} style={{ style }} />
                        <Carousel.Caption>
                            <h3>{item.tile}</h3>
                            <p>{item.descripttion}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }

            )}
        </Carousel>
    );
}

export default MyCarousle;
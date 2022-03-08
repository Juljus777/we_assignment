import React from 'react'
import Calculator from './components/Calculator';
import Image from './images/Image.png';
import Bullet1 from './images/Bullet_1.png';
import Bullet2 from './images/Bullet_2.png';

const App = () => {
  return (
    <div className="app">
        <main className='mainContent'>
            <h1 className='introductionTitle'>Quam Tristique Condimentum</h1>
            <p className='introductionText'>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                 eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
                 magnis dis parturient montes, nascetur ridiculus mus. <a href='#'>Curabitur blandit</a> tempus
                  porttitor. Integer posuere erat a ante venenatis dapibus posuere
                 velit aliquet. Vestibulum id ligula porta felis euismod semper.
            </p>
            <section className='splitSection'>
                <div className='imageContainer'>
                    <img className='decorativeImage' src={Image}/>
                </div>
                <div className='textContainer'>
                    <h2>Fringilla Euismod Adipiscing Ipsum</h2>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                         Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.
                    </p>
                    <ul className='p0'>
                        <li className='listItem'>
                            <img src={Bullet1} className='bullet'/>
                            Tellus Ullamcorper Inceptos
                        </li>
                        <li className='listItem'>
                            <img src={Bullet1} className='bullet'/>
                            Magna Condimentum
                        </li>
                        <li>
                            <ul className='pl1'>
                                <li className='listItem'>
                                    <img src={Bullet2} className='bullet2'/>
                                    Mattis Tristique
                                </li>
                                <li className='listItem'>
                                    <img src={Bullet2} className='bullet2'/>
                                    Pharetra Pellentesque Dapibus
                                </li>
                            </ul>
                        </li>
                        <li className='listItem'>
                            <img src={Bullet1} className='bullet'/>
                            Aenean Inceptos
                        </li>
                        <li className='listItem'>
                            <img src={Bullet1} className='bullet'/>
                            Parturient Bibendum
                        </li>
                    </ul>
                </div>

            </section>
        </main>
        <Calculator />
    </div>
  )
}

export default App
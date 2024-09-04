import React, { useRef } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../Assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    const menuListRef = useRef(null);


    const scrollLeft = () => {
        menuListRef.current.scrollBy({ left: -200, behavior: 'smooth' }); 
    };

    const scrollRight = () => {
        menuListRef.current.scrollBy({ left: 200, behavior: 'smooth' }); 
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Discover Our Trends</h1>
            <p className='explore-menu-text'>Discover the essence of modern style with TrendyNest. Our collection features the latest trends in fashion and home decor, designed to add a touch of elegance and comfort to your life. Explore our selection and find high-quality, trendy items that perfectly suit your taste and enhance your daily living.</p>
            <div className='explore-menu-flex'>
                <i className="fa-solid fa-angle-left explore-icon" onClick={scrollLeft}/>
                <div className='explore-menu-list' ref={menuListRef}>
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                                    <img src={item.menu_image} alt="" className='Item-selection' />
                                    <p>{item.menu_name}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <i className="fa-solid fa-angle-right explore-icon" onClick={scrollRight}/>
            </div>
        </div>
    )
}

export default ExploreMenu

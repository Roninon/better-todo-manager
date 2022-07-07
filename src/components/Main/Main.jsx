import React from 'react';
import '../../App.css';
import InputField from '../Input/InputField';

const Main = () => {
    return (
        <div className="Main">
            <div className='Container'>
                <div className='SectionWrapper'>
                    <div className='CardsFeed'>
                        <div className='CardWrapper'>
                            <div className='Blur'></div>
                            <div className='Card'>
                                <div className='NameInputWrapper'>
                                    <InputField
                                        onChange={(event) => console.log(event.target.value)}
                                        type="text"
                                        placeholder='Название заметки ...'
                                        style={{width: '50%'}}
                                    />
                                    <button className="DescriptionButton">Описание</button>
                                </div>
                                <div className="DatePickerGroup">
                                    <button>Время</button>
                                    <button>Дата</button>
                                </div>

                            </div>
                        </div>
                        <div className='CardList'>
                            <div className="CardItem CardItemOne"></div>
                            <div className="CardItem CardItemTwo"></div>
                            <div className="CardItem CardItemThree"></div>
                            <div className="CardItem CardItemFour"></div>
                            <div className="CardItem CardItemFive"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
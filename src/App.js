import { Route, Routes, Link } from 'react-router-dom';

import './App.css';
import InputField from './components/Input/InputField';
import Main from './components/Main/Main';
import Settings from './components/Settings';

function App() {
    return (
        <>
            <div className='PatternBackground'></div>
            
            <div className='NavbarWrapper'>
                <div className='Container'>
                    <div className='Navbar SectionWrapper'>
                        <div className='LogoWrapper'>
                            <h1 className='Logo'>Navbar</h1>
                        </div>
                        <div className='SearchWrapper'>
                            <InputField type="text" placeholder='Найти заметку ...'/>
                        </div>
                        <div className='LinkGroup'>
                            <Link className='' to="/">Главная</Link>
                            <Link to="/settings">Настройки</Link>
                            <div className='Avatar'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </>
    );
}

export default App;
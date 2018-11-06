import React from 'react';
import App from './App';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from './locales/en';
import ru from './locales/ru';
import de from './locales/de';
import enLocale from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';
import deLocale from 'react-intl/locale-data/de';
import './css/Root.css';
import MyClock from './components/MyClock';


const locales = {en, ru, de};


addLocaleData([...enLocale, ...ruLocale, ...deLocale]);

class Root extends React.Component {
    
    state = { locale: 'en' };
    setLocale = (locale) => {
        this.setState({ locale });
    }
    changeRus() {
		this.setState({locale: 'ru'});
    }
    changeEng() {
        this.setState({locale: 'en'});
    }
    changeDe() {
        this.setState({locale: 'de'});
    }

    render() {
        const { locale } = this.state;
        return (
            <div>                
                <div className="head">
                    <MyClock />
                    <div className="flags">                
                        <div className="flag flag-gb" onClick={this.changeEng.bind(this)}></div>
                        <div className="flag flag-de" onClick={this.changeDe.bind(this)}></div>
                        <div className="flag flag-ru" onClick={this.changeRus.bind(this)}></div>
                    </div>
                </div>
                 <IntlProvider locale={locale} messages={locales[locale]}>
                <App setLocale={this.setLocale} />
                </IntlProvider> 
            </div>
        );
    }

}

export default Root;


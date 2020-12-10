import React, { memo } from 'react';
import Country from './Country';
import List from './List';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Login from './Login';
import { CSSTransition } from "react-transition-group";
import { PersistentComponent } from 'react-persistent-state';

class Home extends PersistentComponent { 

    constructor(props){
        super(props);

        this.state = {
            country: "",
            dish: "",
            description: "",
            photo: "",
            recipe: "",
            selected: false,
            about: false,
            list: false,
            cssTrans: true
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleAbout = this.handleAbout.bind(this);
        this.handleList = this.handleList.bind(this);
    }

    handleEnter(country, dish, description, photo, recipe){
        this.setState({
            country: country,
            dish: dish,
            description: description,
            photo: photo,
            recipe: recipe,
            selected: true
        })
    }

    handleBack(){
        this.setState({
            selected: false
        });
        setTimeout(() => {
            this.setState({
                country: "",
                dish: "",
                description: "",
                photo: "",
                recipe: ""
            }) 
        }, 500);
    }

    handlePhotoSource = (photo) => {
        const url = new URL(photo);
        return url.hostname;
    }

    handleAbout(){
        let current = this.state.about;
        this.setState({
            about: !current
        })
    }

    handleList(){
        let current = this.state.list;
        this.setState({
            list: !current
        })
    }
    
    render(){ 
    
        const { country, dish, description, photo, recipe, selected, about, list, cssTrans } = this.state;

        return(
            <CSSTransition
                classNames="transition"
                transitionAppearTimeout={500}
                timeout={500}
                in={ cssTrans }
                unmountOnExit
                appear
            >         
                <section className="home" id="home">
                    <Header handleAbout={this.handleAbout} handleList={this.handleList} />
                    <Map setTooltipContent={this.props.setTooltipContent} handleEnter={this.handleEnter} />
                    <About handleAbout={ this.handleAbout } about={about} />
                    <List handleEnter={ this.handleEnter } handleList={ this.handleList } list={list} />
                    <Country selected={ selected } country={ country } dish={ dish } description={ description } photo={ photo } recipe={ recipe } handleBack={ this.handleBack } handlePhotoSource={ this.handlePhotoSource } />
                    <Footer />
                    <Login />
                </section>
            </CSSTransition>
        );
    }
}

export default memo(Home);

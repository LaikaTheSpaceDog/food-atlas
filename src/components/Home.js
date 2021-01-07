import React, { memo } from 'react';
import Country from './Country/';
import List from './List';
import About from './About';
import Footer from './Footer';
import Header from './Header/';
import Map from './Map';
import Login from './Login/';
import Favourites from './Favourites/';
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
            login: false,
            favourites: false,
            cssTrans: true
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleAboutView = this.handleAboutView.bind(this);
        this.handleListView = this.handleListView.bind(this);
        this.handleLoginView = this.handleLoginView.bind(this);
        this.handleFavouritesView = this.handleFavouritesView.bind(this);
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

    handleAboutView(){
        let current = this.state.about;
        this.setState({
            about: !current
        })
    }

    handleListView(){
        let current = this.state.list;
        this.setState({
            list: !current
        })
    }

    handleLoginView(){
        let current = this.state.login;
        this.setState({
            login: !current
        })
    }

    handleFavouritesView(){
        let current = this.state.favourites;
        this.setState({
            favourites: !current
        })
    }
    
    render(){ 
    
        const { country, dish, description, photo, recipe, selected, about, list, cssTrans, login, favourites } = this.state;

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
                    <Header handleAboutView={this.handleAboutView} handleListView={this.handleListView} handleLoginView={this.handleLoginView} handleFavouritesView={this.handleFavouritesView} />
                    <Map setTooltipContent={this.props.setTooltipContent} handleEnter={this.handleEnter} />
                    <About handleAboutView={ this.handleAboutView } about={about} />
                    <List handleEnter={ this.handleEnter } handleListView={ this.handleListView } list={list} />
                    <Country selected={ selected } country={ country } dish={ dish } description={ description } photo={ photo } recipe={ recipe } handleBack={ this.handleBack } handlePhotoSource={ this.handlePhotoSource } />
                    <Footer />
                    <Login login={ login } handleLoginView={ this.handleLoginView } />
                    <Favourites favourites={ favourites } handleFavouritesView={ this.handleFavouritesView } handleEnter={ this.handleEnter }/>
                </section>
            </CSSTransition>
        );
    }
}

export default memo(Home);

import React, {Component} from 'react';
import {Text, TouchableOpacity} from "react-native";


const initialState = {currentPhoto: null, theme:'light'};


// Create the context object that will store our global application state
const AppContext = React.createContext(initialState);
export const {Consumer} = AppContext;

export const mapContextToProps = WrappedComponent => (
    class AppContext extends Component {
        render() {
            return (
                <Consumer>
                    {(context) => (<WrappedComponent {...context}{...this.props}/>)}
                </Consumer>
            );
        }
    }
);

export class ContextProvider extends React.Component {
    state = initialState;
    toggleTheme = () => {
        this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light',
        }))
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <TouchableOpacity onClick={this.toggleTheme}>
                    <Text>toggle theme</Text>
                </TouchableOpacity>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}



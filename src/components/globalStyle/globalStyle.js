import React from 'react';
import './globalStyle.module.scss';
class GlobalStyle extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.children;
    }
}
export default GlobalStyle;

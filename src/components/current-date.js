import React from 'react';
import Moment from 'moment';

export default class CurrentDateComponent extends React.Component {

	    setTime() {
        var lang = 'en';
        this.setState({
            time: Moment(new Date())
                .locale(lang)
                .format('dddd, DD MMMM YYYY')
        });
    }

    update() {}

    componentWillMount() {
        this.setTime();
    }

    componentDidMount() {
        window
            .setInterval(function () {
                this.setTime();
            }.bind(this), 60000);
    }

    render() {
        return <span id="datenow">{this.state.time}</span>;
    }

}

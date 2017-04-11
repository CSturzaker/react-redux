
import React from 'react';
import { connect } from 'react-redux';
import { createMap } from '../../actions/mapActions';

const mapStateToProps = (state) => {
    return {
        mapCtrl: state.map.mapCtrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMap: (domNode) => {
            dispatch(createMap(domNode))
        }
    };
};

class MapPage extends React.Component {

    componentDidMount() {

        if (!this.props.mapCtrl) {
            this.props.createMap(this.refs.mapView);
        }
    }

    render() {
        return (
            <div>
                <h1>Map 1</h1>
                <div ref='mapView' className='map-view'></div>
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage);
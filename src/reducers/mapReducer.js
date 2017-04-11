import * as types from '../actions/actionTypes';
import initialState from './initialState';

const EsriMap = require('esri/map');

export default function mapReducer(state = initialState.map, action) {
    switch (action.type) {
        case types.CREATE_MAP:
            return Object.assign({}, state, {
                mapCtrl: new EsriMap(
                    action.domNode,
                    {
                        basemap: 'dark-gray',
                        center: [-118, 34.5],
                        zoom: 8
                    }
                )
            })
        default:
            return state;
    }
}
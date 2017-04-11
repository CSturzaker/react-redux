import * as types from './actionTypes';

export function createMap(domNode) {
    return {
        type: types.CREATE_MAP,
        domNode: domNode
    };
}
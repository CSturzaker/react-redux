//action creator
export function createCourse(course) {
    //type property defines the actions type
    //returns an action
    return { type: 'CREATE_COURSE', course};
}
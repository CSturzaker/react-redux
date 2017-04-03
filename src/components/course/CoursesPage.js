import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    //** CONSTRUCTOR */
    constructor(props, context) {
        super(props, context);
    }

    //** CHILD FUNCTIONS CALLED BY RENDER */
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    //** RENDER */
    render (){
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses = {courses} />
            </div>
        );
    }
}

//** PROPTYPE VALIDATION */
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//** REDUX RELATED FUNCTIONS */
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses//properties to see on component
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
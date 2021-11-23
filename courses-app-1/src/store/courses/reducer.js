import courseModel from './courseModel';

const coursesInitialState = [];

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case 'courses/courseAdded': {
      return (
        [
          ...state,
          {
            ... action.payload,
            id: crypto.randomUUID()
          }
        ])
    };

    case 'courses/courseRemoved': {
      return (
        state.filter( (course) => course.id === action.payload.courseId)
        )
    };
      
    case 'courses/courseUpdated': {
      //const index = state.findIndex((course) => course.id === action.payload.course.id);        
      const withRemovedCourse = state.filter( (course) => course.id === action.payload.course.id);
      return (
        [
          ...withRemovedCourse,
          action.payload
        ]
        )
    };

    case 'courses/get': {
      //here get from API
      return state;
    };

    default:
      return state;
  }
}

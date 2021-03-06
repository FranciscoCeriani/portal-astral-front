import { IAction, IStudent } from "../../globals";
import { studentActions } from "../actions";

export interface IState {
  [id: string]: IStudent;
}

const initialState: IState = {};

const reducer = (state: IState = initialState, action: IAction): IState => {
  // @ts-ignore
  const { type, payload } = action;

  const { FETCH_STUDENTS_SUCCESS, FETCH_STUDENT_SUCCESS, DELETE_STUDENT_SUCCESS } = studentActions;

  switch (type) {

    case DELETE_STUDENT_SUCCESS:
      const { [payload.professorId]: deleted, ...rest } = state;
      return rest;

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...payload.students.reduce((acc, student) => ({ ...acc, [student.id]: student }), {}),
      };

    case FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        [payload.student.id]: payload.student,
      };

    default:
      return state;
  }
};

export default reducer;
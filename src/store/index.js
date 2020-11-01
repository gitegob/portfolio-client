import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogsReducer from "./reducers/blogs";
import contactsReducer from "./reducers/contacts";
import projectsReducer from "./reducers/projects";
import skillsReducer from "./reducers/skills";

const reducer = combineReducers({
  blogs: blogsReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  contacts: contactsReducer
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
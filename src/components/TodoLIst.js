import React, { Component } from 'react'

export class TodoList extends Component {
  render() {
    return (
      <div>TodoList</div>
    )
  }
}

export default TodoList

// още при създаването на компонента ми дава грешка и като го импортвам ми дава че не съществува

// Cannot find file: 'TodoList.js' does not match the corresponding name on disk: '.\src\components\TodoLIst.js'.

// ПРИ създаването С npx create-react-app  ....   пак ми създавастарата версия на  "web-vitals": "^2.1.4"

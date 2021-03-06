import React, { Component } from 'react'
import { Styles, Button } from 'thicket-elements'
import './Delete.css'

const { linearGradient } = Styles

export default class Delete extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { caption, onDelete, onCancel } = this.props
    return <div className="delete" style={{ background: linearGradient }}>
      <div className="delete__wrap">
        <h2>Are you sure?</h2>
        <h3>Are you sure you want to delete the GIF titled <span className="delete__caption">"{caption}"</span>?</h3>
        <div className="delete__msg">
          <b>NOTE:</b> this action cannot be undone.</div>
        <div className="delete__btns">
          <Button
            data-test="delete-confirm"
            className="delete__confirm"
            onClick={onDelete}
          >
            Confirm Delete
          </Button>
          <Button
            secondary
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  }
}

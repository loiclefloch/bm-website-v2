import React from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'
import ArrayUtils from '../../utils/ArrayUtils'

import ui from 'redux-ui'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from '../search/SearchBar'
import Tag from './Tag'

@ui({
  persist: false,
  state: {
    searchQuery: '',
    selectedTags: (props) => props.selectedTags,
  }
})
class ChooseTagDialog extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTags !== this.props.selectedTags) {
      this.props.updateUI({
        selectedTags: nextProps.selectedTags,
      })
    }
  }

  isTagSelected(tag): boolean {
    return ArrayUtils.exists(this.props.ui.selectedTags, { id: tag.id })
  }

  handleOnTagClick = (tag, event) => {
    this.props.updateUI({
      selectedTags: ArrayUtils.toggleObject(this.props.ui.selectedTags, tag, { id: tag.id }),
    })
  }

  handleSearchQueryChange = (event, searchQuery) => {
    this.props.updateUI({ searchQuery })
  }

  handleOnSave = () => {
    const selectedTags = this.props.ui.selectedTags
    this.props.onSave(selectedTags)
    this.props.resetUI()
  }

  render() {
    const { ui, open, tags, selectedTags, onClose } = this.props
    const actions = []

    const title = (
      <span></span>
    )

    let filteredTags = []

    if (isEmpty(ui.searchQuery)) {
      // put selected first
      filteredTags = tags.sort((a, b) => {
        const aSelected = this.isTagSelected(a)
        const bSelected = this.isTagSelected(b)

        if (aSelected && bSelected) {
          return 0
        }

        if (aSelected) {
          return -1
        }

        if (bSelected) {
          return 1
        }

        return 0
      })
    } else {
      // filter
      const options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "description",
          "title",
          "name",
          "url",
          // "websiteInfo.",
        ]
      };
      const fuse = new Fuse(tags, options)
      filteredTags = fuse.search(ui.searchQuery)
    }

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onClose}
        autoScrollBodyContent={false}
        bodyClassName="u-minHeight400"
        bodyStyle={{
          height: '400px',
        }}
      >
        <div>
          {/* Search bar */}
          <SearchBar
            onChange={this.handleSearchQueryChange}
            value={ui.searchQuery}
            autoFocus
            style={{
              width: '60%',
            }}
          />

          <RaisedButton
            label="Save"
            primary={true}
            onClick={this.handleOnSave}
            className="u-marginLeft15"
            style={{
              minWidth: '100px',
            }}
          />
        </div>

        {/* Tag list */}
        <div
          className="u-marginTop20 u-flexStretch u-justifyContentCenter u-flexWrap u-minHeight300 u-overflowScrollY"
          style={{
            height: '300px',
          }}
        >
          {filteredTags.map((tag) => {
            const isSelected = this.isTagSelected(tag)

            return (
              <Tag
                key={tag.id}
                tag={tag}
                mode={Tag.Mode.SQUARE_WITH_NAME}
                className="u-cursorPointer u-marginBottom10"
                isSelected={isSelected}
                onClick={this.handleOnTagClick}
              />
            )
          })}
        </div>
      </Dialog>
    )
  }
}

ChooseTagDialog.defaultProps = {
  selectedTags: [],
}

ChooseTagDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  selectedTags: PropTypes.array,

  /**
   * @param [tags]
   * @type {Function}
   */
  onSave: PropTypes.func.isRequired,

  onClose: PropTypes.bool.isRequired,
}

export default ChooseTagDialog

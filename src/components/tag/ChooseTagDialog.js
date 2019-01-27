import React from 'react'
import PropTypes from 'prop-types'

import { compose, connect } from 'reacticoon/view'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'
import ArrayUtils from '../../utils/ArrayUtils'

import { withStyles } from '@material-ui/core/styles'
import { addTagsToBookmark } from 'modules/bookmark/bookmark/actions.js'

import { getTagsList } from 'modules/tag'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import { ColorsList } from 'app/components/colorpicker'
import SearchBar from '../search/SearchBar'
import Tag from './Tag'

const styles = theme => ({
  dialogPaper: {
    minWidth: 300,
    height: '400px',
  },
  tagRoot: {
    marginBottom: 10,
    minWidth: 200,
    display: 'inline-block',
  },
  tagList: {
    minHeight: 300,
    height: 300,
    marginTop: 20,
    justifyContent: 'center',
    overflowY: 'scroll',
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  searchBar: {
    width: '60%',
  },
  saveBtn: {
    minWidth: 110,
    marginLeft: theme.spacing.unit * 2,
  },
})

const View = {
  CHOOSE_TAG: 'CHOOSE_TAG',
  CREATE_TAG: 'CREATE_TAG',
}

class ChooseTagDialog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchQuery: '',
      selectedTags: props.selectedTags,
      view: View.CHOOSE_TAG,

      //
      // View.CREATE_TAG state
      //
      chosenColor: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTags !== this.props.selectedTags) {
      this.setState({
        selectedTags: nextProps.selectedTags,
      })
    }
  }

  isTagSelected(tag) {
    return ArrayUtils.exists(this.state.selectedTags, { id: tag.id })
  }

  handleOnTagClick = (tag, event) => {
    this.setState({
      selectedTags: ArrayUtils.toggleObject(this.state.selectedTags, tag, { id: tag.id }),
    })
  }

  handleSearchQueryChange = event => {
    this.setState({ searchQuery: event.target.value })
  }

  handleDisplayCreateTagView = () => {
    this.setState({
      view: View.CREATE_TAG,
    })
  }

  handleOnSave = () => {
    const selectedTags = this.state.selectedTags
    this.props.onSave(selectedTags)
    this.props.addTagsToBookmark(selectedTags, this.props.bookmark)
    this.setState({
      searchQuery: '',
    })
    this.props.onClose();
  }

  handleColorChosen = chosenColor => {
    this.setState({
      chosenColor,
    })
  }

  handleCreateTag = () => {
    const selectedTags = this.state.selectedTags
    // create the new tag corresponding to the search
    selectedTags.push({ name: this.state.searchQuery, color: this.state.chosenColor })
    // save tags and update bookmark
    this.props.onSave(selectedTags)
    this.props.addTagsToBookmark(selectedTags, this.props.bookmark)
    this.setState({
      searchQuery: '',
      view: View.CHOOSE_TAG,
    })
    this.props.onClose();
  }

  render() {
    const { open, tags, classes, onClose } = this.props
    const actions = []

    let filteredTags = []

    if (isEmpty(this.state.searchQuery)) {
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
          'description',
          'title',
          'name',
          'url',
          // "websiteInfo.",
        ],
      }
      const fuse = new Fuse(tags, options)
      filteredTags = fuse.search(this.state.searchQuery)
    }

    return (
      <Dialog
        actions={actions}
        open={open}
        onClose={onClose}
        onBackdropClick={onClose}
        classes={{
          paper: classes.dialogPaper,
        }}
      >
        <DialogContent>
        {this.state.view === View.CHOOSE_TAG && (
          <React.Fragment>
            <div>
              {/* Search bar */}
              <SearchBar
                onChange={this.handleSearchQueryChange}
                value={this.state.searchQuery}
                autoFocus
                className={classes.searchBar}
              />

              <Button
                variant="raised"
                color="primary"
                onClick={this.handleOnSave}
                className={classes.saveBtn}
              >
                Save
              </Button>
            </div>

            <div>
              <Button onClick={this.handleDisplayCreateTagView}>Create tag</Button>
            </div>

            {/* Tag list */}
            <div className={classes.tagList}>
              {filteredTags.map(tag => {
                const isSelected = this.isTagSelected(tag)

                return (
                  <Tag
                    key={tag.id}
                    tag={tag}
                    mode={Tag.Mode.SQUARE_WITH_NAME}
                    classes={{ root: classes.tagRoot }}
                    isSelected={isSelected}
                    onClick={this.handleOnTagClick}
                  />
                )
              })}
            </div>
          </React.Fragment>
        )}

        {this.state.view === View.CREATE_TAG && (
          <div>
            <ColorsList 
              onColorChosen={this.handleColorChosen}
              defaultSelection={this.state.chosenColor}
            />

            <Button onClick={this.handleCreateTag}>
              Add tag
            </Button>
          </div>
        )}
        </DialogContent>
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
  bookmark: PropTypes.object.isRequired,
  selectedTags: PropTypes.array,

  /**
   * @param [tags]
   * @type {Function}
   */
  onSave: PropTypes.func.isRequired,

  onClose: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    tags: getTagsList(state),
  }
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      addTagsToBookmark,
    }
  )
)(ChooseTagDialog)

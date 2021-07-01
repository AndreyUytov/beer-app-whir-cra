import './tags.scss'

import { ReactComponent as Close } from './../img/svg/close.svg'
import { ReactComponent as TagPlus } from './../img/svg/tag-plus.svg'
import OutlineButton from './OutlineButton'
import BackgroundButton from './BackgroundButton'
import { useState, useRef, useEffect } from 'react'

function renderPopupTag(tags, handleClickPopupTag) {
  return tags.map((elem) => {
    let classes = elem.active
      ? 'tags-list__item-btn button active'
      : 'tags-list__item-btn button'
    return (
      <li className="tags-list__item" key={elem.value}>
        <button onClick={handleClickPopupTag} className={classes}>
          {elem.value}
        </button>
      </li>
    )
  })
}

function TagPopup({ tags, handleClickSubmit, hidePopup }) {
  const [popupTags, setPopupTags] = useState(tags)

  // const prevTagsRef = useRef()
  // useEffect(() => {
  //   prevTagsRef.current = tags
  // })
  // const prevTags = prevTagsRef.current

  const handleClickPopupTag = (evt) => {
    const tag = evt.target.closest('button').textContent
    const newTags = popupTags.map((elem) => {
      if (elem.value === tag) {
        elem.active = !elem.active
      }
      return elem
    })

    setPopupTags(newTags)
  }

  const handleClosePopup = () => {
    hidePopup()
  }

  return (
    <div className="tags-popup">
      <div className="tags-popup__inner">
        <button
          className="tags-popup__close-popup button"
          onClick={handleClosePopup}
        >
          <Close width="36" height="36" />
        </button>
        <h2 className="tags-popup__title">Выберите тэги</h2>
        <ul className="tags-popup__list list">
          {renderPopupTag(popupTags, handleClickPopupTag)}
        </ul>
        <div className="tags-popup__btns-wrapper">
          <OutlineButton
            onClick={() => setPopupTags([])}
            classes="tags-popup__reset-btn"
          >
            Отменить
          </OutlineButton>
          <BackgroundButton onClick={() => handleClickSubmit(popupTags)}>
            Применить
          </BackgroundButton>
        </div>
      </div>
    </div>
  )
}

function renderTag(tags) {
  return tags.map((elem, i) => {
    if (elem.active) {
      return (
        <li className="tags-list__item" key={i}>
          <button className="tags-list__item-btn button">
            {elem.value}
            <Close width="17" height="17" />
          </button>
        </li>
      )
    } else return null
  })
}

export default function Tags({ values }) {
  const preparedTags = values.map((elem) => {
    return {
      value: elem,
      active: false,
    }
  })

  const [isVisiblePopup, setIsVisiblePopup] = useState(false)
  const [tags, setTags] = useState(preparedTags)

  const handleClickTagList = (evt, tags) => {
    const tag = evt.target.closest('button')
    if (!tag) return

    const tagValue = tag.textContent
    const newTags = tags.map((elem) => {
      if (elem.value === tagValue) {
        elem.active = !elem.active
      }
      return elem
    })

    setTags(newTags)
  }

  const handleClickSubmit = (tags) => {
    setTags(tags)
    hidePopup()
  }

  const hidePopup = () => {
    setIsVisiblePopup(false)
  }

  return (
    <>
      <ul
        onClick={(evt) => handleClickTagList(evt, tags)}
        className="catalog__tags-list tags-list list"
      >
        {renderTag(tags)}
        <li className="tags-list__item">
          <button
            className="tags-list__item-btn button"
            onClick={() => setIsVisiblePopup(true)}
          >
            <TagPlus width="18" height="18" />
          </button>
        </li>
      </ul>
      {isVisiblePopup ? (
        <TagPopup
          tags={tags}
          hidePopup={hidePopup}
          handleClickSubmit={handleClickSubmit}
        />
      ) : null}
    </>
  )
}

import './tags.scss'

import { ReactComponent as Close } from './../img/svg/close.svg'
import { ReactComponent as TagPlus } from './../img/svg/tag-plus.svg'
import OutlineButton from './OutlineButton'
import BackgroundButton from './BackgroundButton'
import { useState, useRef, useEffect } from 'react'

function renderPopupTag(tags) {
  return tags.map((elem) => {
    let classes = elem.active
      ? 'tags-list__item-btn button active'
      : 'tags-list__item-btn button'
    return (
      <li className="tags-list__item" key={elem.value}>
        <button className={classes}>{elem.value}</button>
      </li>
    )
  })
}

function TagPopup({ tags, handleClickSubmit, hidePopup }) {
  const ulRef = useRef(null)
  const handleClickPopupTag = (evt) => {
    const tag = evt.target.closest('button')
    tag.classList.toggle('active')
    const tags = ulRef.current.querySelectorAll('.tags-list__item-btn.active')
    if(tags.length > 4) {
      tag.classList.toggle('active')
      alert("the number of tags cannot be more than 4!")
    }
  }

  const handleClosePopup = () => {
    hidePopup()
  }

  const applyNewTags = () => {
    const tags = ulRef.current.querySelectorAll('.tags-list__item-btn')
    let result = []
    tags.forEach((el) => {
      result.push({
        value: el.textContent,
        active: el.classList.contains('active') ? true : false,
      })
    })
    handleClickSubmit(result)
  }

  const resetTags = () => {
    const tags = ulRef.current.querySelectorAll('.tags-list__item-btn')
    tags.forEach((el) => {
      el.classList.remove('active')
    })
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
        <h2 className="tags-popup__title">Выберите хмель</h2>
        <ul
          ref={ulRef}
          onClick={handleClickPopupTag}
          className="tags-popup__list list"
        >
          {renderPopupTag(tags)}
        </ul>
        <div className="tags-popup__btns-wrapper">
          <OutlineButton onClick={resetTags} classes="tags-popup__reset-btn">
            Отменить
          </OutlineButton>
          <BackgroundButton onClick={applyNewTags}>Применить</BackgroundButton>
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
            {elem.value.replace('_', " ")}
            <Close width="17" height="17" />
          </button>
        </li>
      )
    } else return null
  })
}

export default function Tags({ values, setupTagParametrs }) {
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

    const tagValue = tag.textContent.replace(' ', "_")
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

  useEffect(() => {
    setupTagParametrs(tags)
  }, [tags, setupTagParametrs])

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

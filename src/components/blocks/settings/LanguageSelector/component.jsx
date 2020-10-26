import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FormattedMessage } from 'react-intl'

import { FormControl, InputLabel } from '@/components/controls/Selector'
import { setLanguage } from '@/actions'

import { Select } from './styles'

const languageOption = [
  { code: 'en', value: 'English' },
  { code: 'ru', value: 'Русский' },
]

export default function LanguageSelector() {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.selectedLanguage)

  const handleChangeSelected = ({ target }) => {
    dispatch(setLanguage(target.value))
  }

  return (
    <FormControl className="form-control">
      <InputLabel>
        <FormattedMessage id="selectLangButtonLabel" defaultMessage="Language" />
      </InputLabel>
      <Select native onChange={handleChangeSelected} defaultValue={language}>
        {languageOption.map((item) => {
          return <option key={item.code} value={item.code}>{item.value}</option>
        })}
      </Select>
    </FormControl>
  )
}

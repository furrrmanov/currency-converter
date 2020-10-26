import styled from 'styled-components'

import MaterialFormLabel from '@material-ui/core/FormLabel'
import MaterialFormControl from '@material-ui/core/FormControl'
import MaterialFormGroup from '@material-ui/core/FormGroup'
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel'
import MaterialCheckbox from '@material-ui/core/Checkbox'
import MaterialSelect from '@material-ui/core/Select'

export const Select = styled(MaterialSelect)`
  width: 60px;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`

export const SelectButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FormLabel = styled(MaterialFormLabel)``

export const FormControl = styled(MaterialFormControl)``

export const FormGroup = styled(MaterialFormGroup)``

export const FormControlLabel = styled(MaterialFormControlLabel)``

export const Checkbox = styled(MaterialCheckbox)``

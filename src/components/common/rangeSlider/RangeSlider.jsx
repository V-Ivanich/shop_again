import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function valuetext(value) {
  return `${value}°C`
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Диапазон цен'}
        max={10000000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  )
}

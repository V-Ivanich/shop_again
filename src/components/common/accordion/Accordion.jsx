import * as React from 'react'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import RangeSlider from '../rangeSlider/RangeSlider'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>Наличие</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label='В наличии' />
          <FormControlLabel control={<Checkbox />} label='Под заказ' />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>Бренд</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label='Toyota' />
          <FormControlLabel control={<Checkbox />} label='Honda' />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>Цена</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RangeSlider />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
          <Typography>Модель</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label='Toyota 7u8' />
          <FormControlLabel control={<Checkbox />} label='honda 65' />
          <FormControlLabel control={<Checkbox />} label='SeaDoc 323' />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
          <Typography>Страны</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label='Китай' />
          <FormControlLabel control={<Checkbox />} label='Россия' />
          <FormControlLabel control={<Checkbox />} label='Германия' />
          <FormControlLabel control={<Checkbox />} label='США' />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls='panel6d-content' id='panel6d-header'>
          <Typography>Акции</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label='Скидки' />
          <FormControlLabel control={<Checkbox />} label='Распродажа' />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormControlLabel from '@mui/material/FormControlLabel'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import RangeSlider from '../rangeSlider/RangeSlider'
import './accordion.scss'

export default function CustomizedAccordions() {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>Наличие</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='В наличии'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Под заказ'
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography>Бренд</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Toyota'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Honda'
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel3a-content'
          id='panel3a-header'>
          <Typography>Цена</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RangeSlider />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel4a-content'
          id='panel4a-header'>
          <Typography>Модель</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Toyota 7u8'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='honda 65'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='SeaDoc 323'
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel5a-content'
          id='panel5a-header'>
          <Typography>Страны</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Китай'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Россия'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Германия'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='США'
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'var(--colors-bg)',
          color: 'var(--colors-text)',
          boxShadow: 'var(--box-shadow)',
        }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'var(--colors-text)',
              }}
            />
          }
          aria-controls='panel6a-content'
          id='panel6a-header'>
          <Typography>Акции</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Скидки'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'var(--colors-text)',
                }}
              />
            }
            label='Распродажа'
          />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

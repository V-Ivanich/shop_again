import { Button, Container, Alert } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconButton from '@mui/material/IconButton'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './login.scss'

const LogIn = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <>
      <Container
        maxWidth='sm'
        sx={{
          marginBottom: '2rem',
          backgroundColor: 'lightgrey',
          padding: '2rem',
          border: '1px solid grey',
          borderRadius: '8px',
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-email'>
            <FormControl sx={{ m: 1, width: '30ch' }} variant='filled'>
              <InputLabel htmlFor='standard-adornment-email'>email</InputLabel>
              <Input
                id='standard-adornment-email'
                {...register('email', {
                  required: 'Поле обязательно для заполнения',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/g,
                    message: 'Некорректный email',
                  },
                })}
                endAdornment={
                  <InputAdornment position='end'>
                    <MailOutlineIcon sx={{ paddingRight: '0.3rem' }} />
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <TextField
              id='standard-basic'
              label='email'
              variant='standard'
              {...register('email', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов',
                },
              })}
            /> */}

            {errors?.email && (
              <Alert severity='warning' className='alert-text'>
                <p style={{ fontSize: '0.9rem' }}>
                  {errors?.email?.message || 'Errors!'}
                </p>
              </Alert>
            )}
          </div>

          <div className='input-password'>
            <FormControl sx={{ m: 1 }} variant='standard'>
              <InputLabel htmlFor='standard-adornment-password'>
                password
              </InputLabel>
              <Input
                id='standard-adornment-password'
                {...register('password', {
                  required: 'Поле обязательно для заполнения',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                  pattern: {
                    value: /[A-Z]+\d+/g,
                    message: 'Должна быть заглавная буква и цифра',
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <TextField
            fullWidth
            id='standard-basic'
            label='Пароль'
            variant='standard'
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            })}
          /> */}

            {errors?.password && (
              <Alert severity='warning' className='alert-text'>
                <p style={{ fontSize: '0.9rem' }}>
                  {errors?.password?.message || 'Errors!'}
                </p>
              </Alert>
            )}
          </div>
          <Button
            sx={{ marginTop: '1rem' }}
            variant='contained'
            type='submit'
            disabled={!isValid}>
            Войти
          </Button>
        </form>
      </Container>
    </>
  )
}

export { LogIn }

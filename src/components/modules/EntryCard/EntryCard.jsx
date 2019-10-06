import React, { useState } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@material-ui/core';

import isDataValid from 'utilities/validation';
import { Button, Input } from 'components/reusable';
import { apiUrl } from 'utilities/api';


function EntryCard(props) {

  const [activeTab, setActiveTab] = useState(0);
  const [logInData, setLogInData] = useState({ email: '', password: '' });
  const [logInDataValid, setLogInDataValid] = useState({ email: true, password: true });
  const [registrationData, setRegistrationData] = useState({ fullname: '', email: '', password: '' })
  const [registrationDataValid, setRegistrationDataValid] = useState({ fullname: true, email: true, password: true });

  const handleChangeTab = (_, value) => {
    setActiveTab(value);
  }

  const handleLogInDataChange = (key) => (e) => {
    setLogInData({ ...logInData, [key]: e.target.value });

    if (!logInDataValid[key]) {
      setLogInDataValid({ ...logInDataValid, [key]: true });
    }
  }

  const handleRegistrationDataChange = (key) => (e) => {

    setRegistrationData({ ...registrationData, [key]: e.target.value });

    if (!registrationData[key]) {
      setRegistrationDataValid({ ...registrationDataValid, [key]: true });
    }
  }

  const handleLogIn = (email, password) => (e) => {
    const { addNotification } = props;

    if (!isDataValid.email(email)) {
      logInDataValid.email = false;
      setTimeout(() => addNotification('Неправильний формат email'), 200);
    }

    if (!password) {
      logInDataValid.password = false;
      setTimeout(() => addNotification('Ви не ввели пароль'), 400);
    }

    if (!logInDataValid.email || !logInDataValid.password) {
      console.log('send req');
    }

    setLogInDataValid({ ...logInDataValid });
    e.preventDefault();
  }

  const handleRegistration = (fullname, email, password) => (e) => {
    const { addNotification } = props;

    if (!fullname) {
      registrationDataValid.fullname = false;
      setTimeout(() => addNotification('Ви не ввели ім\'я'), 200);
    }

    if (!isDataValid.email(email)) {
      registrationDataValid.email = false;
      setTimeout(() => addNotification('Неправильний формат email'), 400);
    }

    if (!password) {
      registrationDataValid.password = false;
      setTimeout(() => addNotification('Ви не ввели пароль'), 600);
    }

    if (registrationDataValid.fullname && registrationDataValid.email && registrationDataValid.password) {
      axios.post(`${apiUrl}/user/signup`, {
        fullname,
        email,
        password
      }).then(({ data }) => {
        setLogInData({
          email: data.email,
          password: data.password
        });
        setActiveTab(0);
      }).catch(error => {
        console.log(error);
      });
    }

    setRegistrationDataValid({ ...registrationDataValid }); // update render
    e.preventDefault();
  }

  return (
    <div className='entry-card'>
      <div className='entry-card__header'>
        <Tabs
          value={activeTab}
          onChange={handleChangeTab}
          indicatorColor='primary'
        >
          <Tab label='Вхід' />
          <Tab label='Реєстрація' />
        </Tabs>
      </div>
      <div className=''>
        {activeTab === 0 && (
          <form
            className='entry-card__content'
            onSubmit={handleLogIn(logInData.email, logInData.password)}
          >
            <div className='entry-card__title'>Войти в Live Docs</div>
            <div className='entry-card__data'>
              <div className='entry-card__input'>
                <Input
                  label='Email'
                  value={logInData.email}
                  onChange={handleLogInDataChange('email')}
                  error={!logInDataValid.email}
                />
              </div>
              <div className='entry-card__input'>
                <Input
                  label='Пароль'
                  value={logInData.password}
                  onChange={handleLogInDataChange('password')}
                  error={!logInDataValid.password}
                  type='password'
                />
              </div>
            </div>
            <div className='entry-card__actions'>
              <Button color='primary' type='submit'>Войти</Button>
            </div>
          </form>
        )}
        {activeTab === 1 && (
          <form
            className='entry-card__content'
            onSubmit={handleRegistration(registrationData.fullname, registrationData.email, registrationData.password)}
          >
            <div className='entry-card__title'>Зареєструватися в Live Docs</div>
            <div className='entry-card__data'>
              <div className='entry-card__input'>
                <Input
                  label='ФІО'
                  value={registrationData.fullname}
                  onChange={handleRegistrationDataChange('fullname')}
                  error={!registrationDataValid.fullname}
                />
              </div>
              <div className='entry-card__input'>
                <Input
                  label='Email'
                  value={registrationData.email}
                  onChange={handleRegistrationDataChange('email')}
                  error={!registrationDataValid.email}
                />
              </div>
              <div className='entry-card__input'>
                <Input
                  label='Пароль'
                  value={registrationData.password}
                  onChange={handleRegistrationDataChange('password')}
                  error={!registrationDataValid.password}
                  type='password'
                />
              </div>
            </div>
            <div className='entry-card__actions'>
              <Button color='primary' type='submit'>Зареєструватися</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default EntryCard;